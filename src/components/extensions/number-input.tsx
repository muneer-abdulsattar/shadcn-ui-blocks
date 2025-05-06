"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

export interface NumberInputProps
	extends Omit<NumericFormatProps, "value" | "onValueChange"> {
	stepper?: number;
	enableArrowButtons?: boolean;
	thousandSeparator?: string;
	placeholder?: string;
	defaultValue?: number;
	min?: number;
	max?: number;
	value?: number; // Controlled value
	suffix?: string;
	prefix?: string;
	onValueChange?: (value: number | undefined) => void;
	fixedDecimalScale?: boolean;
	decimalScale?: number;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
	(
		{
			enableArrowButtons = false,
			stepper,
			thousandSeparator,
			placeholder,
			defaultValue,
			min = Number.NEGATIVE_INFINITY,
			max = Number.POSITIVE_INFINITY,
			onValueChange,
			fixedDecimalScale = false,
			decimalScale = 0,
			suffix,
			prefix,
			value: controlledValue,
			...props
		},
		ref,
	) => {
		const [value, setValue] = useState<number | undefined>(
			controlledValue ?? defaultValue,
		);

		const handleIncrement = useCallback(() => {
			setValue((prev) =>
				prev === undefined
					? (stepper ?? 1)
					: Math.min(prev + (stepper ?? 1), max),
			);
		}, [stepper, max]);

		const handleDecrement = useCallback(() => {
			setValue((prev) =>
				prev === undefined
					? -(stepper ?? 1)
					: Math.max(prev - (stepper ?? 1), min),
			);
		}, [stepper, min]);

		useEffect(() => {
			const handleKeyDown = (e: KeyboardEvent) => {
				if (
					document.activeElement ===
					(ref as React.RefObject<HTMLInputElement>)?.current
				) {
					if (e.key === "ArrowUp") {
						handleIncrement();
					} else if (e.key === "ArrowDown") {
						handleDecrement();
					}
				}
			};

			window.addEventListener("keydown", handleKeyDown);

			return () => {
				window.removeEventListener("keydown", handleKeyDown);
			};
		}, [handleIncrement, handleDecrement, ref]);

		useEffect(() => {
			if (controlledValue !== undefined) {
				setValue(controlledValue);
			}
		}, [controlledValue]);

		const handleChange = (values: {
			value: string;
			floatValue: number | undefined;
		}) => {
			const newValue =
				values.floatValue === undefined ? undefined : values.floatValue;
			setValue(newValue);
			if (onValueChange) {
				onValueChange(newValue);
			}
		};

		const handleBlur = () => {
			if (value !== undefined) {
				if (value < min) {
					setValue(min);
					const inputRef = (ref as React.RefObject<HTMLInputElement>)?.current;
					if (inputRef) {
						inputRef.value = String(min);
					}
				} else if (value > max) {
					setValue(max);
					const inputRef = (ref as React.RefObject<HTMLInputElement>)?.current;
					if (inputRef) {
						inputRef.value = String(max);
					}
				}
			}
		};

		return (
			<div className="flex items-center">
				<NumericFormat
					value={value}
					onValueChange={handleChange}
					thousandSeparator={thousandSeparator}
					decimalScale={decimalScale}
					fixedDecimalScale={fixedDecimalScale}
					allowNegative={min < 0}
					valueIsNumericString
					onBlur={handleBlur}
					max={max}
					min={min}
					suffix={suffix}
					prefix={prefix}
					customInput={Input}
					placeholder={placeholder}
					className={cn(
						"relative [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [appearance:textfield]",
						enableArrowButtons && "rounded-r-none",
					)}
					getInputRef={ref}
					{...props}
				/>
				{enableArrowButtons && (
					<div className="flex flex-col">
						<Button
							aria-label="Increase value"
							className="focus-visible:relative px-2 border-input border-b-[0.5px] border-l-0 rounded-l-none rounded-br-none h-4"
							variant="outline"
							onClick={handleIncrement}
							disabled={value === max}
						>
							<ChevronUp size={15} />
						</Button>
						<Button
							aria-label="Decrease value"
							className="focus-visible:relative px-2 border-input border-t-[0.5px] border-l-0 rounded-l-none rounded-tr-none h-4"
							variant="outline"
							onClick={handleDecrement}
							disabled={value === min}
						>
							<ChevronDown size={15} />
						</Button>
					</div>
				)}
			</div>
		);
	},
);

NumberInput.displayName = "NumberInput";
export default NumberInput;
