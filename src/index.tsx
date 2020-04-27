import * as React from "react";
import * as ReactDOM from "react-dom";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import * as serviceWorker from "./assets/serviceWorker";
import "./assets/styles/css/tailwind.css";
import "react-netlify-identity-widget/styles.css";
import Hero from "./components/Hero";

ReactDOM.render(
    <React.StrictMode>
        <IdentityContextProvider url="https://nightclube.netlify.com">
            <Hero />
        </IdentityContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
