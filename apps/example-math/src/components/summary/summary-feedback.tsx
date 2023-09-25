import { ScoreType } from "@/lib/constants";
import { SummaryFeedback } from "@/lib/summary";
import { keyof } from "@itell/core";
import { Info, Typography, Warning } from "@itell/ui/server";

type Props = {
	feedback: SummaryFeedback;
};

export default function Feedback({ feedback }: Props) {
	const FeedbackBody = (
		<Typography as="div">
			{feedback.prompt}
			<details className="mt-2">
				<summary>Details</summary>
				{keyof(feedback.individualPrompt).map((key) => {
					const individualFeedback = feedback.individualPrompt[key];
					let label: string;
					if (key === ScoreType.similarity) {
						label = "Topic Similarity";
					} else if (key === ScoreType.containment) {
						label = "Topic Borrowing";
					} else {
						label = key;
					}
					return (
						individualFeedback.prompt && (
							<p key={key}>
								<span style={{ textTransform: "capitalize" }}>{`${
									individualFeedback.isPassed ? "✅" : "❌"
								} ${label}: `}</span>
								{feedback.individualPrompt[key].prompt}
							</p>
						)
					);
				})}
			</details>
		</Typography>
	);

	return feedback.isPassed ? (
		<Info>{FeedbackBody}</Info>
	) : (
		<Warning>{FeedbackBody}</Warning>
	);
}
