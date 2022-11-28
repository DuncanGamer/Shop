import { Token_Name } from "../constants/env"



export const gettoken = () => { localStorage.getItem(Token_Name) }

export const setToken = (token) => { localStorage.setItem(Token_Name, token) }

export const deletToken = () => { localStorage.removeItem(Token_Name) }

export const clearToken = () => { localStorage.clear() }