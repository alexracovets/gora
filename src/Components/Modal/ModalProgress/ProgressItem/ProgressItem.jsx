import { useEffect, useRef, useState } from 'react';
import { lazy, Suspense } from "react";
import PropTypes from 'prop-types';
import Slider from "react-slick";

import SliderArrow from "../../../UI/SliderArrow/SliderArrow";

import s from '../ModalProgress.module.scss';
import Loader from '../../../Loader/Loader';
import VideoPlayer from './VideoPlayer/VideoPlayer';
export default function ProgressItem({ content, index, activeSlideIndex, countSlides }) {
    const sliderTopRef = useRef(null);
    const sliderBottomRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const settingsTop = {
        ref: sliderTopRef,
        className: `default`,
        dots: false,
        speed: 500,
        arrows: false,
        infinite: true,
        beforeChange: (current, next) => setActiveSlide(next)
    };

    const settingsBottom = {
        ref: sliderBottomRef,
        className: `${s.bottomSlider} default`,
        dots: false,
        centerMode: false,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true,
        beforeChange: (current, next) => { setActiveSlide(next) },
        nextArrow: <SliderArrow isPrev={false} isProgress />,
        prevArrow: <SliderArrow isPrev={true} isProgress />
    };

    useEffect(() => {
        if (sliderTopRef.current && sliderBottomRef.current) {
            const topCurrentIndex = sliderTopRef.current.innerSlider.state.currentSlide;
            const bottomCurrentIndex = sliderBottomRef.current.innerSlider.state.currentSlide;
            const slidesCount = Object.values(content.sources).length;

            // Перевірка, чи топ-слайдер потребує оновлення
            if (topCurrentIndex !== activeSlide) {
                const diffTop = Math.abs(topCurrentIndex - activeSlide);

                // Якщо різниця більше половини, значить потрібно перейти у зворотному напрямку
                if (diffTop > slidesCount / 2) {
                    if (topCurrentIndex > activeSlide) {
                        sliderTopRef.current.slickNext();
                    } else {
                        sliderTopRef.current.slickPrev();
                    }
                } else {
                    if (topCurrentIndex < activeSlide) {
                        sliderTopRef.current.slickNext();
                    } else {
                        sliderTopRef.current.slickPrev();
                    }
                }
            }

            // Перевірка, чи нижній слайдер потребує оновлення
            if (bottomCurrentIndex !== activeSlide) {
                const diffBottom = Math.abs(bottomCurrentIndex - activeSlide);

                if (diffBottom > slidesCount / 2) {
                    if (bottomCurrentIndex > activeSlide) {
                        sliderBottomRef.current.slickNext();
                    } else {
                        sliderBottomRef.current.slickPrev();
                    }
                } else {
                    if (bottomCurrentIndex < activeSlide) {
                        sliderBottomRef.current.slickNext();
                    } else {
                        sliderBottomRef.current.slickPrev();
                    }
                }
            }
        }
    }, [activeSlide, content]);

    return (
        <div className={s.item}>
            <div className={`${s.item_wrapper} ${(activeSlideIndex === index) || (activeSlideIndex + 1 > countSlides && index === 0) ? s.active : ''}`}>
                <div className={`${s.status} ${content.status.status === 'done' ? s.done : s.on_work}`}>
                    {content.status.value}
                </div>
                <Slider {...settingsTop}>
                    {Object.values(content.sources).map((item, idx) => {
                        return (
                            <div key={idx} className={s.progress_slide}>
                                {
                                    item.type === 'mp4'
                                        ?
                                        <VideoPlayer src={item.src} />
                                        :
                                        <div className={s.content_wrapper}>
                                            <img src={item.src} alt='photo_progress' />
                                        </div>
                                }
                            </div>
                        )
                    })}
                </Slider>
                <Slider {...settingsBottom}>
                    {Object.values(content.sources).map((item, idx) => {
                        return (
                            <div key={idx} className={s.progress_slide}>
                                <div className={`${s.content} ${activeSlide === idx ? s.active : ''}`}>
                                    {
                                        item.type === 'mp4'
                                            ?
                                            <VideoPlayer src={item.src} />
                                            :
                                            <div className={s.content_wrapper}>
                                                <img src={item.src} alt='photo_progress' />
                                            </div>
                                    }
                                </div>
                            </div>
                        )
                    })}

                </Slider>
                <div className={s.text_info}>
                    {content.info}
                </div>
            </div>
        </div >
    );
}

ProgressItem.propTypes = {
    content: PropTypes.object,
    index: PropTypes.number,
    activeSlideIndex: PropTypes.number,
    countSlides: PropTypes.number
};