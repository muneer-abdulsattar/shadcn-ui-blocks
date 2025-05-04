"use client";
import FileUploader from "@/components/extensions/files-uploader";
import type { FileWithPreview } from "@/components/extensions/files-uploader/use-file-upload";
import { useState } from "react";

export default function FileUploaderDemo() {
	const [files, setFiles] = useState<Array<FileWithPreview>>([]);
	return (
		<div className="flex flex-wrap gap-3">
			<FileUploader
				onFilesChange={setFiles}
				title="upload files inside with grid"
				maxFiles={3}
				isPreview
				isInside
				isGrid
			/>
			<FileUploader
				onFilesChange={setFiles}
				title="upload files outside with grid"
				maxFiles={3}
				isPreview={false}
				isInside={false}
				isGrid
			/>
			<FileUploader
				onFilesChange={setFiles}
				title="upload files on top of each other"
				maxFiles={3}
				isPreview
				isInside
				isGrid={false}
			/>
		</div>
	);
}
