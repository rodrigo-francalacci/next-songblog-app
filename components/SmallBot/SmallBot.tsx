import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styles from './SmallBot.module.css';


function SmallBot({text, colorClass}){
return(

<div className={styles.width_183_92}>
<div className={`${styles.sBotContainer} ${styles.height_42_22} ${colorClass}`}>

    <a 
    className={`size-21 ${styles.sBotLink}`} 
    href="https://www.w3schools.com" 
    target="_blank"
    >{text}
    </a>

</div>
</div>

)
}

export default SmallBot