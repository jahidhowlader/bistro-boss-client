import { Parallax } from 'react-parallax';

const Cover = ({ bgImg, imageAlt, height, title, details }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bgImg}
            bgImageAlt={imageAlt}
        // strength={-200}
        >
            <div className={`hero h-[${height}]`} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-width bg-black bg-opacity-60 p-32">
                        <h1 className="mb-5 text-5xl font-bold logo-font">{title}</h1>
                        <p className="mb-5">{details}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;