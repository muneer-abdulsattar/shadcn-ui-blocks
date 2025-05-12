"use client";
import Table from "@/components/extensions/Table";
import TableColumnView from "@/components/extensions/Table/TableColumnView";
import TableHeaderDropdown from "@/components/extensions/Table/TableHeaderDropdown";
import { Input } from "@/components/ui/input";
import { useFakeData } from "@/hooks/use-fake-data";
import { faker } from "@faker-js/faker";
import type { ColumnDef } from "@tanstack/react-table";

const fakerData = () => ({
	name: faker.internet.displayName(),
	age: faker.number.int({ min: 18, max: 50 }),
	commerce: faker.commerce.department(),
	creditCard: faker.finance.creditCardNumber(),
	company: faker.company.name(),
	email: faker.internet.email(),
	phone: faker.phone.number(),
	website: faker.internet.url(),
});

// Define the return type of fakerData
type FakerDataType = ReturnType<typeof fakerData>;

const columns: ColumnDef<FakerDataType>[] = [
	{
		accessorKey: "name",
		enableHiding: true,
		enableSorting: true,
	},
	{
		accessorKey: "age",
		cell: ({ row }) => <span>{row.original.age}</span>,
		enableColumnFilter: true,
		meta: {
			placeholder: "Search by age",
			inputType: "number",
		},
	},
	{
		accessorKey: "website",
		cell: ({ row }) => <span>{row.original.website}</span>,
		enableColumnFilter: true,
		meta: {
			inputType: "select",
			options: [
				{ label: "Google", value: "google.com" },
				{ label: "Facebook", value: "facebook.com" },
				{ label: "Twitter", value: "twitter.com" },
				{ label: "Instagram", value: "instagram.com" },
			],
		},
	},
	{
		accessorKey: "creditCard",
		cell: ({ row }) => <span>{row.original.creditCard}</span>,
		enableColumnFilter: true,
		header: ({ column }) => (
			<TableHeaderDropdown column={column} title="Credit Card" />
		),
		meta: {
			input: (value: string, setValue: (value: string) => void) => {
				return (
					<Input
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder="Enter Your Cvv"
						className="input"
					/>
				);
			},
		},
	},
];

export default function TableDemo() {
	const { data, isLoading } = useFakeData(fakerData);
	return (
		<div className="w-full">
			<Table data={data} columns={columns} isLoading={isLoading}>
				{(table) => <TableColumnView table={table} />}
			</Table>
		</div>
	);
}
