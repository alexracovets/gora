import { useTranslation } from "react-i18next";

import Title from '../../UI/Title/Title';

import s from './ModalPay.module.scss';
import { useState } from "react";
import ContactsFormInput from "./ContactsFormInput/ContactsFormInput";
import Button from "../../UI/Button/Button";
export default function ModalPay() {
    const { t } = useTranslation();

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
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <Title>{t("title.qr")}</Title>
                {/* <div className={s.qr}></div>
                <div className={s.description}>
                    Або ми звʼяжемося з Вами особисто та надамо пряме посилання з усіма необхідними реквізитами для переказу напряму на рахунки Афону
                </div> */}
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
    );
}