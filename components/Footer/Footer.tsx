import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';


function Footer({bkgColor, contactColor, email, phoneNumber}){
return(

<div className={`${styles.footerContainer} ${bkgColor}`}>

        <div className={`${styles.footerBar} ${styles.width_1292_360}`}></div>

        <div className={`${styles.footerInfo}`}>

            <div className={`${styles.footerContactInfo} ${styles.margin_R_180_0}`}>
                <h2 className={`size-42`}>Rodrigo Francalacci</h2>
                <p className={`size-21 ${contactColor}`}>{email}</p>
                <p className={`size-21 ${contactColor}`}>{phoneNumber}</p>
            </div>

            <div className={`${styles.footerPolicyInfo}`}>

                <div className={styles.margin_R_42_0}>
                    <p className={`size-21`}>© 2022 Rodrigo Francalacci</p>
                    <p className={`size-21`}>All rights reserved.</p>
                </div>

                <div>
                    <p className={`size-21`}>Privacy Policy</p>
                    <p className={`size-21`}>Cookie Policy</p>
                    <p className={`size-21`}>Terms of Use</p>
                </div>
            </div>
        </div>

</div>

)
}

export default Footer