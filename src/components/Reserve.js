import React, { useState } from "react";

const Reserve = () => {
	const [inputValues, setInputValues] = useState({
		name: "",
		email: "",
		phone: "",
		pax: "",
		name: "",
		special: ""
	});
	const onChange = () => {};
	return (
		<div>
			<div
				style={{ opacity: 1, display: " block", minHeight: "100%" }}
				className="emailform-container subpage"
			>
				<div className="emailform">
					<form
						action="/success.html"
						name="contact"
						method="POST"
						netlify-honeypot="bot-field"
						data-netlify="true"
						className="emailform__form"
					>
						<ul className="emailform__elements">
							<li className="emailform__element">
								<div className="emailform__title">
									<p>First name:</p>
								</div>
								<input
									onChange={onChange}
									name="name"
									required={true}
									maxLength="25"
									type="text"
									className="form__element name"
									placeholder="Name"
								/>
							</li>
							<li className="emailform__element">
								<div className="emailform__title">
									<p>Email:</p>
								</div>
								<input
									onChange={onChange}
									name="email"
									required={true}
									type="email"
									className="form__element mail"
									placeholder="E-mail"
								/>
							</li>
							<li className="emailform__element">
								<div className="emailform__title">
									<p>Phone:</p>
								</div>
								<input
									onChange={onChange}
									name="phone"
									type="text"
									className="form__element phone"
									placeholder="Phone"
								/>
							</li>
							<li className="emailform__element">
								<div className="emailform__title guest-number">
									<p>Number of Guests:</p>
								</div>
								<select
									onChange={onChange}
									required={true}
									name="pax"
									className="form__element select-guests"
									defaultValue="2"
								>
									<option name="" value="select" disabled>
										Guests
									</option>
									<option name="PAX1" value="1">
										1
									</option>
									<option name="PAX2" value="2">
										2
									</option>
									<option name="PAX3" value="3">
										3
									</option>
									<option name="PAX4" value="4">
										4
									</option>
									<option name="PAX5" value="5">
										5
									</option>
									<option name="PAX6" value="6">
										6
									</option>
									<option name="PAX7" value="7">
										7
									</option>
									<option name="PAX8" value="8">
										8
									</option>
									<option name="PAX9" value="9">
										9
									</option>
									<option name="PAX10" value="10">
										10
									</option>
									<option name="PAX10" value="10">
										>10
									</option>
								</select>
								<input
									onChange={onChange}
									className="hidden-input"
									name="total-pax"
									type="number"
								/>
							</li>
							<li className="emailform__element dateEl">
								<div className="emailform__title">
									<p>Date:</p>
								</div>
								<input
									onChange={onChange}
									name="date"
									type="date"
									value=""
									className="form__element date date-element"
									min=""
								/>
							</li>
							<li className="emailform__element dateEl">
								<div className="emailform__title">
									<p>Time:</p>
								</div>
								<input
									onChange={onChange}
									min="13:00"
									max="21:30"
									required={true}
									type="time"
									name="time"
									className="form__element time"
								/>
							</li>

							<li className="emailform__element">
								<div className="emailform__title">
									<p>Special request:</p>
								</div>
								<textarea
									onChange={onChange}
									name="special"
									className="form__element"
									name=""
									id=""
									cols="auto"
									rows="1"
									className="special"
									placeholder="Special requests"
								></textarea>
							</li>
							<li className="emailform__element submitForm">
								<button className="emailform__submit btn" type="submit">
									Submit
								</button>
							</li>
							<li className="hidden">
								<input onChange={onChange} name="bot-field" />
							</li>
						</ul>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Reserve;
