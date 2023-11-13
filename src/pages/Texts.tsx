import { Card } from "../../lib/components/Card";
import { Text, ValliumTextType } from "../../lib/components/Text";

type Props = {};

const texts: { type: ValliumTextType; text: string }[] = [
	{
		type: "h1",
		text: "Heading 1",
	},
	{
		type: "h2",
		text: "Heading 2",
	},
	{
		type: "h3",
		text: "Heading 3",
	},
	{
		type: "h4",
		text: "Heading 4",
	},
	{
		type: "h5",
		text: "Heading 5",
	},
	{
		type: "h6",
		text: "Heading 6",
	},
	{
		type: "p",
		text: "Paragraph",
	},
];

export default function Texts({}: Props) {
	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			<Card flex direction="col" justify="center" items="center" gap="4">
				{texts.map((text, index) => (
					<div key={index} className="flex items-center gap-4">
						<Text type={text.type}>{text.text}</Text>
						<Text type={text.type} underline>
							{text.text}
						</Text>
						<Text type={text.type} weight="bold">
							{text.text}
						</Text>
						<Text type={text.type} underline weight="bold">
							{text.text}
						</Text>
					</div>
				))}
			</Card>
		</main>
	);
}
