import Image from "../components/Image";
import './Project.css'

interface ProjectProps {
    title: string;
    description: string;
    imagePath: string;
    // techUsed: 
}

const Project = ({ title, description, imagePath }: ProjectProps) => {
    return (
        <>
        <div></div>
            <div>
                <Image src={imagePath} alt={title} />
            </div>
            <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </div>
        </>
    )
}

export default Project