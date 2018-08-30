import React from 'react';
import BasketCart from './BasketCart';
import Search from './Search';
import Categories from './Categories';

export const SideBar = ()=>{
    return(
        <div>
            <BasketCart/>
            <Search/>
            <Categories/>
        </div>
    );
};