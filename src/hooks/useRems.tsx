import { useEffect, useState } from "react";
import useMediaQuery from './useMediaQuery';
import { BREAKPOINTS } from '../styles/variables';

export const useRems = (initialValue:number) : number => {
    const isBelowRemToggle = useMediaQuery(BREAKPOINTS.remToggle);
    const [rems,setRems] = useState(initialValue);
    
    useEffect(() => {
        const r = initialValue * (isBelowRemToggle ? 0.5 : 0.625);
        setRems(r);
    },[isBelowRemToggle,initialValue]);

    return rems;
}