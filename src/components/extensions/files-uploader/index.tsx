"use client";

import {
	AlertCircleIcon,
	FileArchiveIcon,
	FileIcon,
	FileSpreadsheetIcon,
	FileTextIcon,
	FileUpIcon,
	HeadphonesIcon,
	ImageIcon,
	UploadIcon,
	VideoIcon,
	XIcon,
} from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
	type FileWithPreview,
	formatBytes,
	useFileUpload,
} from "./use-file-upload";

/**
 * Determines the appropriate icon based on file type
 */
const getFileIcon = (file) => {
	const fileType = file.file instanceof File ? file.file.type : file.file.type;
	const fileName = file.file instanceof File ? file.file.name : file.file.name;

	if (
		fileType.includes("pdf") ||
		fileName.endsWith(".pdf") ||
		fileType.includes("word") ||
		fileName.endsWith(".doc") ||
		fileName.endsWith(".docx")
	) {
		return <FileTextIcon className="opacity-60 size-4" />;
	}
	if (
		fileType.includes("zip") ||
		fileType.includes("archive") ||
		fileName.endsWith(".zip") ||
		fileName.endsWith(".rar")
	) {
		return <FileArchiveIcon className="opacity-60 size-4" />;
	}
	if (
		fileType.includes("excel") ||
		fileName.endsWith(".xls") ||
		fileName.endsWith(".xlsx")
	) {
		return <FileSpreadsheetIcon className="opacity-60 size-4" />;
	}
	if (fileType.includes("video/")) {
		return <VideoIcon className="opacity-60 size-4" />;
	}
	if (fileType.includes("audio/")) {
		return <HeadphonesIcon className="opacity-60 size-4" />;
	}
	if (fileType.startsWith("image/")) {
		return <ImageIcon className="opacity-60 size-4" />;
	}
	return <FileIcon className="opacity-60 size-4" />;
};

/**
 * FileUploader - Reusable file upload component with various display options
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Custom icon to display in the upload area
 * @param {string} props.title - Title text for the upload area
 * @param {string} props.description - Description text for the upload area
 * @param {boolean} props.isInside - Whether to display selected files inside the upload area
 * @param {boolean} props.isGrid - Whether to display files in a grid layout
 * @param {boolean} props.isPreview - Whether to show previews for image files
 * @param {Function} props.beforeUpload - Function to run before file upload
 * @param {Function} props.afterUpload - Function to run after file upload
 * @param {boolean} props.multiple - Whether to allow multiple file selection
 * @param {number} props.maxFiles - Maximum number of files allowed
 * @param {number} props.maxSizeMB - Maximum file size in MB
 * @param {string} props.accept - Accepted file types
 * @param {Array} props.initialFiles - Initial files to display
 * @param {Function} props.onChange - Callback when files change
 * @param {boolean} props.showUploadInfo - Whether to show upload information
 */

