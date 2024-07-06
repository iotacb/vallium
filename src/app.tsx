import { ValliumTextType } from "../lib/components/Text";
import {
	Badge,
	Card,
	Divider,
	Text,
	ColorSwatch,
	colors,
	shadows,
	ValliumColorName,
	ValliumColorShade,
} from "../lib/main";
import "./index.css";

type Props = {};

export default function App({}: Props) {
	console.log(colors);
	console.log(shadows);

	return (
		<main className="min-h-svh p-20 bg-vallium-gray-900">
			<div className="max-w-screen-md m-auto flex flex-col gap-20">
				{/* title */}
				<div className="flex flex-col gap-5">
					<Text type="h1" weight="bold">
						Components / Design System
					</Text>
					<Divider />
					<div className="flex gap-2">
						<Badge variant="warning">Work in Progress</Badge>
						<Badge variant="info">v1.0</Badge>
					</div>
				</div>
				{/* colors */}
				<div className="flex flex-col gap-5">
					<Text id="colors" type="h2" weight="bold">
						#Colors
					</Text>
					<Text type="p" weight="semibold">
						Accent:
					</Text>
					<ColorSwatch swatchColor={{ name: "brand", shade: "500" }} />
					<Text type="p" weight="semibold">
						Background:
					</Text>
					<ColorSwatch swatchColor={{ name: "gray", shade: "900" }} />
					<Text type="p" weight="semibold">
						Foreground:
					</Text>
					<ColorSwatch swatchColor={{ name: "gray", shade: "800" }} />
					<Text type="p" weight="semibold">
						Foreground:
					</Text>
					<Text id="palette" type="h2" weight="bold">
						#Palette
					</Text>
					<div className="grid grid-cols-4 grid-rows-2 gap-y-10">
						<ColorPalette colorName="gray" />
						<ColorPalette colorName="blue" />
						<ColorPalette colorName="red" />
						<ColorPalette colorName="orange" />
						<ColorPalette colorName="green" />
						<ColorPalette colorName="brand" />
					</div>
				</div>
				<Divider />
				{/* typography */}
				<div className="flex flex-col gap-5">
					<Text id="palette" type="h2" weight="bold">
						#Typography
					</Text>
					<TextPreview type="h1">
						The quick brown fox jumps over the lazy dog
					</TextPreview>
					<TextPreview type="h2">
						The quick brown fox jumps over the lazy dog
					</TextPreview>
					<TextPreview type="h3">
						The quick brown fox jumps over the lazy dog
					</TextPreview>
					<TextPreview type="h4">
						The quick brown fox jumps over the lazy dog
					</TextPreview>
					<TextPreview type="h5">
						The quick brown fox jumps over the lazy dog
					</TextPreview>
					<TextPreview type="h6">
						The quick brown fox jumps over the lazy dog
					</TextPreview>
					<TextPreview type="p">
						The quick brown fox jumps over the lazy dog
					</TextPreview>
				</div>
				<Divider />
				{/* cards */}
				<div className="flex flex-col gap-5">
					<Text id="palette" type="h2" weight="bold">
						#Cards
					</Text>
					<Text type="h4" weight="semibold">
						Basic card
					</Text>
					<Card>
						<Text type="h2" weight="bold">
							Card
						</Text>
						<Text type="p" weight="normal">
							Card is a container component that can be used to group related
							elements together.
						</Text>
					</Card>
					<Text type="h4" weight="semibold">
						Card accents
					</Text>
					<div className="grid grid-cols-2 grid-rows-3 gap-5">
						<Card accent="left">
							<Text type="p" weight="normal">
								Left accent
							</Text>
						</Card>
						<Card accent="right">
							<Text type="p" weight="normal">
								Right accent
							</Text>
						</Card>
						<Card accent="top">
							<Text type="p" weight="normal">
								Top accent
							</Text>
						</Card>
						<Card accent="bottom">
							<Text type="p" weight="normal">
								Bottom accent
							</Text>
						</Card>
						<Card accent="x">
							<Text type="p" weight="normal">
								X-axis accent
							</Text>
						</Card>
						<Card accent="y">
							<Text type="p" weight="normal">
								Y-axis accent
							</Text>
						</Card>
					</div>
					<Text type="h4" weight="semibold">
						Card variants
					</Text>
					<div className="grid grid-cols-2 grid-rows-2 gap-5">
						<Card variant="info">
							<Text type="p" weight="normal">
								Info card variant
							</Text>
						</Card>
						<Card variant="success">
							<Text type="p" weight="normal">
								Success card variant
							</Text>
						</Card>
						<Card variant="warning">
							<Text type="p" weight="normal">
								Warning card variant
							</Text>
						</Card>
						<Card variant="danger">
							<Text type="p" weight="normal">
								Danger card variant
							</Text>
						</Card>
					</div>
					<Text type="h4" weight="semibold">
						Card variants with accents
					</Text>
					<div className="grid grid-cols-2 grid-rows-2 gap-5">
						<Card accent="left" variant="info">
							<Text type="p" weight="normal">
								Info card variant
							</Text>
						</Card>
						<Card accent="right" variant="success">
							<Text type="p" weight="normal">
								Success card variant
							</Text>
						</Card>
						<Card accent="top" variant="warning">
							<Text type="p" weight="normal">
								Warning card variant
							</Text>
						</Card>
						<Card accent="bottom" variant="danger">
							<Text type="p" weight="normal">
								Danger card variant
							</Text>
						</Card>
					</div>
					<Text type="h4" weight="semibold">
						Card depths
					</Text>
					<div className="grid grid-cols-2 grid-rows-2 gap-5">
						<Card>
							<Text type="p" weight="normal">
								No depth
							</Text>
						</Card>
						<Card depth="flat">
							<Text type="p" weight="normal">
								Flat depth
							</Text>
						</Card>
						<Card depth="raised">
							<Text type="p" weight="normal">
								Raised depth
							</Text>
						</Card>
						<Card depth="floating">
							<Text type="p" weight="normal">
								Floating depth
							</Text>
						</Card>
					</div>
				</div>
				<Divider />
			</div>
		</main>
	);
}

