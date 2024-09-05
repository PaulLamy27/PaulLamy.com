import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <strong id="paul-lamy">PaulLamy.com</strong>
                <div className='link-icons'>
                    <h5>LinkedIn</h5>
                    <h5>GitHub</h5>
                    <h5>Resume</h5>
                    <h5>Dev.to</h5>
                </div>
            </div>
        </>
    )
}

export default Navbar