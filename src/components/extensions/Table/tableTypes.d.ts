import "@tanstack/react-table";

declare module "@tanstack/react-table" {
	interface ColumnMeta<TData extends RowData, TValue> {
		placeholder?: string;
		inputType?: "text" | "number" | "select";
		options?: { label: string; value: string }[];
		input?: (
			value: string,
			setValue: (value: string) => void,
		) => React.ReactNode;
		className?: string; // Added className for custom styling
	}
}
