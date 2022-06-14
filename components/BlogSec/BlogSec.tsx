import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styles from './BlogSec.module.css';

import SmallBot from '../SmallBot/SmallBot';
import {LandscapeCard, PortraitCard} from '../BlogCards/BlogCards';

function BlogSec({blogDescription, post1, post2, post3 }){

    return(

      <div className={`${styles.blogSecContainer}`}>
          
            <div className={styles.description_position}>
                <div className={`${styles.descriptionContainer}`}>
                    <h2 className={`size-70`}>Blog</h2>
                    <p className={`size-21`}>{blogDescription}</p>
                    <SmallBot text="Read Now" link={'../../blog/blog/'} colorClass="orangeNormalBot"/>
                </div> 
            </div>

            <div className={styles.card1_position}>
                <div className={`${styles.width_350}`}>
                    <PortraitCard props={post2}/>
                </div>
            </div>

            <div className={styles.card2_position}>
                <div className={`${styles.width_620}`}>
                    <LandscapeCard props={post1}/>
                </div>
            </div>

            <div className={styles.card3_position}>
                <div className={`${styles.width_350}`}>
                    <PortraitCard props={post3}/>
                </div>
            </div>
        
      </div>

    )
}

export default BlogSec