"use client";
import Backdrop from "@/components/extensions/backdrop";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackDropDemo() {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex flex-col gap-3">
			<BackdropWithoutClose />
			<BackdropWithClose />
		</div>
	);
}

const BackdropWithoutClose = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			setTimeout(() => {
				setOpen(false);
			}, 2000);
		}
	}, [open]);

	return (
		<div>
			<Button onClick={() => setOpen(true)}>Backdrop without close</Button>

			<Backdrop open={open}>
				<div className="">
					<Loader className="animate-spin" />
				</div>
			</Backdrop>
		</div>
	);
};
const BackdropWithClose = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<Button onClick={() => setOpen(true)}>Backdrop with close</Button>

			<Backdrop open={open} onClick={() => setOpen(false)}>
				<div className="">
					<Loader className="animate-spin" />
				</div>
			</Backdrop>
		</div>
	);
};
