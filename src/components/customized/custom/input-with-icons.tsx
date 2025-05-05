"use client";
import InputWithIcons from "@/components/extensions/input-with-icons";
import { ArrowRight, AtSignIcon, ChevronRight } from "lucide-react";

export default function InputWithIconsDemo() {
	return (
		<div className="gap-3 grid">
			<div className="space-y-2">
				<p>Input With Icons</p>
				<InputWithIcons
					StartIcon={AtSignIcon}
					EndIcon={
						<ArrowRight
							onClick={(e) => console.log("click button")}
							className=""
						/>
					}
				/>
				<InputWithIcons
					StartIcon={<div>@</div>}
					EndIcon={<div>.com</div>}
					EndSize="14"
				/>
			</div>
			<div className="space-y-2">
				<p>Input With Icon Buttons</p>
				<InputWithIcons
					StartButton={{
						icon: AtSignIcon,
						onClick: (e) => console.log("click button"),
						type: "submit",
					}}
					EndButton={{
						icon: ChevronRight,
						onClick: (e) => console.log("click button"),
						type: "submit",
					}}
				/>
			</div>
		</div>
	);
}
