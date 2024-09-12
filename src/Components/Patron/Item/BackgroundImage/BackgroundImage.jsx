import PropTypes from 'prop-types';

import patron_1_01 from '/img/patron/1/1.png';
import patron_1_02 from '/img/patron/1/2.png';
import patron_1_03 from '/img/patron/1/3.png';
import patron_1_04 from '/img/patron/1/4.png';

import patron_2_01 from '/img/patron/2/1.png';
import patron_2_02 from '/img/patron/2/2.png';
import patron_2_03 from '/img/patron/2/3.png';

import patron_3_01 from '/img/patron/3/1.png';

import patron_4_01 from '/img/patron/4/1.png';
import patron_4_02 from '/img/patron/4/2.png';

import s from './BackgroundImage.module.scss';
export default function BackgroundImage({ idx }) {

    switch (idx) {
        case 0:
            return (
                <div className={`${s.background} ${s.background_01}`}>
                    <img src={patron_1_01} alt="patron_1_01" className={s.bg_image} />
                    <img src={patron_1_02} alt="patron_1_02" className={s.bg_image} />
                    <img src={patron_1_03} alt="patron_1_03" className={s.bg_image} />
                    <img src={patron_1_04} alt="patron_1_04" className={s.bg_image} />
                </div>
            )
        case 1:
            return (
                <div className={`${s.background} ${s.background_02}`}>
                    <img src={patron_2_01} alt="patron_2_01" className={s.bg_image} />
                    <img src={patron_2_02} alt="patron_2_01" className={s.bg_image} />
                    <img src={patron_2_03} alt="patron_2_01" className={s.bg_image} />
                </div>
            )
        case 2:
            return (
                <div className={`${s.background} ${s.background_03}`}>
                    <img src={patron_3_01} alt="patron_3_01" className={s.bg_image} />
                </div>
            )
        case 3:
            return (
                <div className={`${s.background} ${s.background_04}`}>
                    <div className={s.key_wrapper}>
                        <img src={patron_4_01} alt="patron_4_01" className={s.bg_image} />
                        <img src={patron_4_02} alt="patron_4_02" className={s.bg_image} />
                    </div>
                </div>
            )
        default:
            null
            break;
    }
}

BackgroundImage.propTypes = {
    item: PropTypes.object,
    idx: PropTypes.number
};