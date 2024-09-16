import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";


import ContactsFormInput from "./ContactsFormInput/ContactsFormInput";
import modalStore from '../../../store/modalStore';
import Button from "../../UI/Button/Button";
import Title from '../../UI/Title/Title';

import s from './ModalPay.module.scss';
export default function ModalPay() {
    const { t } = useTranslation();
    const isPayModal = modalStore((state) => state.isPayModal);
    const setIsPayModal = modalStore((state) => state.setIsPayModal);

    const [userForm, setUserForm] = useState({
        full_name: {
            value: '',
            isValid: false
        },
        phone: {
            value: '',
            isValid: false
        },
        telegram: {
            value: '',
            isValid: false
        },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/send-mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: userForm.full_name.value,
                phone: userForm.phone.value,
                telegram: userForm.telegram.value,
                formData: "Contact Form"
            }),
        });

        if (response.ok) {
            console.log('OK');
        }
    };

    return (
        <AnimatePresence>
            {isPayModal ?
                <motion.div className={s.modal_wrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsPayModal(false)}
                >
                    <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={s.close_form} onClick={() => setIsPayModal(false)}>
                            <div className={s.lines}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={s.modal_container}>
                            <Title modal>{t("title.qr")}</Title>
                            {/* <div className={s.qr}></div>  */}
                            <div className={s.description}>
                                {t('modal.modal_pay.description')}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <ContactsFormInput
                                    name={`full_name`}
                                    placeholder={t('modal.modal_pay.name')}
                                    type={`text`}
                                    setUserForm={setUserForm}
                                    userForm={userForm}
                                />
                                <ContactsFormInput
                                    name={`phone`}
                                    placeholder={t('modal.modal_pay.phone')}
                                    type={`phone`}
                                    setUserForm={setUserForm}
                                    userForm={userForm}
                                />
                                <ContactsFormInput
                                    name={`telegram`}
                                    placeholder={t('modal.modal_pay.telegram')}
                                    type={`telegram`}
                                    setUserForm={setUserForm}
                                    userForm={userForm}
                                />
                                <Button submit >{t("btn.send")}</Button>
                            </form>
                        </div>
                    </div>
                </motion.div> :
                null
            }
        </AnimatePresence>
    );
}