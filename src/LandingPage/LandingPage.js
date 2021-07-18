import React, { useState, useEffect } from 'react';
import { TopNav } from './TopNavigation/TopNav';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import { BestBusinesses } from "./BestBusinesses/BestBusinesses";
import { DiffCities } from "./DiffCities/DiffCities";
import logo from '../pictures/logo.png';
import styles from './LandingPage.module.css';
import useReactRouter from 'use-react-router';
import { BackgroundSlideshow } from "./BackGroundSlider/BackgroundSlider";
import { HotAndNewBusinesses } from "./HotAndNewBusi/HotAndNewBusinesses";
import {HotBusinessSearch} from '../hooks/yelp-api/hotBusinessSearch';



export function LandingPage(){
    const hot_and_new = useState("hot_and_new");
    const [locationSet, setLocationSet] = useState("Irvine, CA");
    const [businesses, amountResults, searchParams, performSearch] = HotBusinessSearch(hot_and_new, locationSet);
    const {history} = useReactRouter();

    useEffect(()=>{
        hot_search(hot_and_new, locationSet);
    }, [locationSet]);

    function search(term, location){
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }

    function changeCity(city){
        setLocationSet(city);
    }

    function hot_search(attributes, location){
        const encodedTerm = encodeURI("hot_and_new");
        const encodedLocation = encodeURI(location);
        performSearch({attributes, location});
        console.log(`hello from ${location}`);
    }

    return(
            <div className={styles.landing}>
                <div className={styles['search-area']}>
                    <TopNav/>
                    <img src={logo} className={styles.logo} alt='logo'/>
                    <SearchBar search={search} location={locationSet}/>
                    <SearchSuggestions search={search} location={locationSet}/>
                    <BestBusinesses location={locationSet}/>
                    <DiffCities changeCity={changeCity} location={locationSet}/>
                    <HotAndNewBusinesses businesses={businesses}/>
                </div>
            </div>
    );
}
