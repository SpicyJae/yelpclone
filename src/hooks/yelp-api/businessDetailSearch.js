import {useState, useEffect} from 'react';
import * as api from './api';

export function BusinessDetailSearch(id){
    const [response, setResponse] = useState([]);
    const [searchParams, setSearchParams] = useState(id);
    console.log("Called BusinessDetailSearch");
    /*
    const fetchData = async () =>{
        try{
            const rawData = await api.bizget('/businesses', searchParams);
            const resp = await rawData.json();
            console.log(resp);
            setResponse(resp);
        } catch (error){
            console.log(error)
        }
    };
    fetchData();
    */
    return response;
}