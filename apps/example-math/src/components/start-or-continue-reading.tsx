"use client";

import Link from "next/link";
import { buttonVariants } from "@itell/ui/server";

export const StartOrContinueReading = () => {
	const text = "Start Reading";
	const href = "/module-1/chapter-1";

	return (
        <Link href={href} className={`${buttonVariants({ size: "lg" })} rounded-full`}>
            {text}
        </Link>
	);
};