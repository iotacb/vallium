import React, { useState } from "react";
import { Button, Navbar, cssReset } from "vallium";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<Navbar>
				<h1>Vallium</h1>
				<Button variant="ghost">Click</Button>
			</Navbar>
		</div>
	);
}

export default App;
