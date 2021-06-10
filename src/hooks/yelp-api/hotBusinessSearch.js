import {useState, useEffect} from 'react';
import * as api from './api';

export function HotBusinessSearch(attributes, location){
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({attributes: attributes, location: location});

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () =>{
            try{
                const rawData = await api.get('/businesses/search', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
            } catch (error){
                console.log(error)
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
}