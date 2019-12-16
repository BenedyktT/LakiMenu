import React, { useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

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
    pax: "",
    date: "",
    time: "",
    special: ""
  });
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const { name, email, phone, pax, special } = inputValues;
  const onSubmit = e => {
    e.preventDefault();
    if (name) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...inputValues })
      })
        .then(() => props.history.push("/success"))
        .catch(error => console.error(error));

      e.preventDefault();
    } else {
      alert("GIVE NAME");
    }
  };

  const onChange = e => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="emailform-container">
      <div className="emailform">
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
                  /* required={true} */
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
                  /*  required={true} */
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
                  selected={date}
                  onChange={date => setDate(date)}
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
                  selected={time}
                  onChange={time => setTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  minTime={setHours(setMinutes(new Date(), 0), 18)}
                  maxTime={setHours(setMinutes(new Date(), 0), 21)}
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="form__element time"
                  name="time"
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
