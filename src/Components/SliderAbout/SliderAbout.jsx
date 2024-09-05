import PropTypes from 'prop-types';
import Slider from "react-slick";

import s from './SliderAbout.module.scss';
export default function SliderAbout() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const slides = [
        {
            image: './img/slider/about/slide_01.png',
            points: [
                {
                    name: "Місія",
                    image: "./img/slider/about/point/point_01.svg",
                    text: "Відбудова 1033-літньої Келії Св. Архангелів, осередку та приведення до ладу всієї території навколо неї (ландшафту). “ГОРА-2025” формується в період з 1.09 по 31.12.2024 року."
                },
                {
                    name: "Ціль",
                    image: "./img/slider/about/point/point_02.svg",
                    text: "Відбудова україномовної келії на Святій горі Афон. Зібрати 2 000 000 млн євро на розбудову українського осередку на горі Афон."
                }
            ]
        },
        {
            image: './img/slider/about/slide_01.png',
            points: [
                {
                    name: "Місія",
                    image: "./img/slider/about/point/point_01.svg",
                    text: "Відбудова 1033-літньої Келії Св. Архангелів, осередку та приведення до ладу всієї території навколо неї (ландшафту). “ГОРА-2025” формується в період з 1.09 по 31.12.2024 року."
                },
                {
                    name: "Ціль",
                    image: "./img/slider/about/point/point_02.svg",
                    text: "Відбудова україномовної келії на Святій горі Афон. Зібрати 2 000 000 млн євро на розбудову українського осередку на горі Афон."
                }
            ]
        },
        {
            image: './img/slider/about/slide_01.png',
            points: [
                {
                    name: "Місія",
                    image: "./img/slider/about/point/point_01.svg",
                    text: "Відбудова 1033-літньої Келії Св. Архангелів, осередку та приведення до ладу всієї території навколо неї (ландшафту). “ГОРА-2025” формується в період з 1.09 по 31.12.2024 року."
                },
                {
                    name: "Ціль",
                    image: "./img/slider/about/point/point_02.svg",
                    text: "Відбудова україномовної келії на Святій горі Афон. Зібрати 2 000 000 млн євро на розбудову українського осередку на горі Афон."
                }
            ]
        },
        {
            image: './img/slider/about/slide_01.png',
            points: [
                {
                    name: "Місія",
                    image: "./img/slider/about/point/point_01.svg",
                    text: "Відбудова 1033-літньої Келії Св. Архангелів, осередку та приведення до ладу всієї території навколо неї (ландшафту). “ГОРА-2025” формується в період з 1.09 по 31.12.2024 року."
                },
                {
                    name: "Ціль",
                    image: "./img/slider/about/point/point_02.svg",
                    text: "Відбудова україномовної келії на Святій горі Афон. Зібрати 2 000 000 млн євро на розбудову українського осередку на горі Афон."
                }
            ]
        }
    ]

    return (
        <Slider {...settings}>
            {slides.map((slide, idx) => {
                return (
                    <div key={idx} className={s.slide} inert="true" >
                        <img src={slide.image} alt={`slide-${idx}`} />
                        {slide.points.map((point, idx) => {
                            return (
                                <article key={idx} className={s.point}>
                                    <img src={point.image} />
                                    <p className={s.title}>{point.name}</p>
                                    <div className={s.text}>{point.text}</div>
                                </article>
                            )
                        })}
                    </div>
                )
            })}
        </Slider>
    )
}

function SampleNextArrow({ onClick }) {
    return (
        <img className={s.arrowNext}
            src="./img/slider/about/arrow/arrow.svg"
            onClick={onClick}
        />
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <img className={s.arrowPrev}
            src="./img/slider/about/arrow/arrow.svg"
            onClick={onClick}
        />
    )
}

SampleNextArrow.propTypes = { onClick: PropTypes.func };
SamplePrevArrow.propTypes = { onClick: PropTypes.func };