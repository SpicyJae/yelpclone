import React, { useEffect, useState } from 'react';
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

    const [userScrolled, setUserScrolled] = useState(true);

    const {location, history} = useReacterRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    if (!term || !locationParam){
        history.push('/')
    }

    useEffect(() => {
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
          setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

    function search(term, location){
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc${encodedTerm}&find_loc=${encodedLocation}`)
        performSearch({term, location});
    }



    return(
        <div className={styles['fixed-container']}>
            { scrollTop == 0 && <SubNav/>}
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
            <NavBar term={term} location={locationParam} search={search}/>
        </div>
    );
}