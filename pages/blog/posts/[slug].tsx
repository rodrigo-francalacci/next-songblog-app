import {sanityClient} from "../../../lib/sanity";
import imageUrlBuilder from '@sanity/image-url';
import {PortableText} from '@portabletext/react';
import moment from 'moment';
import { motion } from "framer-motion";

import {useState, useEffect} from "react";
import Link from 'next/link';
import Head from "next/head";

import styles from '../../../styles/Post.module.css';

import { MdArrowLeft, MdArrowRight } from "react-icons/md"; 
import Footer from '../../../components/Footer/Footer';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  return builder.image(source)
}

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    location,
    overview,
    author,
    categories[]->{title},
    mainImage,
    publishedAt,
    body,
}`

const contactQuery =`*[_type in ["landpage"]]| order(publishedAt desc){
    email,
    phoneNumber
}`




export default function Post({ currentPost }) {


    
    const [isOn, setIsOn] = useState(false);
    const [colorTheme, setColorTheme] = useState(["bkgBeige", "blackFont"]);


    function Switch({ isOn, ...props }) {
        const className = `switch ${isOn ? "on" : "off"}`;

        return (
          <motion.div animate className={className} {...props}>
            <motion.div animate />
          </motion.div>
        );
      }

      function handleSwitch(){
        setIsOn(!isOn);

        switch (isOn) {
            case false:
                setColorTheme(["bkgBlack", "beigeFont"])        
                break;

            case true:
                setColorTheme(["bkgBeige", "blackFont"])
                break;
        
            default:
                setColorTheme(["bkgBeige", "blackFont"])
                break;
        }
      }

    


return(

<div>

    {currentPost.title}

</div>
)
}

export async function getStaticPaths() {
 
    const paths = await sanityClient.fetch(
        `*[_type == "post" && defined(slug.current)]{

            "params": {
                "slug": slug.current
            }
        }`

    )

    return {
        paths,
        fallback: true
    }
    
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const currentPost = await sanityClient.fetch(postQuery, { slug });
    const contacts = await sanityClient.fetch(contactQuery);


    const posts = await sanityClient.fetch(`*[_type in ["post"]]| order(publishedAt desc){
        title,
        slug,
        location,
        overview,
        author,
        categories[]->{title},
        mainImage,
        publishedAt,
        body,
          }`);
          
          const currentPostIndex = posts.findIndex(item => item.slug.current === currentPost.slug.current);
          const lastIndex = posts.length -1;
          let previousPostIndex = 0;
          let nextPostIndex = 0;
  
        
            if(currentPostIndex == 0){
                previousPostIndex = 0;
            } else {
                previousPostIndex = currentPostIndex - 1;
            }

            if(currentPostIndex == lastIndex ){
                nextPostIndex = currentPostIndex;
            } else {
                nextPostIndex = currentPostIndex + 1;
            }

          const nextPost = posts[nextPostIndex];
          const previousPost = posts[previousPostIndex];
          const post = posts[currentPostIndex];
          
          
          return { props: { currentPost } }
   
    
}

