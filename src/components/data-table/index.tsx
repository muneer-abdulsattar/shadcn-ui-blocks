import { DataTable } from "@/components/data-table/data-table";
import { DataTableAdvancedToolbar } from "@/components/data-table/data-table-advanced-toolbar";
import { DataTableFilterList } from "@/components/data-table/data-table-filter-list";
import { DataTableSortList } from "@/components/data-table/data-table-sort-list";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";

function StandardDataTable({ table }) {
	return (
		<DataTable table={table}>
			<DataTableToolbar table={table}>
				<DataTableSortList table={table} />
			</DataTableToolbar>
		</DataTable>
	);
}

function AdvancedDataTable({ table }) {
	return (
		<DataTable table={table}>
			<DataTableAdvancedToolbar table={table}>
				<DataTableFilterList table={table} />
				<DataTableSortList table={table} />
			</DataTableAdvancedToolbar>
		</DataTable>
	);
}

export { AdvancedDataTable, StandardDataTable };
