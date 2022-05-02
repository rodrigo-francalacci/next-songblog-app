import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styles from './cardsWorks.module.css';
import SmallBot from '../SmallBot/SmallBot';

function CardsWorks(){

    return(

      <div className={`${styles.cwContainer} ${styles.margin_T_102_42}`}>

        <div className={styles.width_493_216}>
          <div className={`${styles.cwImgContainer}`}>
            <img src="/img/output-onlinepngtools.png" alt="image content" className={`${styles.cwImage}`}></img>
          </div>
        </div>

        <div className={`${styles.cwContent} ${styles.margin_L_85_37}`}>

            <div className={`${styles.cwAlbumInfo}`}>
              <p className={`size-28 ${styles.cwAlbumName}`}>It's Amazing III</p>
              <p className={`size-21 ${styles.cwAlbumYear}`}>{' ('}2019{')'}</p>
            </div>
      
            <SmallBot text="Listen" colorClass="orangeDarkBot"/>

        </div>

      </div>

    )
}

export default CardsWorks
            
            
            