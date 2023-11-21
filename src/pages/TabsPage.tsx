import { Tab, Tabs } from "../../lib/components/Tabs";
import { Card, Text } from "../../lib/main";

type Props = {};

export default function TabsPage({}: Props) {
	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			<Card className="grid grid-cols-2 p-10 gap-4">
				<Card>
					<Tabs items={["One", "Two", "Three"]}>
						<Tab>
							<Text>One!</Text>
							<div className="w-60 h-40 bg-red-500"></div>
						</Tab>
						<Tab>
							<Text>Two!</Text>
							<div className="w-60 h-40 bg-green-500"></div>
						</Tab>
						<Tab>
							<Text>Three!</Text>
							<div className="w-60 h-40 bg-blue-500"></div>
						</Tab>
					</Tabs>
				</Card>
				<Card>
					<Tabs accent items={["One", "Two", "Three"]}>
						<Tab>
							<Text>One!</Text>
							<div className="w-60 h-40 bg-red-500"></div>
						</Tab>
						<Tab>
							<Text>Two!</Text>
							<div className="w-60 h-40 bg-green-500"></div>
						</Tab>
						<Tab>
							<Text>Three!</Text>
							<div className="w-60 h-40 bg-blue-500"></div>
						</Tab>
					</Tabs>
				</Card>
				<Card>
					<Tabs accent fitted items={["One", "Two", "Three"]}>
						<Tab>
							<Text>One!</Text>
							<div className="w-60 h-40 bg-red-500"></div>
						</Tab>
						<Tab>
							<Text>Two!</Text>
						</Tab>
						<Tab>
							<Text>Three!</Text>
						</Tab>
					</Tabs>
				</Card>
				<Card>
					<Tabs accent bottom items={["One", "Two", "Three"]}>
						<Tab>
							<Text>One!</Text>
							<div className="w-60 h-40 bg-red-500"></div>
						</Tab>
						<Tab>
							<Text>Two!</Text>
						</Tab>
						<Tab>
							<Text>Three!</Text>
						</Tab>
					</Tabs>
				</Card>
			</Card>
		</main>
	);
}
