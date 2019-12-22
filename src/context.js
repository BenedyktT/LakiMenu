import React, { createContext, useState } from "react";

export const ModalContext = createContext("green");

export const Provider = ModalContext.Provider;
export const initialState = {
	modalIsOpen: true
};
export const modalReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case "SET_MODAL_OPEN":
			return { ...state, modalIsOpen: true };
		case "SET_MODAL_CLOSE":
			return { ...state, modalIsOpen: false };

		default:
			return state;
	}
};

export const Consumer = ModalContext.Consumer;
