import { Button, type ButtonProps } from "@/components/ui/button";
import { Input, type InputProps } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React, { Fragment } from "react";

type Icon =
	| React.ComponentType<{ className?: string }>
	| React.ReactElement
	| string;

type ISelectProps = {
	placeholder?: string;
	options: {
		value?: string;
		label: string;
	}[];

	value?: string;
	onValueChange?: (value: string) => void;
};

interface InputWithActionsProps extends InputProps {
	StartSelect?: ISelectProps;
	EndSelect?: ISelectProps;

	StartButton?: ButtonProps;
	EndButton?: ButtonProps;
}

export default function InputWithActions({
	StartButton,
	EndButton,
	StartSelect,
	EndSelect,

	...props
}: InputWithActionsProps) {
	return (
		<div className="flex">
			{StartSelect && (
				<Select {...StartSelect}>
					<SelectTrigger className="rounded-r-none w-fit">
						<SelectValue placeholder={StartSelect.placeholder} />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{StartSelect?.options?.map((item) => (
								<Fragment key={item.label}>
									{item.value ? (
										<SelectItem key={item.value} value={item.value}>
											{item.label}
										</SelectItem>
									) : (
										<SelectLabel>{item.label}</SelectLabel>
									)}
								</Fragment>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			)}

			<Input
				{...props}
				className={cn(
					{
						"rounded-l-none": StartSelect || StartButton,
						"rounded-r-none": EndSelect || EndButton,
					},
					props.className,
				)}
			/>

			{EndButton && (
				<Button
					{...EndButton}
					className={cn("rounded-l-none w-fit", EndButton.className)}
				/>
			)}

			{EndSelect && (
				<Select {...EndSelect}>
					<SelectTrigger className="rounded-l-none w-fit">
						<SelectValue placeholder={EndSelect.placeholder} />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{EndSelect?.options?.map((item) => (
								<Fragment key={item.label}>
									{item.value ? (
										<SelectItem key={item.value} value={item.value}>
											{item.label}
										</SelectItem>
									) : (
										<SelectLabel>{item.label}</SelectLabel>
									)}
								</Fragment>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			)}
		</div>
	);
}
