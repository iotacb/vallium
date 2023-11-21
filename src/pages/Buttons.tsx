import { Button, Card, Text } from "../../lib/main";

type Props = {};

export default function Buttons({}: Props) {
	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			{/* <Card row gap="4">
				<div className="flex items-center gap-4">
					<Button variant="white">Klick mich</Button>
					<Button variant="white" disabled>
						Klick mich
					</Button>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="accent">Klick mich</Button>
					<Button variant="accent" disabled>
						Klick mich
					</Button>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="dark">Klick mich</Button>
					<Button variant="dark" disabled>
						Klick mich
					</Button>
				</div>
			</Card> */}

			{/* <Card row items="center" gap="4"> */}
			<Button scale="thin">Thin</Button>
			<Button scale="small">Small</Button>
			<Button scale="normal">Normal</Button>
			<Button scale="big">Big halloffffffffodddddddddddddddddddddo</Button>
			{/* </Card> */}
		</main>
	);
}
