"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleUserRoundIcon, XIcon } from "lucide-react";
import { type FileMetadata, useFileUpload } from "./use-file-upload";

export interface ProfileFileUploaderProps {
	/**
	 * Size of the avatar in rem, controls the button dimensions
	 * @default 4
	 */
	size?: number;
	/**
	 * Custom class name for the root element
	 */
	className?: string;

	/**
	 * Initial file to display
	 */
	initialFile?: FileMetadata;
	/**
	 * Callback when file changes
	 */
	onFileChange?: (file: File | null) => void;
	/**
	 * Custom class name for the avatar button
	 */
	buttonClassName?: string;

	rounded?: boolean;
}

export function ProfileFileUploader({
	size = 4,
	className,

	initialFile,
	onFileChange,
	buttonClassName,
	rounded = false,
}: ProfileFileUploaderProps) {
	const [{ files }, { removeFile, openFileDialog, getInputProps }] =
		useFileUpload({
			accept: "image/*",
			initialFiles: initialFile ? [initialFile] : [],
			onFilesChange: (files) => {
				onFileChange?.(files[0]?.file instanceof File ? files[0].file : null);
			},
		});

	const previewUrl = files[0]?.preview || null;
	const sizeInRem = `${size}rem`;
	const iconSizeInRem = `${size / 2}rem`;

	return (
		<div className={cn("flex flex-col items-center gap-2", className)}>
			<div className="inline-flex relative">
				<Button
					variant="outline"
					className={cn(
						"relative shadow-none p-0 overflow-hidden",
						buttonClassName,
						rounded && "rounded-full border-dashed",
					)}
					style={{ width: sizeInRem, height: sizeInRem }}
					onClick={openFileDialog}
					aria-label={previewUrl ? "Change image" : "Upload image"}
				>
					{previewUrl ? (
						<img
							className="size-full object-cover"
							src={previewUrl}
							alt="Preview of uploaded"
							width={size * 16}
							height={size * 16}
						/>
					) : (
						<div aria-hidden="true">
							<CircleUserRoundIcon
								className="opacity-60"
								style={{ width: iconSizeInRem, height: iconSizeInRem }}
							/>
						</div>
					)}
				</Button>
				{previewUrl && (
					<Button
						onClick={() => removeFile(files[0]?.id)}
						size="icon"
						className="-top-2 -right-2 absolute shadow-none border-2 border-background focus-visible:border-background rounded-full size-6"
						aria-label="Remove image"
					>
						<XIcon className="size-3.5" />
					</Button>
				)}
				<input
					{...getInputProps()}
					className="sr-only"
					aria-label="Upload image file"
				/>
			</div>
		</div>
	);
}

// Export named component as default for backward compatibility
export default ProfileFileUploader;
