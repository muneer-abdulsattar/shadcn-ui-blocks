"use client";
import { RatingInput } from "@/components/extensions/rating-input";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function RatingInputDemo() {
	const [rating, setRating] = useState<number>(3.5);

	return (
		<div>
			<RatingInput
				rating={rating}
				onRatingChange={setRating}
				variant="yellow"
			/>
			<RatingInput
				rating={rating}
				onRatingChange={setRating}
				variant="destructive"
				Icon={<Heart />}
			/>
			<RatingInput
				rating={rating}
				onRatingChange={setRating}
				variant="destructive"
			/>
		</div>
	);
}
