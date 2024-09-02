interface ImageProps {
    src: string;
    alt: string;
}

const Image = (props: ImageProps) => (
    <img src={props.src} alt={props.alt} />
);

export default Image;