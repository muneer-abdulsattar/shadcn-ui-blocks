"use client";

import * as React from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface ClickAwayListenerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content to be rendered inside the click-away listener
	 */
	children: React.ReactNode;
	/**
	 * Function to be called when focus moves away from the component and its children
	 */
	onClickAway: (event: FocusEvent) => void;
	/**
	 * Whether the click-away listener is active
	 * @default true
	 */
	active?: boolean;
	/**
	 * The root element to attach the event listeners to
	 * @default document
	 */
	root?: Document | HTMLElement | null;
	/**
	 * Whether to listen for focus events instead of just click events
	 * @default true
	 */
	useFocusEvents?: boolean;
}

/**
 * ClickAwayListener - Detects when focus moves away from its children and calls the onClickAway function
 */
const ClickAwayListener = React.forwardRef<
	HTMLDivElement,
	ClickAwayListenerProps
>(
	(
		{
			children,
			onClickAway,
			active = true,
			root = typeof document !== "undefined" ? document : null,
			useFocusEvents = true,
			className,
			...props
		},
		ref,
	) => {
		const nodeRef = useRef<HTMLDivElement | null>(null);
		const combinedRef = useCombinedRefs(ref, nodeRef);

		useEffect(() => {
			if (!active || !root) {
				return undefined;
			}

			const handleFocusOut = (event: FocusEvent) => {
				if (!nodeRef.current) return;

				// Check if the relatedTarget (where focus moved to) is outside our component
				const relatedTarget = event.relatedTarget as Node | null;

				// If focus moved outside our component (null) or to an element not inside our component
				if (
					relatedTarget === null ||
					!nodeRef.current.contains(relatedTarget)
				) {
					onClickAway(event);
				}
			};

			if (useFocusEvents) {
				// Add focusout event listener to detect when focus leaves the component
				nodeRef.current?.addEventListener("focusout", handleFocusOut);
			}

			return () => {
				if (useFocusEvents && nodeRef.current) {
					nodeRef.current.removeEventListener("focusout", handleFocusOut);
				}
			};
		}, [active, onClickAway, root, useFocusEvents]);

		return (
			<div ref={combinedRef} className={cn(className)} tabIndex={-1} {...props}>
				{children}
			</div>
		);
	},
);

ClickAwayListener.displayName = "ClickAwayListener";

// Helper to combine refs
function useCombinedRefs<T>(
	...refs: Array<React.Ref<T> | null | undefined>
): React.RefCallback<T> {
	return React.useCallback(
		(element: T) => {
			for (const ref of refs) {
				if (!ref) continue;

				if (typeof ref === "function") {
					ref(element);
				} else {
					// TypeScript doesn't know that ref is a MutableRefObject
					(ref as React.MutableRefObject<T>).current = element;
				}
			}
		},
		[refs],
	);
}

export { ClickAwayListener };
