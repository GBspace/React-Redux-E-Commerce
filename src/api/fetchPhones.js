import phones from './mockPhones';
import R from 'ramda';
import request from 'superagent';
import mockCategories from './mockCategories';

export const fetchPhones = async () =>{
    return new Promise(resolve =>{
        resolve(phones);
    });

    // const {body} = await request.get('http://www.mocky.io/v2/5918b9461200001f1040dbeb');
    // return body.phones;
};

export const loadMore = async ({offset}) => {
    return new Promise((resolve)=>{
        resolve(phones);
    });
};

export const fetchPhoneById = async id=>{
    return new Promise((resolve,reject)=>{
        console.log("Id in api fetchPhones " , id);
        const phone = R.find(R.propEq('id',id),phones);
        resolve(phone);
    });
};

export const fetchCategories = async ()=>{
    return new Promise(resolve =>{
        resolve(mockCategories);
    });
}