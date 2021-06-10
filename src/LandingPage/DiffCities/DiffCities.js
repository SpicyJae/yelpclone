import React from 'react';
import styles from './DiffCities.module.css';

export function DiffCities() {
    return (
        <div className={styles['title-text']}>
            <p>Yelp Irvine</p>
            <div className={styles.cities}>
                <div>
                    San Jose
                </div> 
                <div>
                    San Francisco
                </div>
                <div>
                    New York
                </div>
                <div>
                    Los Angeles
                </div>
                <div>
                    Chicago
                </div>
                <div>
                    Palo Alto
                </div>
                <div>
                    More Cities
                </div>
            </div>
        </div>
    )
}