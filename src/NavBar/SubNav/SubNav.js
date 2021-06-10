import React from 'react';
import {SubNavItem} from './SubNavItem/SubNavItem';
import styles from './SubNav.module.css';

export function SubNav(){
    return (
        <div className={styles['subnav-middle']}>
            <SubNavItem label = 'Restaurant'/>
            <SubNavItem label = 'Home Services'/>
            <SubNavItem label = 'Auto Services'/>
            <SubNavItem label = 'More'/>
        </div>
    );
}