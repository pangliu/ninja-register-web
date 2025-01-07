import React, { useState } from 'react';
import styles from './Register.module.css';
import ApiService from '../../services/apiService';
import ApiUrls from '../../services/apiUrls';
import { useNavigate } from 'react-router-dom';
import { OrbitProgress } from 'react-loading-indicators';

const apiService = new ApiService(ApiUrls.BASE_URL);

function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <OrbitProgress
                variant="spokes"
                color="#dcd6d6"
                size="medium"
                text=""
                textColor=""
            />
        </div>
    );
}

function FormInput({ type, name, value, handleChange, required }) {
    return (
        <div>
            <input
                className={styles.forminputStyle}
                type={type}
                name={name}
                value={value}
                autoComplete="new-password"
                onChange={handleChange}
                required={required}
            />
        </div>
    );
}

function Register() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        account: '',
        mail: '',
        promotion_code: '',
        password: '',
        confirm_password: '',
        phone: '',
        first_name: '',
        second_name: ''
    });
    // 檢查必填欄位是否完成
    const isFormValid =
        formData.account.trim() !== '' &&
        formData.password.trim() !== '' &&
        formData.confirm_password.trim() !== '' &&
        formData.mail.trim() !== '' &&
        formData.phone.trim() !== '' &&
        formData.promotion_code.trim() !== '';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // 過濾空白欄位
    const filterEmptyFields = (data) => {
        return Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value.trim() !== '')
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // 先判斷 confirm password 是否與 password 相同
        if (formData.confirm_password != formData.password) {
            alert('The passwords do not match, please double-check.');
            return;
        }
        navigate('/register_bank', { state: { registerData: formData } });
    };
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.bgTop}></div>
            <div className={styles.icTopLeft}></div>
            <div className={styles.pageTitle}>Register</div>
            <div className={styles.registerContainer}>
                <div>
                    <span className={styles.contentTextBlack}>
                        Please provide complete and accurate details for
                    </span>
                    <span className={styles.contentTextRed}> manual review.</span>
                </div>
                <div>
                    <span className={styles.contentTextRed}>
                        Incomplete or incorrect
                    </span>
                    <span className={styles.contentTextBlack}>
                        {' '}
                        info may lead to
                    </span>
                    <span className={styles.contentTextRed}>
                        {' '}
                        registration rejection.
                    </span>
                </div>
                <img className={styles.divider}></img>
                <form className={styles.formStyle}
                    onSubmit={handleSubmit}
                >
                    <label className={styles.labelInput}>*Account</label>
                    <FormInput
                        type="text"
                        name="account"
                        value={formData.account}
                        handleChange={handleChange}
                        required
                    />
                    <label className={styles.labelInput}>*Password</label>
                    <FormInput
                        type="password"
                        name="password"
                        value={formData.password}
                        handleChange={handleChange}
                        required
                    />
                    <label className={styles.labelInput}>*Confirm Password</label>
                    <FormInput
                        type="password"
                        name="confirm_password"
                        value={formData.confirm_password}
                        handleChange={handleChange}
                        required
                    />
                    <label className={styles.labelInput}>First Name</label>
                    <FormInput
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        handleChange={handleChange}
                    />
                    <label className={styles.labelInput}>Last Name</label>
                    <FormInput
                        type="text"
                        name="second_name"
                        value={formData.second_name}
                        handleChange={handleChange}
                    />
                    <label className={styles.labelInput}>*Email</label>
                    <FormInput
                        type="email"
                        name="mail"
                        value={formData.mail}
                        handleChange={handleChange}
                        required
                    />
                    <label className={styles.labelInput}>*Phone</label>
                    <FormInput
                        type="number"
                        name="phone"
                        value={formData.phone}
                        handleChange={handleChange}
                        required
                    />
                    <label className={styles.labelInput}>*Promotion Code</label>
                    <FormInput
                        type="text"
                        name="promotion_code"
                        value={formData.promotion_code}
                        handleChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={!isFormValid}
                        style={{
                            backgroundColor: isFormValid ? '#DF4A3B' : '#BBBBBB'
                        }}
                    >
                        {isLoading ? 'Registering...' : 'Next'}
                    </button>
                </form>
                {isLoading && <Loader />}
            </div>
        </div>
    );
}

export default Register;

