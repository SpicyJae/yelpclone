import {API_BASE_URL, BEARER_TOKEN} from './config';
import queryString from 'query-string';

export function get(path, queryParams){
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}` ,{
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true, 
        }
    });
}

export function bizget(path, id){
    return fetch(`${API_BASE_URL}${path}/${id}` ,{
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true, 
        }
    });
}

export function bizreviewget(path, id){
    return fetch(`${API_BASE_URL}${path}/${id}/reviews` ,{
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true, 
        }
    });    
}

