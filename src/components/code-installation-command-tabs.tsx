"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { getInstallationCommand } from "@/lib/shadcn-registry";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { BunLogo, NpmLogo, PnpmLogo, YarnLogo } from "./ui/icons";

const tabs = [
	{
		name: "bun",
		value: "bun",
		icon: BunLogo,
	},
	{
		name: "pnpm",
		value: "pnpm",
		icon: PnpmLogo,
	},
	{
		name: "npm",
		value: "npm",
		icon: NpmLogo,
	},
	{
		name: "yarn",
		value: "yarn",
		icon: YarnLogo,
	},
];

export const CodeInstallationCommandTabs = ({
	registryUrl,
}: {
	registryUrl: string;
}) => {
	const [packageManager, setPackageManager] = useState(
		localStorage.getItem("package-manger") || tabs[0].value,
	);
	const { copyToClipboard, isCopied } = useCopyToClipboard();

	return (
		<Tabs
			value={packageManager}
			onValueChange={(value) => {
				setPackageManager(value);
				localStorage.setItem("package-manger", value);
			}}
			className="border rounded-lg w-full overflow-hidden"
		>
			<TabsList className="justify-start gap-0 bg-primary/5 p-0 border-primary/10 border-b rounded-none w-full h-10">
				{tabs.map((tab) => (
					<TabsTrigger
						key={tab.value}
						value={tab.value}
						className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary border-transparent border-b-2 rounded-none h-full"
					>
						<code className="flex items-center gap-2 text-[13px]">
							<tab.icon className="w-4 h-4" /> {tab.name}
						</code>
					</TabsTrigger>
				))}
			</TabsList>

			{tabs.map((tab) => (
				<TabsContent key={tab.value} value={tab.value} className="!mt-0">
					<div className="flex justify-between items-center gap-2 pr-1.5 pl-3 rounded-md h-12">
						<code className="text-[13px] line-clamp-1 grow">
							{getInstallationCommand(tab.value, registryUrl)}
						</code>
						<Button
							size="icon"
							variant="secondary"
							className="w-7 h-7 shrink-0"
							onClick={() => {
								copyToClipboard(getInstallationCommand(tab.value, registryUrl));
							}}
						>
							{isCopied ? (
								<Check className="!w-3.5 !h-3.5 text-green-600" />
							) : (
								<Copy className="!w-3.5 !h-3.5" />
							)}
						</Button>
					</div>
				</TabsContent>
			))}
		</Tabs>
	);
};
