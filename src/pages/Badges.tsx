import { Badge } from "../../lib/components/Badge";
import { Card, Text } from "../../lib/main";

type Props = {};

export default function Badges({}: Props) {
	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			<Card>
				<Text>
					Hello I am a <Badge>Badge</Badge> cool!
				</Text>
				<Text>
					Hello I am a filled <Badge variant="filled">Badge</Badge>
				</Text>
				<Text>
					Hello I am a filled <Badge variant="combed">Badge</Badge>
				</Text>
			</Card>
		</main>
	);
}
