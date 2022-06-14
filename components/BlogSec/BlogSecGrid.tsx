import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styles from './BlogSecGrid.module.css';

import SmallBot from '../SmallBot/SmallBot';
import {LandscapeCard, PortraitCard} from '../BlogCards/BlogCards';

function BlogSecGrid({blogDescription, post1, post2, post3 }){
    
return(

<div className={`${styles.blogSecContainer}`}>

  
  <div className={styles.gridContainer}>

        <div className={`${styles.descriptionContainer}`}>
            <h2 className={`size-70`}>Blog</h2>
            <p className={`size-21`}>{blogDescription}</p>
            <SmallBot text="Read Now" colorClass="orangeNormalBot" link={'../../blog/blog/'}/>
        </div> 



        <div className={`${styles.postA}`}>
            <LandscapeCard props={post1}/>
        </div>



        <div className={`${styles.postB}`}>
            <PortraitCard props={post2}/>
        </div>


        <div className={`${styles.postC}`}>
             <PortraitCard props={post3}/>
        </div>



  </div>


</div>

)

}

export default BlogSecGrid