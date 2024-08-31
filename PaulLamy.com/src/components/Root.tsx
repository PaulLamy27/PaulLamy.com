// root is what will be rendered on first load
//import './Root.css/'
//import Navbar from "./Navbar"

import Hero from "../hero/Hero";
import Intro from "../intro/Intro";

const Root = () => {
    return (
        <>
            <div className="container">
                <div className="component" id="hero">
                    <Hero />
                </div>
                <div className="component">
                    <Intro />
                </div>
            </div>
        </>
    )
}

export default Root;