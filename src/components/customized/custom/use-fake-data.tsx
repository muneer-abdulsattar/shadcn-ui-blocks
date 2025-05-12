"use client";
import Debug from "@/components/extensions/debug";
import { useFakeData } from "@/hooks/use-fake-data";
import { faker } from "@faker-js/faker";

const fakerData = () => ({
	name: faker.internet.username(),
	email: faker.internet.email(),
	age: faker.number.int({ min: 18, max: 60 }),
	address: faker.location.streetAddress(),
	phone: faker.phone.number(),
});

export default function UseFakeDataDemo() {
	const { data } = useFakeData(fakerData);
	return (
		<div>
			<Debug data={data} />
		</div>
	);
}
