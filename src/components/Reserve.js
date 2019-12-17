import React, { useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};
const Reserve = props => {
	const [inputValues, setInputValues] = useState({
		name: "",
		email: "",
		phone: "",
		pax: "2",
		date: new Date(),
		time: "",
		special: ""
	});
	const [error, setError] = useState({
		msg: ""
	});

	const { name, time, date } = inputValues;
	const onSubmit = e => {
		e.preventDefault();
		if (name && date && time) {
			const data = {
				...inputValues,
				date: format(inputValues.date, "dd-MM-yyyy"),
				time: format(inputValues.time, "HH-mm")
			};
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contact", ...data })
			})
				.then(() => props.history.push("/success"))
				.catch(error => console.error(error));

			e.preventDefault();
		} else {
			setError({ msg: "Please, fill all required fields" });
		}
	};

	const onChange = e => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value
		});
	};
	return (
		<div
			className={
				error.msg ? "emailform-container danger-border" : "emailform-container"
			}
		>
			<div className="emailform">
				{error.msg && (
					<h2
						style={{
							margin: "2rem auto",
							textAlign: "center",
							color: "rgb(246,92,120)",
							font: "inherit",
							fontSize: "2rem"
							//comment
						}}
					>
						{error.msg}
					</h2>
				)}
				<form
					onSubmit={onSubmit}
					action="/success.html"
					name="contact"
					method="POST"
					netlify-honeypot="bot-field"
					data-netlify="true"
					className="emailform__form"
				>
					<ul className="emailform__elements">
						<li className="emailform__element">
							<label className="form-label emailform__title">
								<p>First name:</p>
								<input
									onChange={onChange}
									name="name"
									/* required={true} */
									maxLength="25"
									type="text"
									className="form__element name"
									placeholder="Name"
								/>
							</label>
						</li>
						<li className="emailform__element">
							<label className="form-label emailform__title">
								<p>Email:</p>

								<input
									onChange={onChange}
									name="email"
									required={true}
									type="text"
									className="form__element mail"
									placeholder="E-mail"
								/>
							</label>
						</li>
						<li className="emailform__element">
							<label className="form-label emailform__title">
								<p>Phone:</p>

								<input
									onChange={onChange}
									name="phone"
									type="text"
									className="form__element phone"
									placeholder="Phone"
								/>
							</label>
						</li>
						<li className="emailform__element">
							<label className="form-label emailform__title guest-number">
								<p>Number of Guests:</p>

								<input
									onChange={onChange}
									required={true}
									name="pax"
									type="number"
									placeholder="Guest number"
									className="form__element"
									defaultValue="2"
								/>
							</label>
						</li>
						<li className="emailform__element dateEl">
							<label className="form-label emailform__title">
								<p>Date:</p>
								<DatePicker
									required={true}
									selected={date}
									onChange={date => setInputValues({ ...inputValues, date })}
									placeholderText="Click to select a date"
									dateFormat="MM/dd/yyyy"
									className="form__element time"
									name="date"
								/>
							</label>
						</li>
						<li className="emailform__element dateEl">
							<label className=" form-label emailform__title">
								<p>Time:</p>
								<DatePicker
									required={true}
									onChange={time => setInputValues({ ...inputValues, time })}
									selected={time}
									showTimeSelect
									showTimeSelectOnly
									minTime={setHours(setMinutes(new Date(), 0), 18)}
									maxTime={setHours(setMinutes(new Date(), 0), 21)}
									timeIntervals={30}
									timeCaption="Time"
									dateFormat="h:mm aa"
									className="form__element time"
									name="time"
									placeholderText="Click to select time"
								/>
							</label>
						</li>

						<li className="emailform__element">
							<label className="form-label emailform__title">
								<p>Special request:</p>

								<textarea
									onChange={onChange}
									name="special"
									className="form__element"
									cols="auto"
									rows="2"
									className="special form__element"
									placeholder="Special requests"
								></textarea>
							</label>
						</li>
						<li className="emailform__element submitForm">
							<input
								className="emailform__submit btn"
								type="submit"
								value="Reserve"
							/>
						</li>
						<li className="hidden">
							<input onChange={onChange} name="bot-field" />
							<input type="hidden" name="form-name" value="contact" />
						</li>
					</ul>
				</form>
			</div>
		</div>
	);
};

export default Reserve;

/* <input
style={{ display: "hidden" }}
onChange={onChange}
min="18:00"
max="21:00"
required={true}
type="time"
name="time"

/> */
