import React from 'react';
import { TopNav } from './TopNavigation/TopNav';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import { BestBusinesses } from "./BestBusinesses/BestBusinesses";
import { DiffCities } from "./DiffCities/DiffCities";
import logo from '../pictures/logo.png';
import styles from './LandingPage.module.css';
import useReactRouter from 'use-react-router';
import { BackgroundSlideshow } from "./BackGroundSlider/BackgroundSlider";



export function LandingPage(){

    const mystyle={
        margintop: "500px"
    };
    const {history} = useReactRouter();

    function search(term, location){
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }

    return(
            <div className={styles.landing}>
                <div className={styles['search-area']}>
                    <TopNav/>
                    <img src={logo} className={styles.logo} alt='logo'/>
                    <SearchBar search={search}/>
                    <SearchSuggestions search={search}/>
                    <BestBusinesses/>
                    <DiffCities/>
                </div>
                    
            </div>
    );
}
