"use client";
import InfiniteScroll from "@/components/extensions/infinite-scroll";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export default function InfiniteScrollDemo() {
	const [items, setItems] = useState(
		Array.from({ length: 20 }, (_, index) => index),
	);
	const [isLoading, setIsLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	const loadMoreItems = () => {
		setIsLoading(true);

		setTimeout(() => {
			setItems((prevItems) =>
				prevItems.concat(
					Array.from({ length: 20 }, (_, index) => prevItems.length + index),
				),
			);
			setIsLoading(false);
		}, 1000);
	};

	return (
		<ScrollArea className="w-full h-64">
			<div className="">
				<div className="flex flex-col gap-2">
					{items.map((item, index) => (
						<div
							key={index}
							className="flex justify-center items-center border rounded-md h-10"
						>
							Item {index + 1}
						</div>
					))}

					<InfiniteScroll
						isLoading={isLoading}
						hasMore={hasMore}
						next={loadMoreItems}
					>
						{hasMore && (
							<Skeleton className="flex justify-center items-center border rounded-md h-10" />
						)}
					</InfiniteScroll>
				</div>
			</div>
		</ScrollArea>
	);
}
