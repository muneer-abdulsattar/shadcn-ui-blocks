"use client";

import ProfileFileUploader from "@/components/extensions/files-uploader/profile";
import { useState } from "react";

export default function FileUploaderDemo() {
	const [profileImage, setProfileImage] = useState<any>();

	return (
		<div className="flex flex-wrap gap-3">
			<ProfileFileUploader onFileChange={setProfileImage} />
			<ProfileFileUploader onFileChange={setProfileImage} rounded />
		</div>
	);
}
