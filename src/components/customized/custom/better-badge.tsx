import { BetterBadge } from "@/components/extensions/better-badge";
import { ArrowLeft, Home, X } from "lucide-react";

export default function BetterBadgeDemo() {
	return (
		<div className="gap-3 grid">
			<div>
				<p>variants</p>
				<div className="flex flex-wrap gap-3">
					<BetterBadge>hello world</BetterBadge>
					<BetterBadge variant="destructive">hello world</BetterBadge>
					<BetterBadge variant="secondary">hello world</BetterBadge>
					<BetterBadge variant="info">hello world</BetterBadge>
					<BetterBadge variant="warning">hello world</BetterBadge>
					<BetterBadge variant="success">hello world</BetterBadge>
					<BetterBadge variant="outline">hello world</BetterBadge>
				</div>
			</div>
			<div>
				<p>Status</p>
				<div className="flex flex-wrap gap-3">
					<BetterBadge status>hello world</BetterBadge>
					<BetterBadge status variant="destructive">
						hello world
					</BetterBadge>
					<BetterBadge status variant="secondary">
						hello world
					</BetterBadge>
					<BetterBadge status variant="info">
						hello world
					</BetterBadge>
					<BetterBadge status variant="warning">
						hello world
					</BetterBadge>
					<BetterBadge status variant="success">
						hello world
					</BetterBadge>
					<BetterBadge status variant="outline">
						hello world
					</BetterBadge>
				</div>
			</div>
			<div>
				<p>With Borders</p>
				<div className="flex flex-wrap gap-3">
					<BetterBadge border status>
						hello world
					</BetterBadge>
					<BetterBadge border status variant="destructive">
						hello world
					</BetterBadge>
					<BetterBadge border status variant="secondary">
						hello world
					</BetterBadge>
					<BetterBadge border status variant="info">
						hello world
					</BetterBadge>
					<BetterBadge border status variant="warning">
						hello world
					</BetterBadge>
					<BetterBadge border status variant="success">
						hello world
					</BetterBadge>
					<BetterBadge border status variant="outline">
						hello world
					</BetterBadge>
				</div>
			</div>
			<div>
				<p>With Icons</p>
				<div className="flex flex-wrap gap-3">
					<BetterBadge StartIcon={<ArrowLeft className="cursor-pointer" />}>
						hello world
					</BetterBadge>
					<BetterBadge EndIcon={X}>hello world</BetterBadge>
					<BetterBadge StartIcon={Home} EndIcon={Home}>
						hello world
					</BetterBadge>
					<BetterBadge
						StartIcon={"/images/apple-touch-icon.png"}
						EndIcon={"/images/apple-touch-icon.png"}
					>
						Image As Icons
					</BetterBadge>
				</div>
			</div>
		</div>
	);
}
