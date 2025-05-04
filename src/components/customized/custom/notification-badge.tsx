import { NotificationBadge } from "@/components/extensions/notification-badge";
import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";

export default function NotificationBadgeDemo() {
	return (
		<div className="gap-5 grid">
			<div className="flex flex-wrap gap-5">
				<NotificationBadge color="offline">
					<Button variant="outline" size="icon">
						<BellIcon />
					</Button>
				</NotificationBadge>
				<NotificationBadge color="warning">
					<Button variant="outline" size="icon">
						<BellIcon />
					</Button>
				</NotificationBadge>
				<NotificationBadge color="info">
					<Button variant="outline" size="icon">
						<BellIcon />
					</Button>
				</NotificationBadge>
				<NotificationBadge color="success">
					<Button variant="outline" size="icon">
						<BellIcon />
					</Button>
				</NotificationBadge>
				<NotificationBadge color="primary">
					<Button variant="outline" size="icon">
						<BellIcon />
					</Button>
				</NotificationBadge>
			</div>
			<div className="flex flex-wrap gap-5">
				<NotificationBadge color="warning" value={"+99"}>
					<Button variant="outline" size="icon">
						<BellIcon />
					</Button>
				</NotificationBadge>
				<NotificationBadge color="info" value={9} Position="bottom-right">
					<Button variant="outline" size="icon">
						<BellIcon />
					</Button>
				</NotificationBadge>
				<NotificationBadge color="success" value={9} Position="top-left">
					<Button variant="outline" size="icon">
						<BellIcon />
					</Button>
				</NotificationBadge>
				<NotificationBadge color="primary" value={9} Position="bottom-left">
					<Button variant="outline" size="icon">
						<BellIcon />
					</Button>
				</NotificationBadge>
			</div>
		</div>
	);
}
