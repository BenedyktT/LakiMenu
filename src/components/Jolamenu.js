import React from "react";
import "../styles/jolamenu.scss";
import MenuHeader from "./MenuHeader";
import MenuContent from "./MenuContent";

export default class Jolamenu extends React.Component {
	state = {
		forretir: [
			{
				name: "Tvíreykt hangikjöt ",
				description: `með klettasalati, piparrótarsósu og baguette`,
				price: "1790kr"
			},
			{
				name: "Humarsúpa",
				price: "1790kr"
			}
		],
		starter: [
			{
				name: "Double smoked lamb",
				description: "lamb with rocket salad, pepper root sauce and baguette",
				price: "1790kr"
			},
			{ name: "Lobster soup", price: "1790kr" }
		],
		adalrettir: [
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
		],
		main: [
			{
				name: "Christmas trio",
				description:
					"Light smoked lamb spine, pork belly and goose breast With potato gratin, Waldorf salad and demi glace",
				price: "3300kr"
			},
			{
				name: "Beef steak",
				description:
					"With garlic roasted mushrooms, potato gratin or baked potato and demi glace",
				price: "4400kr"
			},
			{
				name: "Salt fish",
				description:
					"With rocket salad, onion butter, sundried tomatoes, olives and truffled mashed potatoes",
				price: "2200kr"
			}
		],
		eftirrettir: [
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
		],
		dessert: [
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
				name: "Skyrcake",
				description: "",
				price: "1400kr"
			}
		],
		isLanguageEnglish: true
	};
	onLanguageChange = isLanguageEnglish => {
		return this.setState(() => ({ isLanguageEnglish }));
	};
	render() {
		const {
			forretir,
			adalrettir,
			eftirrettir,
			isLanguageEnglish,
			main,
			starter,
			dessert
		} = this.state;
		return (
			<div className="app-container">
				<MenuHeader
					onIsEnglish={this.onLanguageChange}
					isEnglish={isLanguageEnglish}
				/>
				<MenuContent
					course="Forrétir"
					dishes={isLanguageEnglish ? starter : forretir}
				/>
				<MenuContent
					course="Aðalréttir"
					dishes={isLanguageEnglish ? main : adalrettir}
				/>
				<MenuContent
					course="Eftiréttir"
					dishes={isLanguageEnglish ? dessert : eftirrettir}
				/>
			</div>
		);
	}
}
