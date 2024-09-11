import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import Slider from "react-slick";

import sliderAboutData from "../../data/sliderAboutData";

import s from './SliderAbout.module.scss';
export default function SliderAbout() {
    const { t } = useTranslation();

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

    return (
        <Slider {...settings}>
            {sliderAboutData.map((slide, idx) => {
                return (
                    <div key={idx} className={s.slide} inert="true" >
                        <img src={`./img/slider/about/${slide.image}`} alt={`slide-${idx}`} />
                        {slide.points.map((point, idx) => {
                            return (
                                <article key={idx} className={s.point}>
                                    <img src={`/img/slider/about/point/${point.image}`} />
                                    <p className={s.title}>{t(point.name)}</p>
                                    <div className={s.text}>{t(point.text)}</div>
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