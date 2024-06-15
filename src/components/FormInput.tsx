/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "../lib/utils";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import React, { forwardRef, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

interface FormInputProps {
	label?: string;
	labelClassName?: string;
	labelStyles?: string;
	name?: string;
	id?: string;
	className?: string;
	placeholder?: string;
	pattern?: string;
	sideLabel?: string;
	error?:
		| FieldError
		| Merge<FieldError, FieldErrorsImpl<any>>
		| undefined
		| "";
	[x: string]: any;
	value?: string | number;
	min?: string | number;
	max?: string | number;
	minLength?: number;
	maxLength?: number;
	rows?: number;
	cols?: number;
	autoFocus?: boolean;
	autoComplete?: boolean;
	required?: boolean;
	inputType?: string;
	inputWithSide?: boolean;
	textarea?: boolean;
	isMulti?: boolean;
	disabled?: boolean;
	password?: boolean;
	inputMode?: InputMode;
	additionalAttributes?: { [propName: string]: any };
	onChange?: (e: any) => void;
	register?: any;
	defaultValue?: number | string;
}

const FormInput: React.FC<FormInputProps> = forwardRef<
	HTMLInputElement,
	FormInputProps
>(
	(
		{
			label,
			labelClassName,
			placeholder,
			value,
			disabled,
			onChange,
			inputMode,
			min,
			max,
			className,
			textarea,
			rows,
			cols,
			autoFocus,
			autoComplete,
			password,
			required,
			inputType,
			inputWithSide,
			register,
			minLength,
			maxLength,
			error,
			sideLabel,
			defaultValue,
			...rest
		},
		ref
	) => {
		const [visible, setVisible] = useState<boolean>(false);
		return (
			<div className="w-full flex-1">
				{label && (
					<label
						className={cn(
							"bt-1.5 mb-1.5 block text-sm font-medium leading-[20px] tracking-[-0.1px] text-[#323539]",
							labelClassName
						)}
					>
						{label}{" "}
						{required && <span className="text-red-600">*</span>}
					</label>
				)}

				{inputType && (
					<input
						{...(ref && {ref})}
						{...register}
						{...(onChange && { onChange })}
						className={cn(
							`${"w-full rounded-md border border-[#E5E5E7] bg-white px-3 py-2 text-[#323539] placeholder:text-[14px] placeholder:text-[#323539]/50"}  focus-visible:outline-none  ${(error || error === "") && "border-red-500"} h-fit`,
							className
						)}
						{...(value && { value })}
						min={min}
						max={max}
						type={inputType ? inputType : "text"}
						autoComplete={autoComplete}
						disabled={disabled}
						placeholder={placeholder}
						inputMode={inputMode ? inputMode : "text"}
						minLength={minLength}
						maxLength={maxLength}
						autoFocus={autoFocus}
						{...rest}
					/>
				)}

				{password && (
					<i className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center text-[#002060]">
						<button
							type="button"
							onClick={() => setVisible(!visible)}
							aria-label={
								visible ? "Hide password" : "Show password"
							}
						>
							<span className="sr-only">
								{visible ? "Hide password" : "Show password"}
							</span>
							{visible ? <BsEyeSlashFill /> : <BsEyeFill />}
						</button>
					</i>
				)}

				{textarea && (
					<textarea
						ref={ref}
						{...register}
						className={cn(
							"w-full rounded-md border-[0.5px] border-[#E5E5E7] bg-white px-4 py-2 text-[#323539] outline-none placeholder:text-[#323539]/50",
							error && "border-red-500",
							className
						)}
						rows={rows}
						{...(value && { value })}
						cols={cols}
						disabled={disabled}
						placeholder={placeholder}
						minLength={minLength}
						{...(onChange && { onChange })}
						maxLength={maxLength}
						defaultValue={defaultValue}
					/>
				)}

				{error && (
					<small className="mt-1 text-xs text-red-500">
						{(error.message || error.type)?.toString()}
					</small>
				)}

				{inputWithSide && (
					<>
						<div
							className={`flex w-full min-w-[62px] flex-1 items-center justify-between space-x-2 rounded-md border border-[#E5E5E7] bg-white px-3 py-2 text-[#323539] focus:outline-[transparent] ${className ? className : ""}  ${(error || error === "") && "border-red-500"}`}
						>
							<input
								ref={ref}
								className={`h-[22px] w-full border-none px-0 text-[15px] font-medium leading-[22px] text-[#323539] placeholder:text-[15px] placeholder:text-[#323539]/40`}
								placeholder={placeholder}
								defaultValue={defaultValue}
								inputMode={inputMode ? inputMode : "text"}
								type={inputType ? inputType : "text"}
								minLength={minLength}
								maxLength={maxLength}
								{...register}
							/>
							<div className="h-[18px] w-[1px] rounded-full bg-[#B7B7B7]" />
							<p className="rounded-full text-[15px] leading-[22px] text-[#323539]">
								{sideLabel}
							</p>
						</div>
					</>
				)}
			</div>
		);
	}
);

export default FormInput;

export const customSelectStyles = (selectStyleOptions?: any) => {
	return {
		control: (defaultStyles: any) => ({
			...defaultStyles,
			...(selectStyleOptions && selectStyleOptions.control
				? selectStyleOptions.control()
				: defaultStyles),
			"&:active": { borderColor: "inherit" },
			"&:focus": { borderColor: "inherit" },
		}),
		menu: (provided: any) => ({
			...provided,
			...(selectStyleOptions && selectStyleOptions.menu
				? selectStyleOptions.menu()
				: provided),
			backgroundColor: "#fff",
			zIndex: 9999,
			color: "#323539",
		}),
		placeholder: (base: any) => ({
			...base,
			...(selectStyleOptions && selectStyleOptions.placeholder
				? selectStyleOptions.placeholder()
				: base),
			fontWeight: 400,
			fontSize: "14px",
			color: "#858C95",
		}),
		valueContainer: (base: any) => ({
			...base,
			...(selectStyleOptions && selectStyleOptions.valueContainer
				? selectStyleOptions.valueContainer()
				: base),
		}),
		indicatorsContainer: (base: any) => ({
			...base,
			...(selectStyleOptions && selectStyleOptions.indicatorsContainer
				? selectStyleOptions.indicatorsContainer()
				: base),
		}),
		indicatorSeparator: (base: any) => ({
			...base,
			...(selectStyleOptions && selectStyleOptions.indicatorSeparator
				? selectStyleOptions.indicatorSeparator()
				: base),
		}),
		input: (provided: any) => ({
			...provided,
			caretColor: "transparent",
			border: "none",
			fontSize: "15px",
			"&:focus": {
				outline: "transparent",
			},
		}),
	};
};

export enum InputMode {
	Url = "url",
	Text = "text",
	Search = "search",
	Numeric = "numeric",
	None = "none",
	Tel = "tel",
	Email = "email",
	Decimal = "decimal",
}
