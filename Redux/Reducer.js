
import { Reqlogin, Loading, Error, AddIce, CartIce, CartDelete, FetchIce, DeleteIce, EditIce, Cartfetch } from "./ActionType";
const initd = {
     data: [],
     loading: false,
     user: [],
     error: null,
     cart: [],
}

export const Reducer = (state = initd, action) => {
     switch (action.type) {
          case Loading: {
               return {
                    ...state,
                    loading: true,
                    error: null
               }
          }
          case Reqlogin: {
               return {
                    ...state,
                    user: action.payload,
                    loading: false,
                    error: null
               }
          }
          case FetchIce: {
               return {
                    ...state,
                    data: action.payload,
                    loading: false,
                    error: null
               }
          }
          case AddIce: {
               return {
                    ...state,
                    data: [...state.data, action.payload],
                    loading: false,
                    error: null
               }
          }
          case CartIce: {
               return {
                    ...state,
                    cart: [...state.cart, action.payload],
                    loading: false,
                    error: null
               }
          }
          case Cartfetch: {
               return {
                    ...state,
                    cart: action.payload,
                    loading: false,
                    error: null
               }
          }
          case CartDelete: {
               return {
                    ...state,
                    cart: state.cart.filter((el) => el.id !== action.payload),
               };
          }
          case DeleteIce: {
               return {
                    ...state,
                    data: state.data.filter((el) => el.id !== action.payload),
               };
          }
          case EditIce: {
               const updatedData = state.data.map((item) =>
                    item.id === action.payload.id ? action.payload : item
               );
               return {
                    ...state,
                    data: updatedData,
               };
          }

          case Error: {
               return {
                    ...state,
                    user: null,
                    loading: false,
                    error: "envalid crediatials"
               }
          }

          default:
               return state;
     }
};