import './Tech.css'
// import { ReactSVG } from 'react-svg';
import Image from './Image';

// define props passed into the function.
interface TechProps {
    // ex: "Best at", "What have i been doing recently", etc.
    title: string;
    // each item represents a technology i know,
    // which has an image and the name of that technology
    items: Technology[]
}

// I am willing to quickly learn and use any tool for the job, but here are the ones I have experience with:

export const Tech = ({ title, items }: TechProps) => {
    return (
        <>
            <div className="container">
                <h1 className='title'>
                    {title}:
                </h1>
                <div className='grid'>
                    {items.map((item, index) => {
                        return <>
                        <div className="tech-grid-container">
                            <div className="tech-grid-item">
                                <Image src={item.imagePath} alt={item.description} width='5rem' height='5rem' key={index} />
                                <h3>{item.description}</h3>
                            </div>
                        </div>
                            {/* <div className="tech-grid-item">
                                <Image src={item.imagePath} alt={item.description} width='5rem' height='5rem' key={index} />
                                <h3>{item.description}</h3>
                            </div> */}
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

export default Tech;
