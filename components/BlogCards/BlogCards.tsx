import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styles from './BlogCards.module.css';


export function LandscapeCard(){

    return(

      <div className={`${styles.cContainer}`}>
        <div className={`${styles.lcImgContainer}`}>
            <img src="/img/blog-post-2.png" alt="image content" className={`${styles.cImage}`}></img>
        </div>
        
        <div className={`size-21 ${styles.cText}`}>
            <p>Search new ways for change the lifes that we love</p>
        </div>

      </div>

    )
}

export function PortraitCard(){

    return(

    <div className={`${styles.cContainer}`}>

        <div className={`${styles.pcImgContainer}`}>
            <img src="/img/blog-post-1.png" alt="image content" className={`${styles.cImage}`}></img>
        </div>
        
        <div className={`size-21 ${styles.cText}`}>
            <p>About England and Brazil</p>
        </div>

    </div>

    )
}

