import styles from './NavLinks.module.css';
import { motion } from 'framer-motion';

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
            <a className={`size-49`} href="/">Album</a>
        </motion.li>
       <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.45}}
            onClick={() => props.isMobile && props.closeMobileMenu()}> 
            <a className={`size-49`} href="/">Works</a>
        </motion.li>
        <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.65}}
            onClick={() => props.isMobile && props.closeMobileMenu()}> 
            <a className={`size-49`} href="/">About</a>
        </motion.li>
        <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.65}}
            onClick={() => props.isMobile && props.closeMobileMenu()}> 
            <a className={`size-49`} href="/">Blog</a>
        </motion.li>
        <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.90}}
            onClick={() => props.isMobile && props.closeMobileMenu()}> 
            <a className={`size-49`} href="/">Contacts</a>
        </motion.li>
    </ul>
);

}