import React, {useState} from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-scroll';
import { Navigation, MobileNavigation} from './Navigation';
import styles from './NavBar.module.css';
import { motion } from 'framer-motion';

function NavBar({campaignTitle, currentPage, categories, posts}){
    const [isOpen, setIsOpen] = useState(false);



    return(
      <div className={`noto-serif ${styles.navBarContainer}`}> 
          <Navigation />
          <MobileNavigation campaignTitle={campaignTitle} currentPage={currentPage} categories={categories} posts={posts}/>
      </div>
    )
}

export default NavBar

