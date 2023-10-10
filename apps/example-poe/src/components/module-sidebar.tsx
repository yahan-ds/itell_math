import { Chapter } from "@/types/section";
import { Typography } from "@itell/ui/server";
import Balancer from "react-wrap-balancer";
import { cn } from "@itell/core";
import { SectionLocation } from "@/types/location";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui-components";

type ModuleSidebarProps = {
	chapters: Chapter[];
	currentLocation: SectionLocation;
};

export function ModuleSidebar({
	chapters,
	currentLocation,
}: ModuleSidebarProps) {
	return (
		<nav className="space-y-1">
			{chapters.map((chapter) => (
				<Collapsible
					key={chapter.chapter}
					open={chapter.chapter === currentLocation.chapter}
					className="list-none"
				>
					<CollapsibleTrigger className="px-1 gap-0">
						<div
							className={cn("relative hover:bg-accent rounded-md mb-2", {
								"bg-accent":
									chapter.chapter === currentLocation.chapter &&
									currentLocation.section === 0,
							})}
						>
							<a href={`/${chapter.url}`} className="block mb-1 p-1">
								<Typography variant="h6" className="m-0">
									<Balancer as="div">{chapter.title}</Balancer>
								</Typography>
							</a>
						</div>
					</CollapsibleTrigger>

					<CollapsibleContent>
						{chapter.sections.map((section, index) => (
							<li
								className={cn(
									"px-2 py-1 transition ease-in-out duration-200 relative rounded-md hover:bg-accent",
									{
										"bg-accent":
											section.chapter === currentLocation.chapter &&
											section.section === currentLocation.section,
									},
								)}
								key={section.url}
							>
								<a href={`/${section.url}`}>
									<Typography variant="small" className="m-0 p-0">
										<Balancer>{`${index + 1}. ${section.title}`}</Balancer>
									</Typography>
								</a>
							</li>
						))}
					</CollapsibleContent>
				</Collapsible>
			))}
		</nav>
	);
}
