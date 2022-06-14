import React, {useState} from 'react';
import Link from 'next/link';
import {sanityClient} from "../../lib/sanity";
import imageUrlBuilder from '@sanity/image-url';
import { motion } from 'framer-motion';
import styles from './BlogCards.module.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  return builder.image(source)
}


export function LandscapeCard({props}){

    return(

      <div className={`${styles.cContainer}`}>
        <div className={`${styles.lcImgContainer}`}>
        <img src={urlFor(props.mainImage).url()} alt={props.title} className={`${styles.cImage}`}></img>
        </div>
        
        <Link href={`/blog/posts/${props.slug.current}`}>
        <a target="_blank" rel="noreferrer">

        <div className={`size-21 ${styles.cText}`}>
            <p>{props.title}</p>
        </div>

        </a>
        </Link>



      </div>

    )
}

export function PortraitCard({props}){

    return(

    <div className={`${styles.cContainer}`}>

        <div className={`${styles.pcImgContainer}`}>
            <img src={urlFor(props.mainImage).width(350).height(350).url()} alt={props.title} className={`${styles.cImage}`}></img>
        </div>
        
        <Link href={`/blog/posts/${props.slug.current}`}>
          <a target="_blank" rel="noreferrer">
          
          <div className={`size-21a ${styles.cText}`}>
              <p>{props.title}</p>
          </div>
          
          </a>
        </Link>

    </div>

    )
}

