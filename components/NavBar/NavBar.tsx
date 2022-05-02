import React, {useState} from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-scroll';
import { Navigation, MobileNavigation} from './Navigation';
import styles from './NavBar.module.css';
import { motion } from 'framer-motion';

function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
      <div className={styles.navBarContainer}> 
          <Navigation />
          <MobileNavigation />
      </div>
    )
}

export default NavBar