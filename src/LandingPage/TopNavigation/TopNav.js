import React from 'react';
import styles from './TopNav.module.css';
export function TopNav(){
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <a href="https://www.yelp.com/writeareview" className>Write a Review</a>
                <a href="https://www.yelp.com/events/irvine-ca-us" className>Events</a>
                <a href="https://www.yelp.com/talk/irvine-ca-us" className>Talk</a>
            </div>
            <div className={styles.right}>
                <a href="https://www.yelp.com/login" className>Log In</a>
                <a href="/signup" className={styles.ybtn}>Sign Up</a>
            </div>
        </div>
    );
}