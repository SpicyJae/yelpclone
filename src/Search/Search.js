import React, { useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import useReacterRouter from 'use-react-router';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';
import { SearchFilter } from './SearchFilter/SearchFilter';
import styles from './Search.module.css';
import { Maps } from './Maps/Maps';

export function Search(){

    const [userScrolled, setUserScrolled] = useState(false);

    const {location, history} = useReacterRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);
    
    if (!term || !locationParam){
        history.push('/')
    }
/*
    useEffect(() => {
        //figure out if user has scrolled
        if(window.blablah ) {
            setUserScrolled(true);
        }

        if (scrolled up) {

        }
    }, [window]) 

    if (scrolled) {
        setUserScrolled(true);
    }
*/
    function search(term, location){
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc${encodedTerm}&find_loc=${encodedLocation}`)
        performSearch({term, location});
    }

    return(
        <div className={styles['fixed-container']}>
            <NavBar term={term} location={locationParam} search={search}/>
            { !userScrolled && <SubNav/>}
            <SearchFilter/>
            <div className={styles.map}>
                <Maps/>
            </div>
            <div className={styles.displayContainer}>
                <SearchResultsSummary term={searchParams.term} 
                                      location={searchParams.location} 
                                      amountResults={amountResults} 
                                      shownResults={businesses ? businesses.length : 0}/>
                <SearchResults businesses={businesses}/>
            </div>
           
        </div>
    );
}