import React, {useState} from 'react';
import styles from './SearchSuggestions.module.css';
import useReactRouter from 'use-react-router';

export function SearchSuggestions(props){
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');
    const {history} = useReactRouter();

    function submit(name){
        name = encodeURI(name);
        history.push(`/search?find_desc=${name}&find_loc=${props.location}`);
    }

    return(
        <div className={styles.suggestions}>
            <button onClick={() => submit('plumbers')} className={styles.suggestion} value="plumber"><i className="fas fa-hand-holding-water"></i>Plumbers</button>
            <button onClick={() => submit('restuarants')} className={styles.suggestion}><i className="fas fa-utensils "></i>Restuarants</button>
            <button onClick={() => submit('home services')} className={styles.suggestion}><i className="fas fa-home"></i>Home Services</button>
            <button onClick={() => submit('delivery')} className={styles.suggestion}><i className="fas fa-motorcycle"></i>Delivery</button>
            <button onClick={() => submit('black owned')} className={styles.suggestion}><i className="fas fa-user-friends"></i>Black Owned</button>
        </div>
    );
}