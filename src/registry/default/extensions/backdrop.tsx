"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Backdrop({
	open = true,
	onClick,
	children,
}: {
	open?: boolean;
	onClick?: () => void;
	children?: React.ReactNode;
}) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	if (!open) return null;

	const backdropContent = (
		<div
			onClick={onClick}
			className="z-50 fixed inset-0 flex flex-col justify-center items-center bg-black/60"
		>
			{children}
		</div>
	);

	return mounted ? createPortal(backdropContent, document.body) : null;
}
