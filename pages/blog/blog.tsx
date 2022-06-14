import {sanityClient} from "../../lib/sanity";
import imageUrlBuilder from '@sanity/image-url';
import Head from "next/head";

import {motion} from "framer-motion";
import {useRef, useState, useEffect} from "react";
import styles from '../../styles/Blog.module.css';

import Footer from '../../components/Footer/Footer';
import {LandscapeCard, PortraitCard} from '../../components/BlogCards/BlogCards';
import NavBar from "../../components/NavBar/NavBar";
import { MobileNavigation } from "../../components/NavBar/Navigation";

import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  return builder.image(source)
}

const sanityQuery = `{
      "posts": *[_type in ["post"]]| order(publishedAt desc){
      _id,
      title,
      slug,
      author,
      categories[]->{title},
      mainImage,
      publishedAt
   
    },

    "footer": *[_type in ["landpage"]]| order(publishedAt desc){
        email,
        phoneNumber
    },

    "categories": *[_type in ["category"]]| order(title){
        _id,
        title
    },

    "camp": *[_type in ["landpage"]]| order(publishedAt desc){
        emphasisSection,
       }

  }`;






export default function Blog({ data }) {


    const email = data.footer[0].email;
    const phone = data.footer[0].phoneNumber;

    const lastPost = data.posts[0];
    const posts = data.posts.slice(1);

    
    const [width, setWidth] = useState(0); //carousel width constrains
    const carousel = useRef();

    
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);



    return(
    <div>
    <Head>
        <title>Rodrigo Francalacci Song Blog</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
    </Head>

    <NavBar campaignTitle={data.camp[0].emphasisSection.navName} currentPage={"home"} categories={data.categories} posts={data.posts}/>
        
        <main className={`${styles.main}`}>

            <div className={`${styles.head} ${styles.widthblog}`}>
                <div>
                    <h2  className={`size-70 noto-serif`}>Blog</h2>
                </div>
                
                <p className={`size-24`}>Talking about songs, albums, studios, recs and mixes, travels and dreams. Come on and learn to make your song shines in the air.</p>
            </div>

          

            <div className={`${styles.mainPost} ${styles.widthblog}`}>
                <LandscapeCard props={lastPost}/>
            </div>

            

            <div className={styles.morePosts}>

                <h3 className={`size-49a noto-serif`}>More Posts</h3>
                <div>
                    <MobileNavigation campaignTitle={undefined} currentPage={"blog"} categories={data.categories} posts={data.posts}/>
                </div>

                <div className={styles.carouselContainer}>
                    <MdArrowLeft size='120px' className={styles.arrowIcon}/>
                        <motion.div ref={carousel} className={styles.carousel}>

                            <motion.div 
                                drag="x"
                                dragConstraints={{right:0, left: -width}} 
                                className={styles.inner_carousel}>

                                    {posts?.length > 0 && posts.map((item) => (
                                        <motion.div key={item._id} className={styles.itemCarousel}>
                                            <PortraitCard props={item}/>
                                        </motion.div>
                                    ))}
                        
                            </motion.div>

                        </motion.div>

                    <MdArrowRight size='120px' className={styles.arrowIcon}/>
                </div>
           

            
            </div>

        </main>


        <section>
        <Footer bkgColor="bkgBeige" contactColor="orangeDarkfont" email={email} phoneNumber={phone}/>
        </section>
       

    </div>
    )

}

export async function getStaticProps(){

    const data = await sanityClient.fetch(sanityQuery);

  
    return {props: {data}};
  }