import React, {useState} from 'react';
import Link from 'next/link';
import { sanityClient } from '../../lib/sanity';

import styles from './PostNav.module.css';


const sanityQuery = `{
    "posts": *[_type in ["post"]]| order(publishedAt desc){
    title,
    slug,
    author,
    mainImage,
    publishedAt,
 
  }
}`;


export default function PostsNav({ data }){
    console.log(data);
    

    /* function findNextPost(currentSlug){
        let nextSlug = "";
        let lastSlug = "";

        for (let i = 0; i < data.length; i++) {


            if(data[i].slug.current == currentSlug){

                switch(i) {
                    case 0:

                        if(data.lenght == 1){
                            nextSlug = data[0].slug.current;
                            lastSlug = data[0].slug.current;
                        } else {
                             = data[1].slug.current;
                            lastSlug = data[0].slug.current;
                        }
                      break;

                    case > 0:

                        if(data.lenght == 2){
                            nextSlug = data[1].slug.current;
                            lastSlug = data[0].slug.current;
                        } else {
                            nextSlug = data[i+1].slug.current;
                            lastSlug = data[i-1].slug.current;
                        }
                        
                      break;

                    case data.lenght:
                        nextSlug = data[i-1].slug.current;
                        lastSlug = data[i].slug.current;
                        
                      // code block
                      break;
                  }

            }

            return {lastSlug, nextSlug}


          }

    } */

    return(

        <div>

        </div>


    )
}

export async function getStaticProps(){

    const data = await sanityClient.fetch(sanityQuery);
  
    return {props: {data}};
  }