import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar, cssReset } from "vallium";
import styled from "styled-components";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<Navbar>
				<h1>Test</h1>
				<Button>Test</Button>
			</Navbar>
		</div>
	);
}

export default App;
