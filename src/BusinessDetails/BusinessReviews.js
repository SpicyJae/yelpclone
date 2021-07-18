import React from "react";
import { BusinessRating } from "../BusinessRating/BusinessRating";
import styles from './BusinessReviews.module.css';

export function BusinessReviews(props) {
  if (Object.keys(props.resp).length == 0) {
    return <div></div>;
  }

  const businessReview = props.resp;
  const dayCreated = businessReview.reviews[0].time_created.substring(0, 10);
  console.log(dayCreated);
  return (
    <div>
      <div>
        <div className={styles.profile_name}>
          <img src={businessReview.reviews[0].user.image_url} className={styles.profile_picture}/>
          {businessReview.reviews[0].user.name}
        </div>
        <div>
          <p className={styles.rating}>
          <BusinessRating businessRating={businessReview.reviews[0].rating}/>{dayCreated}
          </p>
          <p>{businessReview.reviews[0].text}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={businessReview.reviews[1].user.image_url} />
          {businessReview.reviews[1].user.name}
        </div>
        <div>
          <p>
            {businessReview.reviews[1].rating}
            {dayCreated}
          </p>
          <p>{businessReview.reviews[1].text}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={businessReview.reviews[2].user.image_url} />
          {businessReview.reviews[2].user.name}
        </div>
        <div>
          <p>
            {businessReview.reviews[2].rating}
            {dayCreated}
          </p>
          <p>{businessReview.reviews[2].text}</p>
        </div>
      </div>
    </div>
  );
}
