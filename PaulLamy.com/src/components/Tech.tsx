import './Tech.css'

interface TechProps {
    title: string;
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
                    {items.map(item => {
                        return <>
                            <div className="tech-grid-item">
                                <img src={item.imagePath}></img>
                                <h1>{item.description}</h1>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

export default Tech;