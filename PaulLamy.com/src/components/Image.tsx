import './Image.css'

interface ImageProps {
    src: string;
    alt: string;
}

const Image = (props: ImageProps) => (
    <img className='img' src={props.src} alt={props.alt} />
);

export default Image;