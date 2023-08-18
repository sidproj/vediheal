import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { instructorAtom } from "../Recoil/instructor";
import { useEffect, useState } from "react";
import configs from "../config.json";
import { servicesAtom } from "../Recoil/services";
import Loading from "./loading";
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Overlay = styled.div`
    z-index:5;
    width:100%;
    height:100%;
    background-color:#00000094;
    position:fixed;
    display:flex;
    justify-content:center;
    flex-direction:row;
    font-family: 'Montserrat', sans-serif;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:1rem;
    height:fit-content;
    background-color:white;
    width:100%;
    border-radius:0.5rem;
    padding:1rem 0;
`

const TitleRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:calc(100% - 2rem);
    margin:0.5rem 1rem 0rem 1rem;
`
const Title = styled.div`
    font-size:0.95rem;
    font-weight:500;
`
const Hr = styled.div`
    width:100%;
    height:0.1rem;
    background-color:#eaeaea;
    margin-bottom:1rem;
    margin-top:1rem;
`


const DetailRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    column-gap:1rem;
    width:calc(100% - 2rem);
    margin:0.5rem 1rem;
`

const Data = styled.div`
    font-size:0.75rem;
    font-weight:400;
`

const CheckBox = styled.input`
    width:1.5em;
    height:1.5em;
`

const Submit = styled.button`
    width:15em;
    height:2.5em;
    background-color:#ff4d4d;
    color:white;
    font-size:1.2em;
    border:none;
    border-radius:0.5em;
`

const InsturctorServiceModal = (props)=>{

    const [loading,setLoading] = useState(false);
    // for animation on service cards
    const [animationParent] = useAutoAnimate();


    const [instructor,setInstructor] = useRecoilState(instructorAtom);
    const [services,setServices] = useRecoilState(servicesAtom);

    const getInstructorServices = async ()=>{
        setLoading(true);

        const url = configs.SERVER_URL+"/reiki/instructor/reikies";
        const options = {
            method: "POST",
            body: JSON.stringify({
                jwt:instructor?.jwt,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        setServices(data);
        setLoading(false);
    }

    const setInstructorServices = async ()=>{
        const url = configs.SERVER_URL+"/reiki/instructor/set";
        const options = {
            method: "POST",
            body: JSON.stringify({
                jwt:instructor?.jwt,
                data:services,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }

        const response = await fetch(url,options);
        const data = await response.json();
        setServices(data);
        props.notify("Services Updated!");
        setServices(null);
        props.setServicesModal(false);
    }

    const handleChange = (id,value)=>{

        let newServices = [...services].map((item) => {
            if (item.id === id) return { ...item, selected: value };
            else return item;
          });

        setServices(newServices);
    }

    useEffect(()=>{
        getInstructorServices();
    },[]);

    return(
        <Overlay>
            <Container ref={animationParent}>
                <TitleRow>
                    <Title>Instructor Services</Title>
                    <FontAwesomeIcon icon={faClose} onClick={()=>{setServices(null);props.setServicesModal(false)}}/>
                </TitleRow>
                <Hr/>
                {
                    loading ?
                    <Loading/> : 
                    (
                        services?.map((service,index)=>{
                            return (
                                    <DetailRow key={index}>
                                    <Title>
                                        <CheckBox 
                                            type="checkbox" 
                                            checked={service.selected}
                                            onChange={
                                                !service.selected?
                                                ()=>{handleChange(service.id,true)}:
                                                ()=>{handleChange(service.id,false)}
                                            }
                                        />
                                    </Title>
                                    <Data>{service.name}</Data>
                                </DetailRow>
                            )
                        })
                        
                    )
                }

                <Hr/>
                <Submit onClick={setInstructorServices}>Save</Submit>

            </Container>
        </Overlay>
    );
}

export default InsturctorServiceModal;