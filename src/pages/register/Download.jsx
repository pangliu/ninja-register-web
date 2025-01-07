
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from '../register/Download.module.css'

function Download() {
    const url = 'https://github.com/pangliu/apk-download/raw/refs/heads/main/app-dev-debug.apk'; // 這是你想顯示的 QR Code 資料
    return (
        <div className={styles.pageContainer}>
            <div className={styles.imgNinja}></div>
            <div className={styles.qrcodeContainer}>
                <a href={url} style={{ display: "inline-block" }}>
                    <QRCodeSVG
                        className={styles.qrcodeSvg}
                        value={url}
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                    />
                </a>
            </div>
            <div className={styles.warrningContainer}>
                <div className={styles.warrningTitle}>
                    <div className={styles.imgIcon}></div>
                    <div className={styles.textTitle}>Attention</div>
                </div>
                <p>
                    <span className={styles.textWhite}>
                        Congrats on passing the review!
                    </span>
                    <span className={styles.textRed}>
                        {' '}
                        Scan the QR Code on the webpage to download the APK.
                    </span>
                </p>
                <p>
                    <span className={styles.textWhite}>Note: The link expires</span>
                    <span className={styles.textRed}> in 15 minutes,</span>
                    <span className={styles.textWhite}>
                        {' '}
                        so download it promptly.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Download;
