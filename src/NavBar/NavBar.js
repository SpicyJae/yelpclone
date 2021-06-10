import React from 'react';
import logo from '../pictures/logo.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';

export function NavBar(props){
    return(
        <div className={styles['nav-bar']} className={styles.fixedContainer}>
            <Link to='/'><img src={logo} className={styles.logo} alt='yelp logo'/></Link>
            <SearchBar term={props.term} location={props.location} search={props.search}/>
            <div className={styles.topright}>
                <button className={`button ${styles['unstyled-button']}`}>For Businesses</button>
                <button className={`button ${styles['unstyled-button']}`}>Write a review</button>
                <button className={`button ${styles['nav-button']}`}>Log In</button>
                <button className={`button ${styles['nav-button']}`}>Sign Up</button>
            </div>
        </div>
    );
}