import React, {useState} from 'react';
import {sanityClient} from "../../lib/sanity";
import imageUrlBuilder from '@sanity/image-url';
import { motion } from 'framer-motion';
import styles from './cardsWorks.module.css';
import SmallBot from '../SmallBot/SmallBot';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  return builder.image(source)
}

function CardsWorks({name, year, link, img}){

    return(

      <div className={`${styles.cwContainer} ${styles.margin_T_102_42}`}>

        <div className={styles.width_493_216}>
          <div className={`${styles.cwImgContainer}`}>
            <img src={urlFor(img).url()} alt="image content" className={`${styles.cwImage}`}></img>
          </div>
        </div>

        <div className={`${styles.cwContent} ${styles.margin_L_85_37}`}>

            <div className={`${styles.cwAlbumInfo}`}>
              <p className={`size-28 ${styles.cwAlbumName}`}>{name}</p>
              <p className={`size-21 ${styles.cwAlbumYear}`}>{' ('} {year} {')'}</p>
            </div>
      
            <SmallBot text="Listen" colorClass="orangeDarkBot" link={link}/>

        </div>

      </div>

    )
}

export default CardsWorks
            
            
            