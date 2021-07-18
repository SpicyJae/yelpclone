import React from 'react';
import styles from './SearchFilter.module.css';

export function SearchFilter() {
    return (
        <div className={styles.fixedContainer}>
            <div className={styles['filter-category']} className={styles.price_button}><p className={styles.mgtop}><strong>Filters</strong></p>
                <button className="button is-small">$</button>
                <button className="button is-small">$$</button>
                <button className="button is-small">$$$</button>
                <button className="button is-small">$$$$</button>
            </div>
            <div className={styles['filter-category']} className={styles.list}><p className={styles.mgtop}><strong>Suggested</strong></p>
                <label className="checkbox">
                    <input type="checkbox" />Open Now
                </label>
                <label className="checkbox">
                    <input type="checkbox" />Yelp delivery
                </label>
                <label className="checkbox">
                    <input type="checkbox" />Yelp Takeout
                </label>
            </div>
            <div className={styles['filter-category']}><p className={styles.mgtop}><strong>Category</strong></p>
                <button className="button is-small">Burgers</button>
                <button className="button is-small">Restaurants</button>
                <button className="button is-small">Food</button>
                <button className="button is-small">Fast Food</button>
            </div>
            <div className={styles['filter-category']}><p className={styles.mgtop}><strong>Features</strong></p>
                <label className="checkbox">
                    <input type="checkbox" />Good for Groups
                </label>
                <label className="checkbox">
                    <input type="checkbox" />Good for Kids
                </label>
                <label className="checkbox">
                    <input type="checkbox" />Has TV
                </label>
                <label className="checkbox">
                    <input type="checkbox" />Good for Lunch
                </label>
            </div>
            <div className={styles['filter-category']}><p className={styles.mgtop}><strong>Distance</strong></p>
                <label class="container">Bird's-eye view
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">Driving
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">Biking
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">Walking
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
    )
}