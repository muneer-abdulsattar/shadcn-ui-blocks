import {
	BetterTabs,
	BetterTabsContent,
	BetterTabsList,
	BetterTabsTrigger,
} from "@/components/extensions/better-tabs";

export default function BetterTabsDemo() {
	return (
		<div>
			<BetterTabs variant="default" defaultValue="tab1" className="w-full">
				<BetterTabsList>
					<BetterTabsTrigger value="tab1" className="w-full">
						Tab 1
					</BetterTabsTrigger>
					<BetterTabsTrigger value="tab2" className="w-full">
						Tab 2
					</BetterTabsTrigger>
					<BetterTabsTrigger value="tab3" className="w-full">
						Tab 3
					</BetterTabsTrigger>
				</BetterTabsList>
				<BetterTabsContent value="tab1">
					<div className="p-4">Content for Tab 1</div>
				</BetterTabsContent>
				<BetterTabsContent value="tab2">
					<div className="p-4">Content for Tab 2</div>
				</BetterTabsContent>
				<BetterTabsContent value="tab3">
					<div className="p-4">Content for Tab 3</div>
				</BetterTabsContent>
			</BetterTabs>
			<BetterTabs variant="fill" defaultValue="tab1" className="w-full">
				<BetterTabsList>
					<BetterTabsTrigger value="tab1" className="w-full">
						Tab 1
					</BetterTabsTrigger>
					<BetterTabsTrigger value="tab2" className="w-full">
						Tab 2
					</BetterTabsTrigger>
					<BetterTabsTrigger value="tab3" className="w-full">
						Tab 3
					</BetterTabsTrigger>
				</BetterTabsList>
				<BetterTabsContent value="tab1">
					<div className="p-4">Content for Tab 1</div>
				</BetterTabsContent>
				<BetterTabsContent value="tab2">
					<div className="p-4">Content for Tab 2</div>
				</BetterTabsContent>
				<BetterTabsContent value="tab3">
					<div className="p-4">Content for Tab 3</div>
				</BetterTabsContent>
			</BetterTabs>
			<BetterTabs defaultValue="tab1" className="w-full">
				<BetterTabsList>
					<BetterTabsTrigger value="tab1" className="w-full">
						Tab 1
					</BetterTabsTrigger>
					<BetterTabsTrigger value="tab2" className="w-full">
						Tab 2
					</BetterTabsTrigger>
					<BetterTabsTrigger value="tab3" className="w-full">
						Tab 3
					</BetterTabsTrigger>
				</BetterTabsList>
				<BetterTabsContent value="tab1">
					<div className="p-4">Content for Tab 1</div>
				</BetterTabsContent>
				<BetterTabsContent value="tab2">
					<div className="p-4">Content for Tab 2</div>
				</BetterTabsContent>
				<BetterTabsContent value="tab3">
					<div className="p-4">Content for Tab 3</div>
				</BetterTabsContent>
			</BetterTabs>
		</div>
	);
}
