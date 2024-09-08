import Image from "../components/Image";
import './Project.css'

interface ProjectProps {
    title: string;
    description: string;
    imagePath: string;
    imageWidth?: string;
    imageHeight?: string;
    gitHubLink?: string;
    // techUsed: 
}

const Project = ({ title, description, imagePath, imageWidth, imageHeight }: ProjectProps) => {
    return (
        <>
            <div className="image-container">
                <Image src={imagePath} alt={title} width={imageWidth} height={imageHeight} />
            </div>
            <div className="desc-container">
                <h1>{title}</h1>
                <h2>{description}</h2>
                {/* <h2>https://github.com/PaulLamy27/CapstoneFlashcardApplication</h2> */}
            </div>
        </>
    )
}

export default Project