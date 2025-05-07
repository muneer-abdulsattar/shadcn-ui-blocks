import {
	Pagination,
	PaginationTakeSelection,
} from "@/components/extensions/pagination";

export default function PaginationDemo() {
	return (
		<div className="w-full">
			<PaginationTakeSelection />
			<div className="flex justify-center items-center bg-muted my-3 w-full h-32">
				Some Table
			</div>
			<Pagination total={200} />
			<Pagination total={200} showFastButtons />
		</div>
	);
}
