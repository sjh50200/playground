import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactModal from "react-modal";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

ReactModal.setAppElement("#root");
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
