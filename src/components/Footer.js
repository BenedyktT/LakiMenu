import React from "react";
import Booking from "../images/logos/320px-Booking.com_logo.svg.png";
import HotelLogo from "../images/logos/HL_white+red-01.png";
import TripAdvisor from "../images/logos/kisspng-tripadvisor-hotel-the-draen-bed-and-breakfast-tr-5b131baf5335a6.3854333415279789273408.png";

const Footer = () => {
	return (
		<footer className="footer">
			<ul className="links">
				<li className="link">
					<img src={Booking} alt="booking.com" />
				</li>
				<li className="link">
					<img src={HotelLogo} alt="hotel laki logo" />
				</li>
				<li className="link">
					<img src={TripAdvisor} alt="trip advisor logo" />
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
