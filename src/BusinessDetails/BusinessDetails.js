import React, { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { BusinessPictures } from './BusinessPictures';
import { BusinessReviews } from './BusinessReviews';
import useReacterRouter from 'use-react-router';
import * as api from '../hooks/yelp-api/api';
import styles from './BusinessDetails.module.css';


export function BusinessDetails(){
    const {location, history} = useReacterRouter();
    const [id, setId] = useState(location.pathname.substring(4));
    const [detailResponse, setDetailResponse] = useState([]);
    //location.pathname.substring(4);

    
    useEffect(() => {
        //console.log("1");
        const fetchData = async () =>{
            try{
                const rawData = await api.bizget('/businesses', id);
                const resp = await rawData.json();
                setDetailResponse(resp);
            } catch (error){
                console.log(error)
            }
        };
        fetchData();
    }, [id]);
    //console.log("2");

    const [reviewResponse, setReviewResponse] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const rawData = await api.bizreviewget('/businesses', id);
                const resp = await rawData.json();
                //console.log(resp);
                setReviewResponse(resp);
            } catch (error){
                console.log(error)
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className={styles.frame}>
            BusinessDetails Page
           
            <BusinessPictures resp={detailResponse} id={id}/>
            <BusinessReviews resp={reviewResponse}/>
            <NavBar/>
        </div>
    );
}