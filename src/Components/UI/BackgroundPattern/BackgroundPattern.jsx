import pattern from "/img/pattern.svg";


import s from './BackgroundPattern.module.scss';
export default function BackgroundPattern() {

    return (
        <div className={s.pattern} style={{ backgroundImage: `url(${pattern})` }}></div>
    )
}