const ColorPalette = ({ colorName }: { colorName: ValliumColorName }) => {
	return (
		<div className="grid grid-cols-4 grid-rows-3 max-w-32">
			{Object.keys(colors[colorName])
				.filter((item) => item != "DEFAULT")
				.reverse()
				.map((color) => (
					<ColorSwatch
						swatchColor={{
							name: colorName as ValliumColorName,
							shade: color as ValliumColorShade,
						}}
					/>
				))}
		</div>
	);
};

const TextPreview = ({
	type,
	children,
}: { type: ValliumTextType } & React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div>
			<Text className="uppercase" type="h4" weight="semibold">
				{type}
			</Text>
			<div className="flex gap-2 items-end">
				<Text type={type} weight="light">
					{children}
				</Text>
				<p className="text-vallium-gray-200">-</p>
				<p className="text-vallium-gray-200">light</p>
			</div>
			<div className="flex gap-2 items-end">
				<Text type={type} weight="normal">
					{children}
				</Text>
				<p className="text-vallium-gray-200">-</p>
				<p className="text-vallium-gray-200">normal</p>
			</div>
			<div className="flex gap-2 items-end">
				<Text type={type} weight="medium">
					{children}
				</Text>
				<p className="text-vallium-gray-200">-</p>
				<p className="text-vallium-gray-200">medium</p>
			</div>
			<div className="flex gap-2 items-end">
				<Text type={type} weight="semibold">
					{children}
				</Text>
				<p className="text-vallium-gray-200">-</p>
				<p className="text-vallium-gray-200">semibold</p>
			</div>
			<div className="flex gap-2 items-end">
				<Text type={type} weight="bold">
					{children}
				</Text>
				<p className="text-vallium-gray-200">-</p>
				<p className="text-vallium-gray-200">bold</p>
			</div>
		</div>
	);
};
