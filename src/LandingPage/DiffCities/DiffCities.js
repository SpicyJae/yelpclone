import React, {useState} from 'react';
import styles from './DiffCities.module.css';

export function DiffCities(props) {

    return (
        <div className={styles['title-text']}>
            <p>Yelp {props.location}</p>
            <div className={styles.cities}>
                <button onClick={() => props.changeCity('San Jose')}>
                    San Jose
                </button>
                <button onClick={() => props.changeCity('San Francisco')}>
                    San Francisco
                </button>
                <button onClick={() => props.changeCity('New York')}>
                    New York
                </button>
                <button onClick={() => props.changeCity('Chicago')}>
                    Chicago
                </button>
                <button onClick={() => props.changeCity('Palo Alto')}>
                    Palo Alto
                </button>
                <button onClick={() => props.changeCity('Oakland')}>
                    Oakland
                </button>
                <button>
                    More Cities
                </button>
            </div>
        </div>
    )
}