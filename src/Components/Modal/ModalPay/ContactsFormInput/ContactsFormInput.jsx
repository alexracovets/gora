import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import invalid from '/img/form/invalid.svg';

import s from '../ModalPay.module.scss';
export default function ContactsFormInput({ name, placeholder, type, setUserForm, userForm }) {
    const [isValid, setIsValid] = useState(true);
    const [valueData, setValueData] = useState(userForm[name].value);

    const validateInput = (value) => {
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        } else if (name === 'full_name') {
            return value.length > 3;
        } else if (name === "phone") {
            const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            return phoneRegex.test(value);
        }
        return true;
    }

    const changeHandler = (e) => {
        let value = e.target.value;
        if (type === 'text') {
            value = value.replace(/^\s+/, '').replace(/\s{2,}/g, ' ');
        } 
        setValueData(value);
        setIsValid(validateInput(value));
    }

    useEffect(() => {
        setUserForm(prevForm => ({
            ...prevForm,
            [name]: {
                value: valueData,
                isValid: isValid
            }
        }));
    }, [valueData, name, setUserForm, isValid]);


    return (
        <div className={s.input__wrapper}>
            <div className={!isValid ? s.invalid + ' ' + s.active : s.invalid} style={{ backgroundImage: `url(${invalid})` }}></div>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={valueData}
                onChange={(e) => changeHandler(e)}
                className={!isValid ? s.invalid_input : ''}
            />
        </div>
    );
}

ContactsFormInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    setUserForm: PropTypes.func,
    userForm: PropTypes.object
};