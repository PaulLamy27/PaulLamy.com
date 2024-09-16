import { useState } from 'react';
import './Navbar.css'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const redirect = (location: string) => {
    switch (location) {
        case "LinkedIn":
            window.open('https://www.linkedin.com/in/paullamy/');
            break;
        case "GitHub":
            window.open('https://github.com/PaulLamy27/');
            break;
        case "Resume":
            window.open('https://docs.google.com/document/d/1TjgMDGQ8o3GnyDak06UYnoM8eRTWw81P/');
            break;
        case "Dev.to":
            window.open('https://dev.to/paullamy27');
            break;
        default:
            console.error("something happened with the switch!");
            break;
    }
}

const Navbar = () => {

    // hooks and functions relating to state go inside of this function
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        console.log("toggle");
        setIsVisible(!isVisible);
    }

    return (
        <>
            <div className="navbar">
                <strong id="paul-lamy">PaulLamy.com</strong>
                {
                    !isVisible && <>
                        <div className="menu-button" onClick={toggleMenu}>
                            <AiOutlineMenu />
                        </div>
                    </>
                }

                {isVisible && <>
                    <div className='link-icons'>
                        <h5 onClick={() => redirect("LinkedIn")}>LinkedIn</h5>
                        <h5 onClick={() => redirect("GitHub")}>GitHub</h5>
                        <h5 onClick={() => redirect("Resume")}>Resume</h5>
                        <h5 onClick={() => redirect("Dev.to")}>Dev.to</h5>
                        <AiOutlineClose onClick={toggleMenu}/>
                    </div>
                </>
                }
                {/* <div className='link-icons'>
                    <h5 onClick={() => redirect("LinkedIn")}>LinkedIn</h5>
                    <h5 onClick={() => redirect("GitHub")}>GitHub</h5>
                    <h5 onClick={() => redirect("Resume")}>Resume</h5>
                    <h5 onClick={() => redirect("Dev.to")}>Dev.to</h5>
                </div> */}
            </div>
        </>
    )
}

export default Navbar