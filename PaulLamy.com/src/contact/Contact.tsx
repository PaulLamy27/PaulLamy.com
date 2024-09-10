import './Contact.css'
import Image from '../components/Image';

interface ContactSite {
    src: string;
    alt: string;
    location: string;
}

const contactInfos = [
    // resume?
    // Mailto??
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", alt: "LinkedIn", location: "https://www.linkedin.com/in/paullamy/" },
    { src: "https://cdn-icons-png.flaticon.com/512/25/25231.png", alt: "GitHub", location: "https://github.com/PaulLamy27/" },
    // { src: "", location: "" },
    { src: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png", alt: "Dev.to", location: "https://dev.to/paullamy27" },
] as ContactSite[];

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

const Contact = () => {
    return (
        <>
            <div className="container">
                <h1 className="contact-text">I would love to connect with you!</h1>
                <div className="contact-info-container">
                    {
                        contactInfos.map((contactInfo, index) => {
                            return <>
                                <div className="contact-info-item" onClick={() => redirect(contactInfo.alt)} >
                                    <Image src={contactInfo.src} alt={contactInfo.alt} key={index} />
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </>
        // linkedin
        // github
        // dev.to when i make it
    )
}

export default Contact