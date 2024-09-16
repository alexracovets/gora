import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import sliderAboutData from "../../data/sliderAboutData";
import SliderArrow from "../UI/SliderArrow/SliderArrow";

import s from './SliderAbout.module.scss';

export default function SliderAbout() {
    const { t } = useTranslation();

    const settings = {
        className: s.slider,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        arrows: false,
        nextArrow: <SliderArrow isPrev={false} />,
        prevArrow: <SliderArrow isPrev={true} />
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