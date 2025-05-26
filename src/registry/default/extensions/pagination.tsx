"use client";
import { useMemo } from "react";

import {
	Pagination as CNPagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";

import { cn } from "@/lib/utils";
// import {
// 	PageNumberDefault,
// 	PageNumberKey,
// 	RowSizes,
// 	TakeDefault,
// 	TakeKey,
// } from "@/variables/paginationVars";

const RowSizes = [5, 10, 20, 50, 100];

const PageNumberKey = "page";
const PageNumberDefault = 0;
const TakeDefault = 10;
const TakeKey = "take";

export const Pagination = ({
	total,
	showFastButtons = false,
}: { showFastButtons?: boolean; total: number }) => {
	const [take] = useQueryState(
		TakeKey,
		parseAsInteger.withDefault(TakeDefault),
	);
	const [page, setPage] = useQueryState(
		PageNumberKey,
		parseAsInteger.withDefault(PageNumberDefault),
	);

	const totalPages = useMemo(() => {
		return Math.ceil(total / Number(take));
	}, [total, take]);

	const createPageNumbers = useMemo(() => {
		const pageNumbers: number[] = [];
		const currentPage = Number(page);

		if (totalPages <= 4) {
			for (let i = 1; i <= totalPages; i++) {
				pageNumbers.push(i);
			}
		} else {
			let startPage = Math.max(1, currentPage - 1);
			let endPage = Math.min(totalPages, currentPage + 2);

			// Adjust start and end if they don't fit exactly 4 pages
			if (endPage - startPage < 3) {
				if (startPage === 1) {
					endPage = startPage + 3;
				} else if (endPage === totalPages) {
					startPage = endPage - 3;
				}
			}

			for (let i = startPage; i <= endPage; i++) {
				pageNumbers.push(i);
			}
		}

		return pageNumbers;
	}, [totalPages, page]);

	return (
		<div className="flex flex-wrap justify-between items-center gap-5 px-5 py-2 select-none">
			<div className="text-muted-foreground text-sm">
				Show {page * take}-{page * take + take} from {total}
			</div>
			{totalPages > 0 && (
				<div>
					<CNPagination className="block">
						<PaginationContent>
							{showFastButtons && (
								<Button
									size="icon"
									variant="secondary"
									disabled={Number(page) <= 0}
									onClick={() => {
										setPage(0);
									}}
								>
									<ChevronsLeft size={15} />
								</Button>
							)}
							<Button
								size="icon"
								variant="secondary"
								disabled={Number(page) <= 0}
								onClick={() => {
									setPage(Number(page) - 1);
								}}
							>
								<ChevronLeft size={15} />
							</Button>

							{createPageNumbers.map((pageNum, i) => (
								<PaginationItem key={`${pageNum}-${i + 1}`}>
									<PaginationLink
										href=""
										isActive={Number(page) + 1 === pageNum}
										className={cn("rounded-sm w-8 h-8 cursor-pointer", {
											"bg-primary/10 text-primary border-none":
												pageNum - 1 === page,
										})}
										onClick={() => {
											setPage(pageNum - 1);
										}}
									>
										{pageNum}
									</PaginationLink>
								</PaginationItem>
							))}

							<Button
								size="icon"
								variant="secondary"
								disabled={Number(totalPages) <= Number(page) + 1}
								onClick={() => {
									setPage(Number(page) + 1);
								}}
							>
								<ChevronRight size={15} />
							</Button>
							{showFastButtons && (
								<Button
									size="icon"
									variant="secondary"
									disabled={Number(totalPages) <= Number(page) + 1}
									onClick={() => {
										setPage(totalPages - 1);
									}}
								>
									<ChevronsRight size={15} />
								</Button>
							)}
						</PaginationContent>
					</CNPagination>
				</div>
			)}
		</div>
	);
};

export const PaginationTakeSelection = () => {
	const [take, setTake] = useQueryState(
		TakeKey,
		parseAsInteger.withDefault(TakeDefault),
	);
	const [, setPage] = useQueryState(
		PageNumberKey,
		parseAsInteger.withDefault(PageNumberDefault),
	);

	console.log("take", take);

	return (
		<>
			<div>
				<Label className="flex items-center gap-2">
					<span className="text-muted-foreground">Show</span>
					<Select
						onValueChange={(value: string) => {
							setTake(Number.parseInt(value));
							setPage(0);
						}}
						defaultValue={String(take)}
					>
						<SelectTrigger className="w-[80px]">
							<SelectValue placeholder="Rows per page" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{RowSizes.map((size) => (
									<SelectItem key={size} value={String(size)}>
										{size}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</Label>
			</div>
		</>
	);
};
