import React from 'react';
import { HotAndNewBusiness } from './HotAndNewBusiness';
import styles from './HotAndNewBusinesses.module.css';


export function HotAndNewBusinesses(props){

    if(!props.businesses || !props.businesses.length){
        return (<div></div>);
    }
    const result = props.businesses.slice(0,3);
    const HotAndNewBusinessResults = result.map(b => <HotAndNewBusiness id={b.id} business={b}/>)

    return(
        <div className={styles.display}>
            <p className={styles['text-display']}>Hot &amp; New Busineeses</p>
            <div className={styles['search-results']}>
                {HotAndNewBusinessResults}
            </div>
        </div>
    );
}