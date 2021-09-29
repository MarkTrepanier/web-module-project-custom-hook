import {useState} from 'react'
const useLocalStorage = (key, initialValue)=>{

    const[storedValue, setStoredValue]= useState(()=>{
        //storedValue is either item or initialValue
        const item = window.localStorage.getItem(key);
        //return that
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue=value=>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue,setValue];
}

export default useLocalStorage;