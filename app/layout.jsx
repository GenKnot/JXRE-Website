'use client'

import {Provider} from "react-redux";
import {store} from "../store/store";
import ScrollToTop from "@/components/common/ScrollTop";
import "../public/assets/scss/index.scss";
import "../public/assets/scss/bass.scss"
import {Analytics} from "@vercel/analytics/react";

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"/>
            <link rel="icon" href="./favicon.ico"/>
        </head>
        <body>

        <Provider store={store}>
            {children}
            <Analytics/>
        </Provider>

        <ScrollToTop/>
        </body>
        </html>
    )
}
