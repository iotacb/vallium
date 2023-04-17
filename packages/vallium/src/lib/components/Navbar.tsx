import React from "react";
import styled from "styled-components";
import { breakpoints } from "../misc/constants";

type Props = {
	children: React.ReactNode;
};

export default function Navbar({ children }: Props) {
	return (
		<NavbarContainer>
			<NavbarContent>{children}</NavbarContent>
		</NavbarContainer>
	);
}

const NavbarContainer = styled.header`
	position: sticky;
	top: 0;

	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-right: 1.5rem;
	padding-left: 1.5rem;

	@media (min-width: ${breakpoints.max}px) {
		max-width: ${breakpoints.max}px;
	}
`;

const NavbarContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 4rem;

	border-bottom: 1px solid rgb(226 232 240);
`;
