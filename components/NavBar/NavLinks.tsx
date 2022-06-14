import styles from './NavLinks.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function NavLinks(props){

    const animateFrom = {opacity: 0, y: -70}
    const animateTo = {opacity: 1, y: 0}


return(

    
    
    <ul className={`${styles.NavLinksList}`}>
    <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.30}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Link href="/#home">
            <a className={`size-49`}>Home</a>
            </Link>
    </motion.li>
<motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.30}}
        onClick={() => props.isMobile && props.closeMobileMenu()}> 
            <Link href="/#campaign">
            <a className={`size-49`}>{props.campaignTitle}</a>
            </Link>
    </motion.li>
<motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.45}}
        onClick={() => props.isMobile && props.closeMobileMenu()}> 
            <Link href="/#works">
            <a className={`size-49`}>Works</a>
            </Link>
    </motion.li>
    <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.65}}
        onClick={() => props.isMobile && props.closeMobileMenu()}> 
            <Link href="/#about">
            <a className={`size-49`}>About</a>
            </Link>
    </motion.li>
    <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.65}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Link href="/#blog">
            <a className={`size-49`}>Blog</a>
            </Link>
    </motion.li>
    <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.90}}
        onClick={() => props.isMobile && props.closeMobileMenu()}> 
            <Link href="/#contact">
            <a className={`size-49`}>Contacts</a>
            </Link>
    </motion.li>
</ul>
    
);

}


