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

	// useInterval(() => {
	// 	setShowAddonRight(!showAddonRight);
	// 	setShowItemRight(!showItemRight);
	// }, 2000);

	return (
		<main className="h-dvh bg-zinc-900 flex flex-col justify-center items-center gap-8">
			<Text type="h1" weight="bold" underline>
				Typography
			</Text>
			<Card flex direction="col" gap="4">
				{/* <InputGroup>
					<InputAddonLeft>Mert</InputAddonLeft>
					<InputItemLeft>$</InputItemLeft>
					<Input />
				</InputGroup> */}
				<div className="flex items-center gap-4 w-full">
					<Input placeholder="Default Input" />
					<Input variant="filled" placeholder="Default Input" />
				</div>
				<div className="flex items-center gap-4 w-full">
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
					<InputGroup>
						<InputAddonLeft>
							<Text>$</Text>
						</InputAddonLeft>
						<Input variant="filled" placeholder="Input with addons" />
						{showAddonRight && (
							<InputAddonRight>
								<Text>@</Text>
							</InputAddonRight>
						)}
					</InputGroup>
				</div>
				<div className="flex items-center gap-4 w-full">
					<InputGroup>
						<InputItemLeft>$</InputItemLeft>
						<Input placeholder="Input with Items" />
						{showItemRight && <InputItemRight>@</InputItemRight>}
					</InputGroup>
					<InputGroup>
						<InputItemLeft>$</InputItemLeft>
						<Input variant="filled" placeholder="Input with Items" />
						{showItemRight && <InputItemRight>@</InputItemRight>}
					</InputGroup>
				</div>
				<div className="flex items-center gap-4 w-full">
					<InputGroup>
						<InputItemLeft>$</InputItemLeft>
						<InputAddonLeft>Test</InputAddonLeft>
						<Input placeholder="Input with Items" />
						{<InputItemRight>@</InputItemRight>}
						<InputAddonRight>Test</InputAddonRight>
					</InputGroup>
					<InputGroup>
						<InputItemLeft>$</InputItemLeft>
						<Input variant="filled" placeholder="Input with Items" />
						{showItemRight && <InputItemRight>@</InputItemRight>}
					</InputGroup>
				</div>
			</Card>
		</main>
	);
}
