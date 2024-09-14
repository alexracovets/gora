import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import Button from "../../UI/Button/Button";

import s from '../Patron.module.scss';
import BackgroundImage from "./BackgroundImage/BackgroundImage";
export default function Item({ item, idx }) {
    const { t } = useTranslation();

    return (
        <div className={s.item_wrapper}>
            <div className={s.item}>
                <div className={s.background_wrapper}>
                    <BackgroundImage idx={idx} />
                </div>
                <div className={s.content}>
                    <p className={s.title} dangerouslySetInnerHTML={{ __html: t(item.title) }} />
                    <div className={s.texts}>
                        {item.texts.map((text, idx) => {
                            return <p key={idx} dangerouslySetInnerHTML={{ __html: t(text) }} />
                        })}
                        {item.patrons && <div className={s.patrons}>
                            {item.patrons.map((item, idx) => {
                                return <div key={idx} className={s.patron}>
                                    <span className={s.name}>{t(item.name)}</span>
                                    <span className={s.price}>{t(item.price)}</span>
                                </div>
                            })}
                        </div>
                        }
                        {item.secondText && item.secondText.map((text, idx) => {
                            return <p key={idx} dangerouslySetInnerHTML={{ __html: t(text) }} />
                        })}
                    </div>
                    <div className={s.btn}>
                        <Button small>{t("btn.contribution")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object,
    idx: PropTypes.number
};