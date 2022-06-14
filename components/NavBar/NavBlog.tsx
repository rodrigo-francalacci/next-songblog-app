import styles from './NavBlog.module.css';
import SmallBot from '../SmallBot/SmallBot';
import moment from 'moment';
import { sanityClient } from '../../lib/sanity';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {useState} from "react";


export default function NavBlog(props){

    const animateFrom = {opacity: 0, y: -70}
    const animateTo = {opacity: 1, y: 0}



    const [tag, setTag] = useState("all"); //carousel width constrains
    const [tagsVisible, setTagsVisible] = useState(["flex", "none"]);
    const [listVisible, setListVisible] = useState("none");

    function showResults(tag){
        setTagsVisible(["none", "flex"]);
        setListVisible("flex");
        setTag(tag);
        
    }

    function showTags(){
        setListVisible("none");
        setTagsVisible(["flex", "none"]);
    }


    function loadCategories(categories){
    
        if(categories != undefined){
           var categoriesList = categories?.length > 0 && categories.map((item, n) => (
           <motion.div
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.3*n}}
                onClick={()=>showResults(item.title)} key={item._id} className={styles.tag}>
               <SmallBot  text={item.title} link={undefined} colorClass={"orangeNormalBot"}/>
            </motion.div>
           ))
        };

    
        return categoriesList;
    }

    function loadPosts(posts){

        var postsList = [];

        function checkTag(tags, currentTag){
            let length = tags.length;
            for(let i = 0; i < length; i++){
                if(tags[i].title === currentTag){
                    return true;
                }
            }
            return false;
        }
        
        if(posts != undefined){
            let length = posts.length;
            var n = 1;
    
            for (let i = 0; i < length; i++){

            
                if(tag == "all"){
                    postsList.push(
                        <li key={posts[i]._id} className={styles.postListItem}>

                            <div className={`orangeDarkfont size-21 dm-sams`}>
                                <p>{moment(posts[i].publishedAt, "YYYY-MM-DD").format("MMMM Do YYYY")}</p>
                            </div>

                            <div className={`size-21 dm-sams`}>
                                <Link href={`../../blog/posts/${posts[i].slug.current}`}>
                                    <a target="_blank"> {posts[i].title}</a>
                                </Link>
                            </div>
                        </li>
                        );  
                } else {
    
                    if(checkTag(posts[i].categories, tag) == true){
                       
                        postsList.push(
    
                        <motion.li key={posts[i]._id} className={styles.postListItem}
                                    initial={animateFrom}
                                    animate={animateTo}
                                    transition={{delay: 0.1*n}}>

                            <div className={`orangeDarkfont size-21 dm-sams`}>
                                <p>{moment(posts[i].publishedAt, "YYYY-MM-DD").format("MMMM Do YYYY")}</p>
                            </div>

                            <div className={`size-21 dm-sams`}>
                                <Link href={`../../blog/posts/${posts[i].slug.current}`}>
                                    <a target="_blank"> {posts[i].title}</a>
                                </Link>
                            </div>
                        </motion.li>
                        );

                        n=n+1;
                    }  
                }
            }

        };

    
        return <div>{postsList}</div>;
    
    }

    

return(

<div className={styles.container}>

            <div onClick={showTags}  style={{display: tagsVisible[1]}} className={styles.tag}>
                <SmallBot text={"Back to Tags"} link={undefined} colorClass={"orangeNormalBot"}/>  
            </div>
           
 
            <div id="tagsContainer" 
                 className={styles.tagsContainer}
                 style={{display: tagsVisible[0]}}>
                     
                <div onClick={()=>showResults("all")} key={"allTags"} className={styles.tag}>
                    <SmallBot text={"ALL TAGS"} link={undefined} colorClass={"orangeNormalBot"}/>
                </div>
                {loadCategories(props.categories)}  
            </div>


    <ul 
        
        id = "postsList" 
        className={` ${styles.NavLinksList}`} 
        style={{display: listVisible}}>

        <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 1}}
            onClick={() => props.isMobile && props.closeMobileMenu()}> 
          <p className={`size-35`}># {tag} {" "} posts</p>
        </motion.li>
    
        
        {loadPosts(props.posts)}
        
    </ul>


    
</div>
);

}

export async function getStaticProps(){

    const categories = await sanityClient.fetch(`*[_type in ["category"]]| order(title){
        _id,
        title
    }`);
    
    
    return {data: {categories}};
  }