import React from "react";
import { Card, Text } from "../../lib/main";
import { useInterval } from "usehooks-ts";

type Props = {};

export default function Cards({}: Props) {
	const [isCol, setIsCol] = React.useState<boolean>(false);

	useInterval(() => {
		setIsCol(!isCol);
	}, 2000);
	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			<Card>
				<Text>Normal card</Text>
			</Card>
			<Card row>
				<Card scheme="normal">Normal</Card>
				<Card scheme="info">Normal</Card>
				<Card scheme="success">Normal</Card>
				<Card scheme="warning">Normal</Card>
				<Card scheme="error">Normal</Card>
			</Card>
			<Card row>
				<Card accent="left" scheme="normal">
					Normal
				</Card>
				<Card accent="left" scheme="info">
					Normal
				</Card>
				<Card accent="top" scheme="success">
					Normal
				</Card>
				<Card accent="right" scheme="warning">
					Normal
				</Card>
				<Card accent="bottom" scheme="error">
					Normal
				</Card>
			</Card>
		</main>
	);
}
