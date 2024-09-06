import './Navbar.css'

const redirect = (location: string) => {
    switch (location) {
        case "LinkedIn":
            window.location.href = 'https://www.linkedin.com/in/paullamy/';
            break;
        case "GitHub":
            window.location.href = 'https://github.com/PaulLamy27/';
            break;
        case "Resume":
            window.location.href = 'https://www.linkedin.com/in/paullamy/';
            break;
        case "Dev.to":
            window.location.href = 'https://www.linkedin.com/in/paullamy/';
            break;
        default:
            console.error("something happened with the switch!");
            break;
    }
}

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <strong id="paul-lamy">PaulLamy.com</strong>
                <div className='link-icons'>
                    <h5 onClick={() => redirect("LinkedIn")}>LinkedIn</h5>
                    <h5 onClick={() => redirect("GitHub")}>GitHub</h5>
                    <h5 onClick={() => redirect("Resume")}>Resume</h5>
                    <h5 onClick={() => redirect("Dev.to")}>Dev.to</h5>
                </div>
            </div>
        </>
    )
}

export default Navbar