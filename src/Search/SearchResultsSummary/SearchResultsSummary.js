import React from 'react';
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary(props) {
    return (
        <div>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>Best {props.term} in {props.location} </strong></h1>
            </div>
        </div>
    );
}