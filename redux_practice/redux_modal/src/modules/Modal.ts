/*
	Types
*/
const SHOW_MODAL = "modal/SHOW_MODAL";
const DROP_MODAL = "modal/DROP_MODAL";
/*
	Actions
*/
export const showModal = (element: any) => ({ type: SHOW_MODAL, payload: element });
export const dropModal = () => ({ type: DROP_MODAL });
/*
	InitialState
*/
const initialState = new Map({
    show: false,
    element: null, // 모달 Component
});
/*
	Reducer
*/
export default function snackbar(state = initialState, action: { type: any; payload: any; }) {
  switch (action.type) {
    case SHOW_MODAL:
      document.querySelector("body").style.overflow = "hidden";
      return state.set("show", true).set("element", action.payload);
    case DROP_MODAL:
      document.querySelector("body").removeAttribute("style");
      return state.set("show", false);
    default:
      return state;
  }
}
