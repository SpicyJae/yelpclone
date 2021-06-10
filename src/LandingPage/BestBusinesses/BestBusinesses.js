import React from 'react';
import styles from './BestBusinesses.module.css';
import {Link} from 'react-router-dom';
import useReactRouter from 'use-react-router';

export function BestBusinesses(){
    const {history} = useReactRouter();

    function submit(name){
        name = encodeURI(name);
        history.push(`/search?find_desc=${name}&find_loc=irvine`);
    }

    return (
        <div className={styles.background}>
            <div className={styles['text-display']}>
                Find the Best Businesses in Town
            </div>
            <div className={styles.display}>
                <button onClick={() => submit('Hotels')}>
                    <img alt="Hotels" src={'https://media-cdn.tripadvisor.com/media/photo-s/15/a1/d2/af/hotel-r-de-paris.jpg'} className={styles.image}></img>
                    <h3 className={styles['business-text']}>Hotels</h3>
                </button>
                <button onClick={() => submit('Cleaners')}>
                    <img alt="cleaner" src={'https://cdn.mos.cms.futurecdn.net/69pduo2duT5n6LuT8dVK4J.jpg'} className={styles.image}></img>
                    <h3 className={styles['business-text']}>Dry Cleaning</h3>
                </button>
                <button onClick={() => submit('Movers')}>
                    <img alt="Movers" src={'https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/05/movers-boxes-stairs.jpg?w=1024&ssl=1'} className={styles.image}></img>
                    <h3 className={styles['business-text']}>Movers</h3>
                </button>
                <button onClick={() => submit('Locksmith')}>
                    <img alt="Locksmith" src={'https://t2conline.com/wp-content/uploads/2018/01/locksmith-suffolk-county-1000x449.jpg'} className={styles.image}></img>
                    <h3 className={styles['business-text']}>Locksmith</h3>
                </button>
            </div>
        </div>
    );
}