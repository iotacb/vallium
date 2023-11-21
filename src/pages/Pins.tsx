import { Card, Text } from "../../lib/main";
import { PinInput, PinInputItem } from "../../lib/components/PinInput";

type Props = {};

export default function Pins({}: Props) {
	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			<Card>
				<PinInput>
					<PinInputItem />
					<PinInputItem />
					<PinInputItem />
					<PinInputItem />
				</PinInput>
			</Card>
		</main>
	);
}
