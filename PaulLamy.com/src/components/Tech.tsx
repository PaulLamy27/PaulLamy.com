import './Tech.css'
// import { ReactSVG } from 'react-svg';
import '../assets/react.svg'
import Image from './Image';

// define props passed into the function.
interface TechProps {
    // ex: "Best at", "What have i been doing recently", etc.
    title: string;
    // each item represents a technology i know,
    // which has an image and the name of that technology
    items: Technology[]
}

export const Tech = ({ title, items }: TechProps) => {
    return (
        <>
            <div className="container">
                <strong>
                    {title}:
                </strong>
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