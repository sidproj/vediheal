import { styled } from "styled-components";
import Service from "./service";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { reikiesAtom } from "../Recoil/reikies";
import config from "../config.json";
import Loading from "./loading";

import { useAutoAnimate } from '@formkit/auto-animate/react'

const ServicesContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:1em 1em;
    align-items:center;
    justify-content:center;
    row-gap: 1em;
`


const SampleServices = ()=>{

    // fetch api call to all reikis available and  
    // save it in recoil state
    // if none display something
    const [loading,setLoading] = useState(false);
    // for animation on service cards
    const [animationParent] = useAutoAnimate();

    const [reikies,setReikies] = useRecoilState(reikiesAtom);

    // change the fetch url to another url when number of reikies are very large
    // so fetch only 5 or 10 reikie when doing so.
    const getReiki = async ()=>{
        try{
            setLoading(true);
            const url = config.SERVER_URL+"/reiki";
            const response = await fetch(url);
            const data = await response.json();
            setReikies(data);
            setLoading(false);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        if(reikies==null)getReiki();
    },[]);


    return(
        <>
            <ServicesContainer ref={animationParent}>
                {
                    loading ?
                    <Loading/> :
                    reikies?.map((reiki,index)=>{
                        return <Service key={index} data={reiki}/>
                    })
                }
            </ServicesContainer>
        </>
    );
}
export default SampleServices;