import Debug from "@/components/extensions/debug";

export default function DebugDemo() {
	return (
		<div>
			<Debug
				data={{
					foo: "bar",
					baz: "qux",
					nested: {
						a: 1,
						b: 2,
						c: {
							d: 3,
							e: 4,
						},
					},
					array: [1, 2, 3, 4, 5],
					boolean: true,

					date: new Date(),
				}}
			/>
		</div>
	);
}
