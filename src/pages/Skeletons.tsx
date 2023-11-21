import React from "react";
import { Button, Card, Skeleton, SkeletonCircle, Text } from "../../lib/main";

type Props = {};

export default function Skeletons({}: Props) {
	const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			<Card className="w-80">
				<Skeleton />
				<Skeleton />
				<Skeleton />
			</Card>

			<Card className="w-80">
				<Skeleton lineCount={4} />
			</Card>

			<Card className="w-80">
				<SkeletonCircle />
				<Skeleton lineCount={4} />
			</Card>

			<Card items="center" className="w-80">
				<Skeleton loaded={isLoaded}>
					<div className="text-white">
						<p>Wrapped</p>
						<p>So invisible</p>
						<p>So invisible</p>
					</div>
				</Skeleton>
				<Button onClick={() => setIsLoaded(!isLoaded)} variant="dark">
					Toggle
				</Button>
			</Card>
		</main>
	);
}
