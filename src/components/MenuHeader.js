import React from "react";
import classnames from "classnames";

export default function MenuHeader(props) {
	const { isEnglish } = props;
	const onClick = e => {
		const id = e.target.id;
		id === "en" ? props.onIsEnglish(true) : props.onIsEnglish(false);
	};
	return (
		<div className="menu-header">
			<p>Jólamatseðil Laugardaginn 7.des</p>
			<div className="menu-header__language">
				<button
					aria-pressed="false"
					id="is"
					onClick={onClick}
					className={classnames(" btn--jola", {
						active: !isEnglish
					})}
				>
					Is
				</button>
				<button
					aria-pressed="false"
					id="en"
					onClick={onClick}
					className={classnames(" btn--jola", {
						active: isEnglish
					})}
				>
					En
				</button>
			</div>
		</div>
	);
}
