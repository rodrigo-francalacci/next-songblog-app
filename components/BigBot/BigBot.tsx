import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styles from './BigBot.module.css';


function BigBot({text, link}){
return(

<div className={styles.width_311_172}>
<div className={`${styles.sBotContainer} ${styles.height_72_40}`}>

    <a 
    className={`size-35 dm-sams ${styles.sBotLink}`} 
    href={link} 
    target="_blank"
    rel="noreferrer"
    >{text}
    </a>

</div>
</div>

)
}

export default BigBot