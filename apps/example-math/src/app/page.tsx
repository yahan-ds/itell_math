import LabIcon from "@/components/lab-icon";
import TextbookNavbar from "@/components/nav/textbook-nav";
import { Button } from "@/components/ui-components";
import { Typography } from "@itell/ui/server";
import { Fragment } from "react";

import { StartOrContinueReading } from "@/components/start-or-continue-reading";

export default function Home() {
	return (
		<Fragment>
			<TextbookNavbar showProgress={false} />
			<div className="px-6 md:px-10 lg:px-16 py-8 mx-auto max-w-3xl">
				<Button variant="default">primary</Button>
				<Button variant="secondary">hello world</Button>
				<div className="flex justify-center items-center">
					<LabIcon />
				</div>
				<Typography>
                    This textbook is adopted from Ratio Topic available at Carnegie Learning. 
				</Typography>
				<Typography variant="h3">About the textbook</Typography>
				<Typography>
					A project by the Language and Educational Analytics Research (Lear)
					Lab.
				</Typography>


                <div className="flex justify-center items-center p-4">
					<StartOrContinueReading />
				</div>

			</div>
		</Fragment>
	);
}
