import { blockList } from "@/blocks";
import {
  BLOCK_SCREENSHOT_EXTENSION,
  BLOCK_SCREENSHOT_HEIGHT,
  BLOCK_SCREENSHOT_WIDTH,
} from "@/description/blocks";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

interface ScreenshotCaptureOptions {
  outputPath?: string;
  fileName?: string;
  fullPage?: boolean;
  width?: number;
  height?: number;
  timeout?: number;
}

async function captureScreenshot(
  url: string,
  options: ScreenshotCaptureOptions = {}
) {
  const {
    outputPath = "public/images/blocks/screenshots",
    fileName = `screenshot-${Date.now()}.${BLOCK_SCREENSHOT_EXTENSION}`,
    fullPage = false,
    width = BLOCK_SCREENSHOT_WIDTH,
    height = BLOCK_SCREENSHOT_HEIGHT,
    timeout = 30000,
  } = options;

  try {
    // Create output directory if it doesn't exist
    fs.mkdir(outputPath, { recursive: true }, (error, path) => {
      console.log("MKDIR", error, path);
    });

    // Launch browser
    const browser = await puppeteer.launch({
      headless: "shell",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    // Create new page
    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({
      width: width,
      height: height,
    });

    // Navigate to URL with timeout
    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: timeout,
    });

    // Take screenshot
    const screenshotPath = path.join(outputPath, fileName);
    await page.screenshot({
      path: screenshotPath,
      fullPage: fullPage,
      type: "webp",
    });

    // Close browser
    await browser.close();

    console.log(`Screenshot saved successfully: ${screenshotPath}`);
    return screenshotPath;
  } catch (error) {
    console.error(`Error capturing screenshot for ${url}:`, error);
  }
}

export async function POST(req: Request) {
  try {
    const requestUrl = new URL(req.url);
    const secretKey = requestUrl.searchParams.get("secretKey");

    if (secretKey !== process.env.SCREENSHOT_GENERATION_SECRET_KEY) {
      return new Response("Unauthorized", { status: 401 });
    }

    for (const block of blockList) {
      const url = `${requestUrl.origin}/blocks/${block.name}/preview`;

      try {
        await captureScreenshot(url, {
          fileName: `${block.name}.${BLOCK_SCREENSHOT_EXTENSION}`,
        });
      } catch (error) {
        console.error(`Failed to capture screenshot for ${block.name}:`, error);
      }
    }

    return new Response("Screenshots generated successfully", { status: 201 });
  } catch (error) {
    console.error("Error generating screenshots:", error);
  }
}
