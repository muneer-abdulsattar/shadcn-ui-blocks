import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Effortless Shadcn UI Blocks & Components | Preview & Copy Code Snippets",
  description:
    "Explore a curated collection of Shadcn UI blocks and components. Preview, customize, and copy ready-to-use code snippets to streamline your web development workflow. Perfect for creating responsive, high-quality UI designs with ease.",
  keywords: [
    "Shadcn UI blocks",
    "Shadcn UI components",
    "Shadcn UI previews",
    "UI blocks for developers",
    "Shadcn UI code snippets",
    "Shadcn UI examples",
    "Shadcn UI customization",
    "Free Shadcn UI blocks",
    "Preview Shadcn UI components",
    "Shadcn UI examples for websites",
    "Copy Shadcn UI code snippets",
    "UI design components",
    "UI design blocks",
  ],
  icons: [
    {
      url: "/images/apple-touch-icon.png",
      type: "image/png",
      rel: "apple-touch-icon",
    },
    {
      sizes: "16x16",
      url: "/images/favicon-16x16.png",
      type: "image/png",
      rel: "icon",
    },
    {
      sizes: "32x32",
      url: "/images/favicon-32x32.png",
      type: "image/png",
      rel: "icon",
    },
  ],
  openGraph: {
    title: "Effortless Shadcn UI Blocks & Components| Preview & Copy Code",
    description:
      "Explore a curated collection of Shadcn UI blocks and components. Preview, customize, and copy ready-to-use code snippets to streamline your web development workflow. Perfect for creating responsive, high-quality UI designs with ease.",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        height: 630,
        width: 1200,
        alt: "Effortless Shadcn UI Component Previews & Code Snippets",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="xqbQoq68oIz9cbsrLZP3hXQmLmG0QTIcxjb7qLEMb3Y"
        />
      </head>
      <body className={cn(dmSans.className, "antialiased")}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
