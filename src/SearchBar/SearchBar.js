import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props){

    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    useEffect(() => {
        setLocation(props.location);
    }, [props.location]);

    function submit(event){
        if(typeof props.search === 'function'){
            props.search(term, location);
        }
        console.log(term, location);
        event.preventDefault();
    }

    return (
        <form onSubmit={submit}>
            <div className={`field has-addons ${styles['center']}`}>
                <div className="control">
                    <div className="button is-static">Find</div>
                </div>
                <p className="control">
                    <input className={`input ${styles['input-control']}`} 
                           onChange={(event) => setTerm(event.target.value)}
                           type="text"
                           value={term}
                           placeholder="plumbers, delivery, takeout"/>
                </p>
                <div className="control">
                    <div className="button is-static">Near</div>
                </div>
                <p className="control">
                    <input className={`input ${styles['input-control']}`} 
                           onChange={(event) => setLocation(event.target.value)}
                           type="text" 
                           value={location}
                           placeholder="Irvine, CA 92612"/>
                </p>
                <button className={`button ${styles['search-button']}`} onClick={submit}>
                    <span className={`icon is-small ${styles}['search-icon']`}>
                        <i className="fas fa-search"></i>
                    </span>
                </button>
            </div>
        </form>
    );
}