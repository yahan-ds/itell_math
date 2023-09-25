"use client";

import Link from "next/link";
import { Button } from "../ui-components";

export default function () {
	return (
		<Link href="/summary/new">
			<Button size="lg">New summary</Button>
		</Link>
	);
}
