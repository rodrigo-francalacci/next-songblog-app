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




export default function Post({ slug }) {


return(

<div>

    {slug}

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

    
          
          return { props: { slug } }
   
    
}

