import React from 'react';
import styles from './HotAndNewBusiness.module.css';
import {BusinessRating} from '../../BusinessRating/BusinessRating';
import useReactRouter from 'use-react-router';

export function HotAndNewBusiness(props) {
    const {history} = useReactRouter();

    if(!props.business){
        return (<div/>);
    }
    const tags = props.business.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={category.title}>{category.title}</span>))
    //const addressLines = props.business.location.address3 == '' ? <p>{props.business.location.address3}</p> : <p>{props.business.location.address1}</p>
    //const addressLines = props.business.location.display_address.map(addressLine => <p key={props.business.id + addressLine}>{addressLine}</p>);
    return (
        <div onClick={()=> history.push(`/biz/${props.id}`)} className={styles['search-result']}>
            <button className={styles['button-display']}>
                <img src={props.business.image_url} alt='businessImage' className={styles['business-image']} />
                <div className={styles['business-info']}>
                    <h2 className="subtitle">{props.business.name}</h2>
                    <span><BusinessRating businessRating={props.business.rating} reviewCount={props.business.review_count}/> {props.business.price} {tags}</span>
                </div>
            </button>
        </div>
    );
}