const FileUploader = ({
	icon = <FileUpIcon className="opacity-60 size-4" />,
	title = "Upload files",
	description = "Drag & drop or click to browse",
	isInside = false,
	isGrid = false,
	isPreview = true,
	onFilesAdded,
	onFilesChange,
	multiple = true,
	maxFiles = 10,
	maxSizeMB = 5,
	accept = "image/*",
	showUploadInfo = false,
}: {
	icon?: React.ReactNode;
	title?: string;
	description?: string;
	isInside?: boolean;
	isGrid?: boolean;
	isPreview?: boolean;
	onFilesAdded?: (files: FileWithPreview[]) => void;
	onFilesChange?: (files: Array<FileWithPreview>) => void;
	multiple?: boolean;
	maxFiles?: number;
	maxSizeMB?: number;
	accept?: string;
	showUploadInfo?: boolean;
}) => {
	const maxSize = maxSizeMB * 1024 * 1024;

	const [
		{ files, isDragging, errors },
		{
			handleDragEnter,
			handleDragLeave,
			handleDragOver,
			handleDrop,
			openFileDialog,
			removeFile,
			clearFiles,
			getInputProps,
		},
	] = useFileUpload({
		accept,
		maxSize,
		multiple,
		maxFiles,
		onFilesAdded: onFilesAdded,
		onFilesChange: onFilesChange,
	});

	// Determine if the component should show image previews
	const shouldShowPreview = (file) => {
		if (!isPreview) return false;
		const fileType =
			file.file instanceof File ? file.file.type : file.file.type;
		return fileType.startsWith("image/");
	};

	// Render the file list based on the isGrid prop
	const renderFileList = () => {
		if (files.length === 0) return null;

		if (isGrid) {
			return (
				<div className="gap-4 grid grid-cols-2 md:grid-cols-3">
					{files.map((file) => (
						<div
							key={file.id}
							className="relative flex flex-col bg-background border rounded-md"
						>
							<div className="flex-1 aspect-square">
								{shouldShowPreview(file) ? (
									<img
										src={file.preview}
										alt={
											file.file instanceof File
												? file.file.name
												: file.file.name
										}
										className="rounded-t-[inherit] size-full object-cover"
									/>
								) : (
									<div className="flex justify-center items-center h-full">
										{getFileIcon(file)}
									</div>
								)}
							</div>
							<Button
								onClick={() => removeFile(file.id)}
								size="icon"
								className="-top-2 -right-2 absolute shadow-none border-2 border-background focus-visible:border-background rounded-full size-6"
								aria-label="Remove file"
							>
								<XIcon className="size-3.5" />
							</Button>
							<div className="flex flex-col gap-0.5 p-3 border-t min-w-0">
								<p className="font-medium text-[13px] truncate">
									{file.file instanceof File ? file.file.name : file.file.name}
								</p>
								<p className="text-muted-foreground text-xs truncate">
									{formatBytes(
										file.file instanceof File ? file.file.size : file.file.size,
									)}
								</p>
							</div>
						</div>
					))}
				</div>
			);
		}
		return (
			<div className="space-y-2">
				{files.map((file) => (
					<div
						key={file.id}
						className="flex justify-between items-center gap-2 bg-background p-2 pe-3 border rounded-lg"
					>
						<div className="flex items-center gap-3 overflow-hidden">
							{shouldShowPreview(file) ? (
								<div className="bg-accent rounded aspect-square shrink-0">
									<img
										src={file.preview}
										alt={
											file.file instanceof File
												? file.file.name
												: file.file.name
										}
										className="rounded-[inherit] size-10 object-cover"
									/>
								</div>
							) : (
								<div className="flex justify-center items-center border rounded size-10 aspect-square shrink-0">
									{getFileIcon(file)}
								</div>
							)}
							<div className="flex flex-col gap-0.5 min-w-0">
								<p className="font-medium text-[13px] truncate">
									{file.file instanceof File ? file.file.name : file.file.name}
								</p>
								<p className="text-muted-foreground text-xs">
									{formatBytes(
										file.file instanceof File ? file.file.size : file.file.size,
									)}
								</p>
							</div>
						</div>

						<Button
							size="icon"
							variant="ghost"
							className="hover:bg-transparent -me-2 size-8 text-muted-foreground/80 hover:text-foreground"
							onClick={() => removeFile(file.id)}
							aria-label="Remove file"
						>
							<XIcon className="size-4" aria-hidden="true" />
						</Button>
					</div>
				))}

				{files.length > 1 && (
					<div>
						<Button size="sm" variant="outline" onClick={clearFiles}>
							Remove all files
						</Button>
					</div>
				)}
			</div>
		);
	};

	// Render the upload area content
	const renderUploadArea = () => {
		if (isInside && files.length > 0) {
			return (
				<div className="flex flex-col gap-3 w-full">
					<div className="flex justify-between items-center gap-2">
						<h3 className="font-medium text-sm truncate">
							Uploaded Files ({files.length})
						</h3>
						<Button
							variant="outline"
							size="sm"
							onClick={openFileDialog}
							disabled={files.length >= maxFiles}
						>
							<UploadIcon
								className="opacity-60 -ms-0.5 size-3.5"
								aria-hidden="true"
							/>
							Add more
						</Button>
					</div>
					{renderFileList()}
				</div>
			);
		}

		return (
			<div className="flex flex-col justify-center items-center px-4 py-3 text-center">
				<div
					className="flex justify-center items-center bg-background mb-2 border rounded-full size-11 shrink-0"
					aria-hidden="true"
				>
					{icon}
				</div>
				<p className="mb-1.5 font-medium text-sm">{title}</p>
				<p className="text-muted-foreground text-xs">{description}</p>
				{showUploadInfo && (
					<div className="flex flex-wrap justify-center gap-1 mt-2 text-muted-foreground/70 text-xs">
						{accept && <span>{accept.replace(/,/g, ", ")}</span>}
						{accept && <span>∙</span>}
						{multiple && <span>Max {maxFiles} files</span>}
						{multiple && <span>∙</span>}
						<span>Up to {formatBytes(maxSize)}</span>
					</div>
				)}
				<Button variant="outline" className="mt-4" onClick={openFileDialog}>
					<UploadIcon className="opacity-60 -ms-1" aria-hidden="true" />
					{multiple ? "Select files" : "Select file"}
				</Button>
			</div>
		);
	};

	return (
		<div className="flex flex-col gap-2">
			{/* Drop area */}
			<div
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				data-dragging={isDragging || undefined}
				data-files={files.length > 0 || undefined}
				className="relative flex flex-col not-data-[files]:justify-center items-center data-[dragging=true]:bg-accent/50 p-4 border border-input has-[input:focus]:border-ring border-dashed rounded-xl has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 min-h-52 overflow-hidden transition-colors"
			>
				<input
					{...getInputProps()}
					className="sr-only"
					aria-label={`Upload ${multiple ? "files" : "file"}`}
				/>
				{renderUploadArea()}
			</div>

			{errors.length > 0 && (
				<div
					className="flex items-center gap-1 text-destructive text-xs"
					role="alert"
				>
					<AlertCircleIcon className="size-3 shrink-0" />
					<span>{errors[0]}</span>
				</div>
			)}

			{/* File list - shown outside if isInside is false */}
			{!isInside && renderFileList()}
		</div>
	);
};

export default FileUploader;
