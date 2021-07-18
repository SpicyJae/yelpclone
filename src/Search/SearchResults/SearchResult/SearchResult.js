import React from 'react';
import styles from './SearchResult.module.css';
import useReacterRouter from 'use-react-router';
import {BusinessRating} from '../../../BusinessRating/BusinessRating';
import {BusinessDetailSearch} from '../../../hooks/yelp-api/businessDetailSearch';

export function SearchResult(props) {

    //const businessDetails = BusinessDetailSearch(key);
    const tags = props.business.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={category.title}>{category.title}</span>))
    //const addressLines = props.business.location.address3 == '' ? <p>{props.business.location.address3}</p> : <p>{props.business.location.address1}</p>
    //const addressLines = props.business.location.display_address.map(addressLine => <p key={props.business.id + addressLine}>{addressLine}</p>);
    const {location, history} = useReacterRouter();


    if(!props.business){
        return (<div/>);
    }

    return (
        <div onClick={() => props.search(props.id)} className={styles['search-result']}>
            <img src={props.business.image_url} alt='businessImage' className={styles['business-image']} />
            <div className={styles['business-info']}>
                <h2 className="subtitle">{props.business.name}</h2>
                <span><BusinessRating businessRating={props.business.rating} reviewCount={props.business.review_count}/> <span className={styles['business-category']}>{props.business.price} <a href="localhost:3000/search" > {tags}</a></span></span>
            </div>
            <div className={styles['contact-info']}>
                <p>{props.business.display_phone}</p>
                <p>{props.business.location.address1}</p>
            </div>
        </div>
    );
}