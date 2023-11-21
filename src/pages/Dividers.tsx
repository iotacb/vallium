import { Divider } from "../../lib/components/Divider";
import { Card, Text } from "../../lib/main";

type Props = {};

export default function Dividers({}: Props) {
	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			<Card justify="center" items="center" className="w-80 h-20">
				<Divider />
				<Divider variant="gradient" />
			</Card>
			<Card row justify="evenly" items="center" className="w-80 h-80">
				<Divider direction="vertical" />
				<Divider direction="vertical" variant="gradient" />
			</Card>
		</main>
	);
}
