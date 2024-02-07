import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Home = () => {
	return (
		<div>
			<Jumbotron>
				<h1 className="display-3">Module Federation</h1>
				<hr className="my-2" />
				<p>Este componente é o 1º MFE deste projeto</p>
				<p className="lead">
					<Button color="primary">Salvar</Button>
				</p>
			</Jumbotron>
		</div>
	);
};

export default Home;
