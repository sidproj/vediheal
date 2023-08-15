import { useRecoilState } from "recoil"
import { styled } from "styled-components"
import { sidebarAtom } from "../Recoil/sidebar"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

const Overlay = styled.div`
    z-index:5;
    width:100%;
    height:100%;
    background-color:#00000094;
    position:fixed;
    display:flex;
    flex-direction:row;
    justify-content:end;
    font-family: 'Montserrat', sans-serif;
`

const Bar = styled.div`
    height:100%;
    width:60%;
    position:relative;
    background-color:#ff4d4d;
    padding-left:1rem;
    display:flex;
    flex-direction:column;
`

const Close = styled.div`
    position:relative;
    align-self:flex-end;
    margin:1.5em;
`

const Item = styled.p`
    color:#fff;
    font-weight:700;
    font-size:0.97em;
`

const SideBar = ()=>{

    const [sidebar,setSidebar] = useRecoilState(sidebarAtom);

    return(
        <>
        { sidebar && 
            <Overlay onClick={()=>setSidebar(false)}>
                <Bar >
                    <Close onClick={()=>setSidebar(false)}>
                        <FontAwesomeIcon color="white" icon={faClose}/>
                    </Close>
                    <Link to="/"><Item>HOME</Item></Link>
                    <Link to="/account"><Item>PROFILE</Item></Link>
                    <Link to="/services"><Item>SERVICES</Item></Link>
                    <Link to="/upcomingappointment"><Item>UPCOMING APPOINTMENTS</Item></Link>
                    <Link to="/previousappointment"><Item>PAST APPOINTMENTS</Item></Link>
                    <Link to="/privacy-policy"><Item>PRIVACY POLICY</Item></Link>
                    <Link to="/about-us"><Item>ABOUT US</Item></Link>
                    <Item>LOGOUT</Item>
                </Bar>
            </Overlay>
        }
        </>
    )
}

export default SideBar;