"use client";

import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface BetterTabsRootProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {}

const BetterTabs = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Root>,
	BetterTabsRootProps
>(({ ...props }, ref) => <TabsPrimitive.Root ref={ref} {...props} />);
BetterTabs.displayName = TabsPrimitive.Root.displayName;

interface BetterTabsListProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}

const BetterTabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	BetterTabsListProps
>(({ className, ...props }, ref) => {
	const [indicatorStyle, setIndicatorStyle] = useState({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
	});
	const BetterTabsListRef = useRef<HTMLDivElement | null>(null);

	const updateIndicator = React.useCallback(() => {
		if (!BetterTabsListRef.current) return;

		const activeTab = BetterTabsListRef.current.querySelector<HTMLElement>(
			'[data-state="active"]',
		);
		if (!activeTab) return;

		const activeRect = activeTab.getBoundingClientRect();
		const BetterTabsRect = BetterTabsListRef.current.getBoundingClientRect();

		requestAnimationFrame(() => {
			setIndicatorStyle({
				left: activeRect.left - BetterTabsRect.left,
				top: activeRect.top - BetterTabsRect.top,
				width: activeRect.width,
				height: activeRect.height,
			});
		});
	}, []);

	useEffect(() => {
		// Initial update
		const timeoutId = setTimeout(updateIndicator, 0);

		// Event listeners
		window.addEventListener("resize", updateIndicator);
		const observer = new MutationObserver(updateIndicator);

		if (BetterTabsListRef.current) {
			observer.observe(BetterTabsListRef.current, {
				attributes: true,
				childList: true,
				subtree: true,
			});
		}

		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener("resize", updateIndicator);
			observer.disconnect();
		};
	}, [updateIndicator]);

	return (
		<div className="relative" ref={BetterTabsListRef}>
			<TabsPrimitive.List
				ref={ref}
				className={cn(
					"relative",
					"inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
					className,
				)}
				{...props}
			/>

			<div
				className="absolute bg-background shadow-sm rounded-md transition-all duration-300 ease-in-out"
				style={indicatorStyle}
			/>
		</div>
	);
});
BetterTabsList.displayName = TabsPrimitive.List.displayName;

interface BetterTabsTriggerProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}

const BetterTabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	BetterTabsTriggerProps
>(({ className, ...props }, ref) => {
	return (
		<TabsPrimitive.Trigger
			ref={ref}
			className={cn(
				"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground z-10",
				className,
			)}
			{...props}
		/>
	);
});
BetterTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const BetterTabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			className,
		)}
		{...props}
	/>
));
BetterTabsContent.displayName = TabsPrimitive.Content.displayName;

export { BetterTabs, BetterTabsContent, BetterTabsList, BetterTabsTrigger };
