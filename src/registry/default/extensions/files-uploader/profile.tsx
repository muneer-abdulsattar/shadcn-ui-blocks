"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CircleUserRoundIcon, CropIcon, XIcon } from "lucide-react";
import { SyntheticEvent, useCallback, useRef, useState } from "react";
import ReactCrop, {
	centerCrop,
	makeAspectCrop,
	type Crop,
	type PixelCrop,
} from "react-image-crop";
import { useFileUpload, type FileMetadata } from "./use-file-upload";

import "react-image-crop/dist/ReactCrop.css";

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

	/**
	 * Whether the avatar should be rounded or square
	 * @default false
	 */
	rounded?: boolean;

	/**
	 * Enable image cropping before finalizing the upload
	 * @default false
	 */
	enableCrop?: boolean;
}

// Helper function to center the crop
function centerAspectCrop(
	mediaWidth: number,
	mediaHeight: number,
	aspect: number,
): Crop {
	return centerCrop(
		makeAspectCrop(
			{
				unit: "%",
				width: 50,
				height: 50,
			},
			aspect,
			mediaWidth,
			mediaHeight,
		),
		mediaWidth,
		mediaHeight,
	);
}

export function ProfileFileUploader({
	size = 4,
	className,
	initialFile,
	onFileChange,
	buttonClassName,
	rounded = false,
	enableCrop = false,
}: ProfileFileUploaderProps) {
	const [
		{ files, isDragging },
		{
			removeFile,
			openFileDialog,
			getInputProps,
			handleDragEnter,
			handleDragLeave,
			handleDragOver,
			handleDrop,
			addFiles,
		},
	] = useFileUpload({
		accept: "image/*",
		initialFiles: initialFile ? [initialFile] : [],
		onFilesChange: (files) => {
			if (!enableCrop) {
				onFileChange?.(files[0]?.file instanceof File ? files[0].file : null);
			}
		},
	});

	// State for handling temporary image for cropping
	const [tempImage, setTempImage] = useState<File | null>(null);
	const [tempImageUrl, setTempImageUrl] = useState<string | null>(null);

	// Crop related state
	const [dialogOpen, setDialogOpen] = useState(false);
	const [crop, setCrop] = useState<Crop>();
	const [croppedImageUrl, setCroppedImageUrl] = useState<string>("");
	const imgRef = useRef<HTMLImageElement | null>(null);

	const previewUrl = files[0]?.preview || null;
	const sizeInRem = `${size}rem`;
	const iconSizeInRem = `${size / 2}rem`;

	// Custom file handler to intercept files before adding them to useFileUpload
	const handleFileIntercept = useCallback(
		(acceptedFiles: File[]) => {
			if (enableCrop && acceptedFiles.length > 0) {
				// Store the file temporarily
				const file = acceptedFiles[0];
				setTempImage(file);

				// Create a temporary URL for the image
				const url = URL.createObjectURL(file);
				setTempImageUrl(url);

				// Open the crop dialog
				setDialogOpen(true);

				// Don't add the file to useFileUpload yet
				return;
			}

			// If cropping is disabled, add files normally
			addFiles(acceptedFiles);
		},
		[enableCrop, addFiles],
	);

	// Custom drag and drop handlers that call the interceptor
	const customHandleDrop = useCallback(
		(e: React.DragEvent<HTMLButtonElement>) => {
			handleDrop(e);

			// Get the dropped files from the event
			const droppedFiles = Array.from(e.dataTransfer.files);
			if (droppedFiles.length > 0 && enableCrop) {
				// Prevent default useFileUpload behavior by stopping event propagation
				e.stopPropagation();
				handleFileIntercept(droppedFiles);
			}
		},
		[handleDrop, handleFileIntercept, enableCrop],
	);

	// Override the default file input to use our interceptor
	const customFileInputProps = {
		...getInputProps(),
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
			if (enableCrop && e.target.files && e.target.files.length > 0) {
				// Handle the selected files with our interceptor
				const selectedFiles = Array.from(e.target.files);
				handleFileIntercept(selectedFiles);

				// Clear the input value to allow selecting the same file again
				e.target.value = "";
			} else {
				// Use the default handler from useFileUpload
				getInputProps().onChange?.(e);
			}
		},
	};

	function onImageLoad(e: SyntheticEvent<HTMLImageElement>) {
		const { width, height } = e.currentTarget;
		setCrop(centerAspectCrop(width, height, 1));
	}

	function onCropComplete(pixelCrop: PixelCrop) {
		if (imgRef.current && pixelCrop.width && pixelCrop.height) {
			const croppedImageUrl = getCroppedImg(imgRef.current, pixelCrop);
			setCroppedImageUrl(croppedImageUrl);
		}
	}

	function getCroppedImg(image: HTMLImageElement, crop: PixelCrop): string {
		const canvas = document.createElement("canvas");
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;

		canvas.width = crop.width * scaleX;
		canvas.height = crop.height * scaleY;

		const ctx = canvas.getContext("2d");

		if (ctx) {
			ctx.imageSmoothingEnabled = false;

			ctx.drawImage(
				image,
				crop.x * scaleX,
				crop.y * scaleY,
				crop.width * scaleX,
				crop.height * scaleY,
				0,
				0,
				crop.width * scaleX,
				crop.height * scaleY,
			);
		}

		return canvas.toDataURL("image/png", 1.0);
	}

	async function handleApplyCrop() {
		if (croppedImageUrl && tempImage) {
			try {
				// Convert the data URL to a Blob
				const response = await fetch(croppedImageUrl);
				const blob = await response.blob();

				// Create a new File from the Blob
				const croppedFile = new File([blob], tempImage.name, {
					type: "image/png",
					lastModified: new Date().getTime(),
				});

				// Add the cropped file to useFileUpload
				addFiles([croppedFile]);

				// Call onFileChange with the cropped file
				onFileChange?.(croppedFile);

				// Clean up temporary states
				setTempImage(null);
				if (tempImageUrl) {
					URL.revokeObjectURL(tempImageUrl);
					setTempImageUrl(null);
				}
				setCroppedImageUrl("");

				// Close the dialog
				setDialogOpen(false);
			} catch (error) {
				console.error("Error applying crop:", error);
			}
		}
	}

	function handleCancelCrop() {
		// Clean up temporary states
		setTempImage(null);
		if (tempImageUrl) {
			URL.revokeObjectURL(tempImageUrl);
			setTempImageUrl(null);
		}
		setCroppedImageUrl("");
		setDialogOpen(false);
	}

	return (
		<div className={cn("flex flex-col items-center gap-2", className)}>
			<div className="inline-flex relative">
				<Button
					variant="outline"
					className={cn(
						"relative shadow-none p-0 overflow-hidden",
						buttonClassName,
						rounded && "rounded-full border-dashed",
						isDragging && "border-primary border-dashed opacity-70",
					)}
					style={{ width: sizeInRem, height: sizeInRem }}
					onClick={openFileDialog}
					onDragEnter={handleDragEnter}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={customHandleDrop}
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
						onClick={() => {
							removeFile(files[0]?.id);
							onFileChange?.(null);
						}}
						size="icon"
						className="-top-2 -right-2 absolute shadow-none border-2 border-background focus-visible:border-background rounded-full size-6"
						aria-label="Remove image"
					>
						<XIcon className="size-3.5" />
					</Button>
				)}
				<input
					{...customFileInputProps}
					className="sr-only"
					aria-label="Upload image file"
				/>
			</div>

			{enableCrop && (
				<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
					<DialogContent className="gap-0 p-0">
						<DialogHeader>
							<DialogTitle />
							<DialogDescription />
						</DialogHeader>
						<div className="p-6 size-full">
							{tempImageUrl && (
								<ReactCrop
									crop={crop}
									onChange={(_, percentCrop) => setCrop(percentCrop)}
									onComplete={(c) => onCropComplete(c)}
									aspect={1}
									className="w-full"
								>
									<div className="size-full">
										<img
											ref={imgRef}
											className="size-full"
											alt="Image to crop"
											src={tempImageUrl}
											onLoad={onImageLoad}
										/>
									</div>
								</ReactCrop>
							)}
						</div>
						<DialogFooter className="justify-center p-6 pt-0">
							<Button
								size="sm"
								type="reset"
								className="w-fit"
								variant="outline"
								onClick={handleCancelCrop}
							>
								<XIcon className="mr-1.5 size-4" />
								Cancel
							</Button>
							<Button
								type="submit"
								size="sm"
								className="w-fit"
								onClick={handleApplyCrop}
							>
								<CropIcon className="mr-1.5 size-4" />
								Crop
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}
		</div>
	);
}

// Export named component as default for backward compatibility
export default ProfileFileUploader;
