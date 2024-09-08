import Image from "../components/Image";
import './Project.css'

interface ProjectProps {
    title: string;
    description: string;
    imagePath: string;
    imageWidth?: string;
    imageHeight?: string;
    gitHubLink?: string;
    techUsed?: ImageType[];
}

// even if the props are optional, still pass them in as normal without ?
const Project = ({ title, description, imagePath, imageWidth, imageHeight, techUsed }: ProjectProps) => {
    return (
        <>
            <div className="image-container">
                <Image src={imagePath} alt={title} width={imageWidth} height={imageHeight} />
            </div>
            <div className="desc-container">
                <h1>{title}</h1>
                <h2>{description}</h2>
                {
                    techUsed?.map((image, index) => {
                        return <>
                            <div className="project-tech-images">
                                <Image src={image.src} alt={image.alt} height="50px" width="50px" key={index}/>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}

export default Project
