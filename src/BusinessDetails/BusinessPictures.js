import React from 'react';
import { BusinessRating } from '../BusinessRating/BusinessRating';
import styles from './BusinessPictures.module.css';


export function BusinessPictures(props) {
    if(Object.keys(props.resp).length == 0){
        return (<div></div>);
    }

    const businessDetail = props.resp
    let checkSrc = "";
    let openClosed = <span></span>;
    if(businessDetail.is_claimed){
        checkSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/512px-Eo_circle_light-blue_checkmark.svg.png";
    } else {
        checkSrc = "https://e7.pngegg.com/pngimages/898/942/png-clipart-gray-x-mark-illustration-computer-icons-circle-symbols-close-miscellaneous-logo-thumbnail.png";
    }
    if(businessDetail.hours[0].is_open_now){
        openClosed = <span className={styles.open}>Open</span>;
    } else{
        openClosed = <span className={styles.closed}>Closed</span>;
    }

    const tags = businessDetail.categories.map(category => (<span key={category.title}>{category.title} </span>))
    //console.log(businessDetail.hours[0].open[3].start);
    //console.log(businessDetail.hours[0].is_open_now);
    console.log(businessDetail.hours[0].is_open_now);
    return (
        <div>
            <div className={styles.picture_size}>
                <img src={businessDetail.photos[0]}/>
                <img src={businessDetail.photos[1]}/>
                <img src={businessDetail.photos[2]}/>
            </div>
            <div className={styles.picture_text}>
                <p className={styles.business_name_text}>{businessDetail.name}</p>
                <BusinessRating businessRating={businessDetail.rating} reviewCount={businessDetail.review_count}/>
                <div>
                    <span className={styles.details}>
                        <img src={checkSrc} className={styles.verify_pic}/>
                        <img src="https://e7.pngegg.com/pngimages/666/994/png-clipart-line-circle-circle-white-circle-thumbnail.png" className={styles.bullet_point}/>
                        <span>{businessDetail.price}</span>
                        <img src="https://e7.pngegg.com/pngimages/666/994/png-clipart-line-circle-circle-white-circle-thumbnail.png" className={styles.bullet_point}/>
                        <span className={styles.details}>{tags}</span>
                    </span>
                </div>
                <div>
                    <span className={styles.hours}>{openClosed} {businessDetail.hours[0].open[3].start} - {businessDetail.hours[0].open[3].end}</span>
                </div>
            </div>
        </div>
    )
}
