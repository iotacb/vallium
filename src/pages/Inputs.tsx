import React from "react";
import {
	InputAddonLeft,
	InputAddonRight,
	InputItemLeft,
	InputItemRight,
} from "../../lib/components/Input";
import { Input, Card, Text, InputGroup } from "../../lib/main";
import { useInterval } from "usehooks-ts";

type Props = {};

export default function Inputs({}: Props) {
	const [showAddonRight, setShowAddonRight] = React.useState<boolean>(false);
	const [showItemRight, setShowItemRight] = React.useState<boolean>(false);

	useInterval(() => {
		setShowAddonRight(!showAddonRight);
		setShowItemRight(!showItemRight);
	}, 2000);

	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			<Card flex direction="col" gap="4">
				<div className="flex items-center gap-4">
					<Input placeholder="Default Input" />
				</div>
				<div className="flex items-center gap-4">
					<InputGroup>
						<InputAddonLeft>
							<Text>$</Text>
						</InputAddonLeft>
						<Input placeholder="Input with addons" />
						{showAddonRight && (
							<InputAddonRight>
								<Text>@</Text>
							</InputAddonRight>
						)}
					</InputGroup>
				</div>
				<div className="flex items-center gap-4">
					<InputGroup>
						<InputItemLeft>$</InputItemLeft>
						<Input placeholder="Input with Items" />
						{showItemRight && <InputItemRight>@</InputItemRight>}
					</InputGroup>
				</div>
			</Card>
		</main>
	);
}
