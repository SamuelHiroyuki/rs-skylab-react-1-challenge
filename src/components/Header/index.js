import React from "react";

import logo_image from "../../assets/images/logo.png";

export default function App() {
	return (
		<header>
			<img src={logo_image} alt="Rocketbook" />

			<div>
				<span>Meu perfil</span>
				<i className="material-icons">account_circle</i>
			</div>
		</header>
	);
}
