import React from "react";

const Presentation = ({ src, style, width, height, maxWidth }) => {
	return (
		<div className="presentation-wrapper">
			<iframe
				width={width}
				height={height}
				style={style}
				src={src}
				allowFullScreen={true}
			></iframe>
		</div>
	);
};

export default Presentation;
