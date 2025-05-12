"use client";
import { faker } from "@faker-js/faker";
import React from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface UseFakeDataOptions<T> {
	delay?: number;
	count?: number;
	enabled?: boolean;
}

export function useFakeData(
	data: () => any,
	options: UseFakeDataOptions<any> = {},
) {
	const { delay = 1000, count = 10, enabled = true } = options;

	const [localData, setData] = React.useState<any[] | null>(null);
	const [loading, setLoading] = React.useState(enabled);
	const [error, setError] = React.useState<Error | null>(null);

	const refetch = React.useCallback(async () => {
		setLoading(true);
		setError(null);

		try {
			// Simulate network delay
			await sleep(delay);

			// Use faker.helpers.multiple instead of Array.from
			const items = faker.helpers.multiple(data, { count });
			setData(items);
		} catch (err) {
			setError(err instanceof Error ? err : new Error("An error occurred"));
		} finally {
			setLoading(false);
		}
	}, [delay, count, data]);

	React.useEffect(() => {
		if (enabled) {
			refetch();
		}
	}, [enabled, refetch]);

	return {
		data: localData,
		isLoading: loading,
		error,
		refetch,
	};
}
