import React from "react";
import "../styles/jolamenu.scss";
import MenuHeader from "./MenuHeader";
import MenuContent from "./MenuContent";

export default function App() {
	const forretir = [
		{
			name: "Tvíreykt hangikjöt ",
			description: `með klettasalati, piparrótarsósu og baguette`,
			price: "1790kr"
		},
		{
			name: "Humarsúpa",
			price: "1790kr"
		}
	];
	const adalrettir = [
		{
			name: `Jóla-trió`,
			description: `Léttreyktur lambahryggur, purusteik og gæsabringa
            Með kartöflugratín, waldorfsalati og gljáa`,
			price: "3300kr"
		},
		{
			name: "Nautakjöt",
			description:
				"Með hvítlauksristuðum sveppum, kartöflugratín eða bakaðri kartöflu og gljáa",
			price: "4400kr"
		},
		{
			name: "Saltfiskur",
			description:
				"Með klettasalati, lauksmjöri, sólþurrkuðum  tómötum, ólífum  og truffle kartöflumús",
			price: "2200kr"
		}
	];
	const eftirrettir = [
		{
			name: `Créme brulée`,
			description: "",
			price: "1400k"
		},
		{
			name: "Brownies",
			description: "",
			price: "1500kr"
		},
		{
			name: "Skyrkaka",
			description: "",
			price: "1400kr"
		}
	];
	return (
		<div className="app-container">
			<MenuHeader />
			<MenuContent course="Forrétir" dishes={forretir} />
			<MenuContent course="Aðalréttir" dishes={adalrettir} />
			<MenuContent course="Eftiréttir" dishes={eftirrettir} />
		</div>
	);
}
