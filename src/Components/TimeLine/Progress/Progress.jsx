import { useTranslation } from "react-i18next";

import Button from '../../UI/Button/Button';
import modalStore from '../../../store/modalStore';

import s from './Progress.module.scss';
export default function Progress() {
    const { t } = useTranslation();
    const setIsModalProgress = modalStore((state) => state.setIsModalProgress);

    const currentValue = 27.384;
    const totalValue = 300.000;
    const currentProcent = totalValue / currentValue;

    return (
        <div className={s.progress_wrapper}>
            <div className={s.line_wrapper}>
                <div className={s.back_line}></div>
                <div className={s.front_line} style={{ width: `${currentProcent}%` }}></div>
            </div>
            <div className={s.calculate}>
                Зібрано <span>{currentValue}</span> з <span className={s.total}>{totalValue}</span>
            </div>
            <div className={s.btn}>
                <Button progress click={() => { setIsModalProgress(true) }}>{t("btn.progress")}</Button>
            </div>
        </div>
    )
} 