import {sanityClient} from "../lib/sanity";
import imageUrlBuilder from '@sanity/image-url';
import {PortableText} from '@portabletext/react';
import {useState, useEffect} from "react";
import styles from '../styles/Home.module.css';

import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import CardsWorks from '../components/CardsWorks/CardsWorks';
import BigBot from '../components/BigBot/BigBot';
import SmallBot from '../components/SmallBot/SmallBot';
import BlogSec from '../components/BlogSec/BlogSec';
import BlogSecGrid from '../components/BlogSec/BlogSecGrid';
import Footer from '../components/Footer/Footer';
import { IoLogoDesignernews } from "react-icons/io5";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  return builder.image(source)
}

const pageQuery = `*[_type in ["landpage"]]| order(publishedAt desc){
  home,
  "homeBkg": home.bkgImg.asset->url,
  emphasisSection,
  worksSection[]->,
  bio,
  "bioBkg": bioBkg.asset->url,
  email,
  phoneNumber,
  blogDescription,
  socialMedia,
  publishedAt,

 }`

 const postsQuery = `*[_type in ["post"]]| order(publishedAt desc)[0..2]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
}`




export default function Home( { pageData, postsData } ) {

  

  const page = pageData[0];
  const post1 = postsData[0];
  const post2 = postsData[1];
  const post3 = postsData[2];
 



  return (

<div className={styles.indexClass}>

    <Head>
        <title>Rodrigo Francalacci Song Blog</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
    </Head>
    <NavBar campaignTitle={page.emphasisSection.navName} currentPage={"home"} categories={""} posts={""}/>


{/* section 1 - home cover */}
    <section 
        id="home" 
        className={`${styles.homeCover}`}
        style={{backgroundImage:`url(${page.homeBkg})`}}>
      
      <div className={styles.margin_B_240_275}>
        <BigBot text={page.home.buttonText} link={page.home.buttonLink}/>
      </div>
    </section>

{/* section 2 - campaign */}
    <section id="campaign" className={`${styles.album}`}>

      <div className={`size-49a ${styles.albumTitle}`}>
        <h2>{page.emphasisSection.sectionTitle}</h2>
      </div>

      <SmallBot text={page.emphasisSection.buttonText} link={page.emphasisSection.buttonLink} colorClass={"orangeDarkBot"}/>

      <div className={`${styles.width_986_432}`}>
        <div className={`${styles.albumImgContainer}  ${styles.margin_BT_102_78}`}>
          <img src={urlFor(page.emphasisSection.image).url()} 
              alt={page.emphasisSection.sectionTitle} 
              className={`${styles.albumImage}`}>
          </img>
        </div>
      </div>

      <div className={styles.width_986_432}>
        <div className={`${styles.albumDescription}`}>
        
        <div className={`size-28p`}>
          <PortableText value={page.emphasisSection.description}/>
        </div>
          
    
        </div>
      </div>

      <div className={`${styles.bar} ${styles.width_842_360}`}></div>


    </section>

{/* section 3 - works */}
    <section id="works" className={`${styles.works}`}>

      <div className={`${styles.margin_T_51_93}`}>
      <h2 className={`size-49a`}>Works</h2>
      </div>
      

      <div className={`${styles.worksCardsContainer} ${styles.margin_B_42_102}`}>

      {page.worksSection?.length > 0 && page.worksSection.map((item) => (

<CardsWorks key={item._id} name={item.albumName} year={item.albumYear} link={item.albumLink} img={item.AlbumCover}/>

))}

       
        
      </div>

    </section>

{/* section 4 - about */}
    <section id="about" className={`${styles.about}`} style={{backgroundImage:`url(${page.bioBkg})`}}>


        <div className={`${styles.aboutContent}`}>

          <div className={styles.margin_L_933_150}>
              <div className={`${styles.width_581_237}`}>
              <PortableText value={page.bio}/>
              </div>
          </div>

        </div>


    </section>

{/* section 5 - blog */}
    <section id="blog" className={`${styles.blog}`}>
     <div><BlogSecGrid 
        blogDescription={page.blogDescription}
        post1={post1}
        post2={post2}
        post3={post3}
        /></div>
    </section>

{/* section 6 - social media */}
    <section id="contact" className={`${styles.contact}`}>

        <div className={`${styles.contactContent}`}>

          <h2 className={`size-70`}>Social Media</h2>

          <ul className={`size-49 ${styles.contacList}`}>

            {page.socialMedia?.length > 0 && page.socialMedia.map((item) => (

              <li key={item.mediaName}><a href={item.mediaLink} target="_blank"  rel="noreferrer">{item.mediaName}</a></li>

            ))}
            
          </ul>

        </div>

    </section>

{/* footer */}
    <section className={`${styles.footer}`}>
      <Footer bkgColor="bkgOrangeDark" contactColor="whiteFont" email={page.email} phoneNumber={page.phoneNumber}/>
    </section>

</div>
  )


  
}

export async function getStaticProps(){

  const pageData = await sanityClient.fetch(pageQuery);
  const postsData = await sanityClient.fetch(postsQuery);


  return {props: {pageData, postsData}};
}
