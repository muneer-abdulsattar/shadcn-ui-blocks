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
  title: "Effortless Shadcn UI Component Previews & Code Snippets",
  description:
    "Discover a vast collection of Shadcn UI components and blocks, designed for easy preview and copy. Streamline your development workflow with effortless, ready-to-use examples that enhance your project's UI/UX.",
  keywords: [
    "Shadcn UI",
    "UI components",
    "code snippets",
    "UI blocks",
    "frontend development",
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
    title: "Effortless Shadcn UI Component Previews & Code Snippets",
    description:
      "Explore Shadcn UI components ready to preview and copy, making your development process faster and easier with beautiful UI examples.",
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
      <body className={cn(dmSans.className, "antialiased")}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
