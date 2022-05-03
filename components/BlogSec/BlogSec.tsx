import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styles from './BlogSec.module.css';

import SmallBot from '../SmallBot/SmallBot';
import {LandscapeCard, PortraitCard} from '../BlogCards/BlogCards';

function BlogSec({blogDescription}){

    return(

      <div className={`${styles.blogSecContainer}`}>
          
            <div className={styles.description_position}>
                <div className={`${styles.descriptionContainer}`}>
                    <h2 className={`size-70`}>Blog</h2>
                    <p className={`size-21`}>{blogDescription}</p>
                    <SmallBot text="Read Now" colorClass="orangeNormalBot"/>
                </div> 
            </div>

            <div className={styles.card1_position}>
                <div className={`${styles.width_350}`}>
                    <PortraitCard/>
                </div>
            </div>

            <div className={styles.card2_position}>
                <div className={`${styles.width_620}`}>
                    <LandscapeCard/>
                </div>
            </div>

            <div className={styles.card3_position}>
                <div className={`${styles.width_350}`}>
                    <PortraitCard/>
                </div>
            </div>
        
      </div>

    )
}

export default BlogSec