import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styles from './SmallBot.module.css';


function SmallBot({text, colorClass, link}){
return(


    <div className={`${styles.sBotContainer} ${colorClass}`}>

        <a 
        className={`size-21 dm-sams ${styles.sBotLink}`} 
        href={link}
        target="_blank"
        rel="noreferrer"
        >{text}
        </a>

    </div>

)
}

export default SmallBot