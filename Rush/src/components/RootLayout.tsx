import Navigation from "./Navigation.tsx";
import {Outlet} from "react-router";
import Background from "./Background.tsx";

function RootLayout(){
    return(
        <>
            <Background/>
            <Navigation/>
            <Outlet></Outlet>
        </>
    )
}

export default RootLayout;
