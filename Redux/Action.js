import { Reqlogin, Loading, Error, FetchIce, EditIce, AddIce, DeleteIce, CartIce, Cartfetch, CartDelete } from "./ActionType";

import axios from "axios";

export const LoginReq = (email, password) => async (dispatch) => {

     dispatch({ type: Loading });
     try {
          const res = await axios.post("https://reqres.in/api/login", { email, password });
          dispatch({ type: Reqlogin, payload: res });
          console.log(res)
     } catch (error) {
          dispatch({ type: Error, payload: error })
          console.log(error);
     }

}
export const addice = (dataa) => async (dispatch) => {

     dispatch({ type: Loading });
     try {
          const res = await axios.post("https://ice-creame.onrender.com/icecream", dataa);
          dispatch({ type: AddIce, payload: res.data });
          console.log(res)
     } catch (error) {
          dispatch({ type: Error, payload: error })
          console.log(error);
     }

}
export const fetchice = () => async (dispatch) => {

     dispatch({ type: Loading });
     try {
          const res = await axios.get("https://ice-creame.onrender.com/icecream");
          dispatch({ type: FetchIce, payload: res.data });
          console.log(res)
     } catch (error) {
          dispatch({ type: Error, payload: error })
          console.log(error);
     }

}
export const editice = (id, data) => async (dispatch) => {

     dispatch({ type: Loading });
     try {
          const res = await axios.patch(`https://ice-creame.onrender.com/icecream/${id}`, data);
          dispatch({ type: EditIce, payload: res.data });
          console.log(res)
     } catch (error) {
          dispatch({ type: Error, payload: error })
          console.log(error);
     }

}
export const deleteice = (id) => async (dispatch) => {

     dispatch({ type: Loading });
     try {
          const res = await axios.delete(`https://ice-creame.onrender.com/icecream/${id}`);
          dispatch({ type: DeleteIce, payload: id });
          console.log(res)
     } catch (error) {
          dispatch({ type: Error, payload: error })
          console.log(error);
     }

}

// User cart section 


export const cartice = (data) => async (dispatch) => {

     dispatch({ type: Loading });
     try {
          const res = await axios.post(`https://ice-creame.onrender.com/cart`, data);
          dispatch({ type: CartIce, payload: res.data });
          console.log(res.data)
     } catch (error) {
          dispatch({ type: Error, payload: error })
          console.log(error);
     }

}

export const cartfetch = () => async (dispatch) => {

     dispatch({ type: Loading });
     try {
          const res = await axios.get(`https://ice-creame.onrender.com/cart`);
          dispatch({ type: Cartfetch, payload: res.data });
          console.log(res.data)
     } catch (error) {
          dispatch({ type: Error, payload: error })
          console.log(error);
     }

}

export const cartdelete = (id) => async (dispatch) => {

     dispatch({ type: Loading });
     try {
          const res = await axios.delete(`https://ice-creame.onrender.com/cart/${id}`);
          dispatch({ type: CartDelete, payload: id });
          console.log(res.data)
     } catch (error) {
          dispatch({ type: Error, payload: error })
          console.log(error);
     }

}