import { useTranslation } from "react-i18next";
import { useState } from "react";

import SliderModal from "../../SliderModal/SliderModal";
import ProgressItem from "./ProgressItem/ProgressItem";
import modalStore from '../../../store/modalStore';

import s from './ModalProgress.module.scss';
import Title from "../../UI/Title/Title";
export default function Modal() {
    const isModalProgress = modalStore((state) => state.isModalProgress);
    const setIsModalProgress = modalStore((state) => state.setIsModalProgress);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const { t } = useTranslation();

    const progressData = [
        {
            sources: {
                0: {
                    type: 'mp4',
                    src: "progress/0/0.mp4"
                },
                1: {
                    type: 'jpg',
                    src: "progress/0/1.jpg"
                },
                2: {
                    type: 'jpg',
                    src: "progress/0/2.jpg"
                },
                3: {
                    type: 'jpg',
                    src: "progress/0/3.jpg"
                }
            },
            status: {
                status: 'progress',
                value: 'в процесі'
            },
            info: [
                'Основна історична будова - Келія, що зараз відновлюється (близько 200 м2).'
            ]
        },
        {
            sources: {
                0: {
                    type: 'jpg',
                    src: "progress/1/0.jpg"
                },
                1: {
                    type: 'jpg',
                    src: "progress/1/1.jpg"
                },
                2: {
                    type: 'jpg',
                    src: "progress/1/0.jpg"
                },
            },
            status: {
                status: 'progress',
                value: 'в процесі'
            },
            info: [
                'Основна історична будова - Келія, що зараз відновлюється (близько 200 м2).'
            ]
        },
        {
            //copy
            sources: {
                0: {
                    type: 'mp4',
                    src: "progress/0/0.mp4"
                },
                1: {
                    type: 'jpg',
                    src: "progress/0/1.jpg"
                },
                2: {
                    type: 'jpg',
                    src: "progress/0/2.jpg"
                },
                3: {
                    type: 'jpg',
                    src: "progress/0/3.jpg"
                }
            },
            status: {
                status: 'progress',
                value: 'в процесі'
            },
            info: [
                'Основна історична будова - Келія, що зараз відновлюється (близько 200 м2).'
            ]
        },
        {
            //copy
            sources: {
                0: {
                    type: 'jpg',
                    src: "progress/1/0.jpg"
                },
                1: {
                    type: 'jpg',
                    src: "progress/1/1.jpg"
                },
                2: {
                    type: 'jpg',
                    src: "progress/1/0.jpg"
                },
            },
            status: {
                status: 'progress',
                value: 'в процесі'
            },
            info: [
                'Основна історична будова - Келія, що зараз відновлюється (близько 200 м2).'
            ]
        }
    ]

    return (
        <div className={`${s.modal_wrapper} ${isModalProgress ? s.active : ''}`} onClick={() => setIsModalProgress(false)}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                <div className={s.close_form} onClick={() => setIsModalProgress(false)}>
                    <div className={s.lines}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Title>{t("title.progress")}</Title>
                <div className={s.progres}>
                    <SliderModal styleName={`${s.slider_modal} fix_visible`} onSlideChange={(index) => setActiveSlideIndex(index)}>
                        {progressData.map((item, idx) => {
                            return <ProgressItem key={idx} content={item} index={idx} activeSlideIndex={activeSlideIndex + (window.innerWidth > 430 ? 1 : 0)} countSlides={progressData.length} />
                        })}
                    </SliderModal>
                </div>
            </div>
        </div>
    );
}