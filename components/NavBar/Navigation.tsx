import NavLinks from './NavLinks';
import styles from './Navigation.module.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoCloseOutline} from 'react-icons/io5';
import { useState } from 'react';
import { motion } from 'framer-motion';



export function Navigation(){

    return(
        <nav className={`${styles.navigation}`}>
            <NavLinks />
        </nav>
    );
    
}

export function MobileNavigation(){

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <AiOutlineMenu 
                            className={`${styles.hamburger} ${styles.marginR_31_42}`} 
                            size='48px' 
                            color='white'
                            onClick={() => setOpen(!open)}   
                          />

    const closeIcon = <IoCloseOutline 
                            className={`margin_T-71-98  ${styles.closebot}`} 
                            size='48px' 
                            color='white'
                            onClick={() => setOpen(!open)}   
                          />
    
    const closeMobileMenu = () => setOpen(false);
    
    
    
    const menuOpened = <motion.div className={` ${styles.menuOpened}`} initial={{rotateX: -70}} animate={{rotateX: 0}} transition={{delay: 0.100}}>
                            {closeIcon}

                            <div className={styles.contentContainer} >
                                <div className={`${styles.menuContent} ${styles.paddingT_269_192}`}>
                                        <motion.div className={`${styles.menuRodrigo}`} initial={{opacity: 0, y: +70}} animate={{opacity: 1, y: 0}} transition={{delay: 0.20}}>
                                            <p className={`size-70`}>Rodrigo</p>
                                            <p className={`size-70`}>Francalacci</p>
                                        </motion.div>
                                        <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>
                                </div>
                            </div>
                            
                            
                        </motion.div>;

    const menuClosed =  <div className={`${styles.menuClosed} ${styles.width_432_360} ${styles.right_240_0}`}>
                            <p className={`size-28 ${styles.closeNavTitle}`}>Rodrigo Francalacci</p>
                            {hamburgerIcon}
                        </div>;

    return(
        <nav className={`${styles.mobileNavigation} `} >
            {open ? menuOpened : menuClosed }
        </nav>

      );
        
}

