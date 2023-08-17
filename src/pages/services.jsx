import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import Service from "../components/service";
import { useNavigate } from "react-router";
import { faArrowLeft, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import config from "../config.json";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { reikiesAtom } from "../Recoil/reikies";

const ServicesContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:1em;
    align-items:center;
    justify-content:center;
    row-gap: 1em;
`


const ServicesTitle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin:1.5rem;
    margin-bottom:0rem;
`

const CaptionName = styled.div`
    font-size:1.2rem;
    font-weight:500;
    align-self:center;
    display:flex;
    flex-direction:row;
    column-gap:1rem;
`

const Services = ()=>{

    // fetch api call to all reikis available and  
    // save it in recoil state
    // if none display something

    const navigate = useNavigate();

    const [loading,setLoading] = useState(false);

    const [reikies,setReikies] = useRecoilState(reikiesAtom);


    const goback = ()=>{
        navigate(-1);
    }

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

    const refresh = ()=>{
        getReiki();
    }

    useEffect(()=>{
        if(reikies==null)getReiki();
    },[]);

    return(
        <>
            <Header/>
                <ServicesTitle>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                    <CaptionName><div>Reikies</div><FontAwesomeIcon icon={faRefresh} onClick={refresh}/></CaptionName>
                </ServicesTitle>
                <ServicesContainer>
                    {
                        !loading && reikies?.map((reiki,index)=>{
                            return <Service key={index} data={reiki}/>
                        })
                    }
                </ServicesContainer>
            <Footer/>
        </>
    );
}
export default Services;