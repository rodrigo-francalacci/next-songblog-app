import NavLinks from './NavLinks';
import NavBlog from './NavBlog';
import SmallBot from '../SmallBot/SmallBot';
import { sanityClient } from '../../lib/sanity';
import styles from './Navigation.module.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoCloseOutline} from 'react-icons/io5';
import {BsSearch} from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';



export function Navigation(){

    return(
        <nav className={`${styles.navigation}`}>
            <NavLinks />
        </nav>
    );
    
}


export function MobileNavigation({campaignTitle, currentPage, categories, posts}){

   
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <AiOutlineMenu 
                            className={`${styles.hamburger} ${styles.marginR_31_42}`} 
                            size='48px' 
                            color='white'
                            onClick={() => setOpen(!open)}   
                          />

    const searchIcon = <BsSearch 
                            className={`${styles.hamburger} ${styles.marginR_31_42}`} 
                            size='30px' 
                            color='white'
                            style={{
                                padding: 0,
                                margin: "10px",
                                
                              }}
                            onClick={() => setOpen(!open)}   
                          />

    const whiteCloseIcon = <IoCloseOutline 
                            className={`margin_T-71-98  ${styles.closebot}`} 
                            size='48px' 
                            color='white'
                            onClick={() => setOpen(!open)}   
                          />

    const blackCloseIcon = <IoCloseOutline 
                            className={`margin_T-71-98  ${styles.closebot}`} 
                            size='48px' 
                            color='black'
                            onClick={() => setOpen(!open)}   
                          />
    
    const closeMobileMenu = () => setOpen(false);
    
    

    const homeMenu = <motion.div className={` ${styles.menuOpened}`} initial={{rotateX: -70}} animate={{rotateX: 0}} transition={{delay: 0.100}}>
                            {whiteCloseIcon}

                            <div className={styles.homeContentContainer} >
                                <div className={`${styles.menuContent} ${styles.paddingT_269_192}`}>
                                        <motion.div className={`${styles.menuRodrigo}`} initial={{opacity: 0, y: +70}} animate={{opacity: 1, y: 0}} transition={{delay: 0.20}}>
                                            <p className={`size-70`}>Rodrigo</p>
                                            <p className={`size-70`}>Francalacci</p>
                                        </motion.div>
                                        <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} campaignTitle={campaignTitle}/>
                                </div>
                            </div>
                                      
                        </motion.div>;

    const blogMenu = <div className={styles.blogMenuContainer}>
                    <motion.div className={` ${styles.menuOpened}`} initial={{rotateX: -70}} animate={{rotateX: 0}} transition={{delay: 0.100}}>
                            {blackCloseIcon}
                            <div className={styles.blogContentContainer} >     
                            <NavBlog isMobile={true} closeMobileMenu={closeMobileMenu} campaignTitle={campaignTitle} categories={categories} posts={posts}/>
                            </div>                  
                     </motion.div>;
                    </div>
    

    const homeMenuClosed =  <div className={`${styles.menuClosed} ${styles.width_432_360} ${styles.right_240_0}`}>
                                <p className={`size-28 ${styles.closeNavTitle}`}>Rodrigo Francalacci</p>
                                {hamburgerIcon}
                            </div>;

    const blogMenuClosed =  <div className={`${styles.blogMenuClosed}`} onClick={() => setOpen(!open)}>
                                <p className={`size-21 whiteFont`}>FIND A POST</p>
                                {searchIcon}
                            </div>;


    
    var menuOpened = homeMenu;
    var menuClosed = homeMenuClosed;

    switch(currentPage) {
        case "home":
            menuOpened = homeMenu;
            menuClosed = homeMenuClosed;
          break;
        case "blog":
            menuOpened = blogMenu;
            menuClosed = blogMenuClosed;
          break;
        default:
            menuOpened = homeMenu;
            menuClosed = homeMenuClosed;
      }



    return(
        <nav className={`${styles.mobileNavigation} `} >
            {open ? menuOpened : menuClosed }
        </nav>

      );
        
}

export async function getStaticProps(){

    const categories = await sanityClient.fetch(`*[_type in ["category"]]| order(title){
        _id,
        title
    }`);
  
  
    return {props: {categories}};
  }

