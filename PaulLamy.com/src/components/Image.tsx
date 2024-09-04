import './Image.css'

interface ImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
}

const Image = ({src, alt, width='10rem', height='10rem'}: ImageProps) => (
    <img className='img' src={src} alt={alt} style={{width, height}}/>
);

export default Image;