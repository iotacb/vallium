import React from "react";
import { Card, Text } from "../../lib/main";
import { motion } from "framer-motion";
import { useInterval } from "usehooks-ts";

type Props = {};

const MotionCard = motion(Card);

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
				<Text>I am a card.</Text>
			</Card>
			<MotionCard layout layoutRoot flex direction={isCol ? "col" : "row"}>
				<motion.div layout>
					<Text>I am a card.</Text>
				</motion.div>
				<motion.div layout>
					<Text>I am a card.</Text>
				</motion.div>
			</MotionCard>
		</main>
	);
}
