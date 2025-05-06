import PriceFormat from "@/components/extensions/price-format";

const value = 1250.3456;

export default function PriceFormatDemo() {
	return (
		<div className="flex flex-wrap gap-2">
			<PriceFormat value={value} prefix="EUR " />
			<PriceFormat value={value} suffix=" EUR " prefix="" />
			<PriceFormat value={value} decimalScale={0} />
			<PriceFormat value={value} />
			<PriceFormat value={value} />
		</div>
	);
}
