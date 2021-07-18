import React, { useState } from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';
import {BusinessDetailSearch} from '../../hooks/yelp-api/businessDetailSearch';
import * as api from '../../hooks/yelp-api/api';
import useReacterRouter from 'use-react-router';

export function SearchResults(props){
    const [response, setResponse] = useState([]);
    const {location, history} = useReacterRouter();
    if(!props.businesses || !props.businesses.length){
        return (<div></div>);
    }



    function detailSearch(id){
        /*
        console.log("Called BusinessDetailSearch");
        const fetchData = async () =>{
            try{
                const rawData = await api.bizget('/businesses', id);
                const resp = await rawData.json();
                console.log(resp);
                setResponse(resp);
            } catch (error){
                console.log(error)
            }
        };
        fetchData();
        */
        history.push(`/biz/${id}`);
    }

    /*
    function detailSearch(key){
        console.log("detailSearch Called");
        const encodedKey = encodeURI(key);
        BusinessDetailSearch(encodedKey);
    }
    */

    const searchResults = props.businesses.map(b => <SearchResult search={detailSearch} id={b.id} business={b}/>)

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    )
}