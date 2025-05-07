"use client";

import ProfileFileUploader from "@/components/extensions/files-uploader/profile";
import { useState } from "react";

export default function FileUploaderDemo() {
	const [profileImage, setProfileImage] = useState<File | null>(null);

	return (
		<div>
			<div className="flex flex-wrap gap-3">
				<ProfileFileUploader onFileChange={setProfileImage} />
				<ProfileFileUploader onFileChange={setProfileImage} rounded />
			</div>
			<div className="my-5">
				<p>With Crop</p>
				<div className="flex flex-wrap gap-3">
					<ProfileFileUploader onFileChange={setProfileImage} enableCrop />
					<ProfileFileUploader
						onFileChange={setProfileImage}
						rounded
						enableCrop
					/>
				</div>
			</div>
		</div>
	);
}
