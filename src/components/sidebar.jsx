import { useRecoilState } from "recoil"
import { styled } from "styled-components"
import { sidebarAtom } from "../Recoil/sidebar"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { userAtom } from "../Recoil/user"
import { instructorAtom } from "../Recoil/instructor";
import Footer from "./footer"


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
    
    padding-left:1rem;
    display:flex;
    flex-direction:column;
`

const Close = styled.div`
    position:relative;
    align-self:flex-end;
`

const Item = styled.p`
    color:#fff;
    font-weight:700;
    font-size:0.97em;
`


const Caption2 = styled.div`
  color:#fff;
  font-weight:600;
  font-size:1.3rem;
`

const Barheading = styled.div`
    display:flex;
    flex-direction:row;
    margin:2rem 1rem 1rem 0rem;
    align-items:center;
    justify-content:space-between;
`

const BlackRibbon = styled.div`
    padding:0.75rem 1rem;
    display:flex;
    flex-direction:column;
    background-color:#000;
    color:#fff;
    font-size:0.9rem;
`

const BarContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width:60%;
    position:relative;
    background-color:#ff4d4d;
`

const SideBar = ()=>{

    const navigate = useNavigate();

    const [sidebar,setSidebar] = useRecoilState(sidebarAtom);
    const [user,setUser] = useRecoilState(userAtom);
    const [insturctor,setInstructor] = useRecoilState(instructorAtom);

    const logoutUser = ()=>{
        setUser(null);
        navigate("/");
    }

    const logoutInstructor = ()=>{
        setInstructor(null);
        navigate("/");
    }
    

    return(
        <>
        { sidebar && 
            <Overlay onClick={()=>setSidebar(false)}>
                <BarContainer>
                <Bar >
                    <Barheading>
                        <Caption2>VediHeal</Caption2>
                        <Close onClick={()=>setSidebar(false)}>
                            <FontAwesomeIcon color="white" icon={faClose}/>
                        </Close>
                    </Barheading>
                    
                    
                    {
                        !insturctor &&<Link to="/"><Item>HOME</Item></Link>
                    }
                    {
                        !insturctor && <Link to="/services"><Item>SERVICES</Item></Link>
                    }

                    {/* user routes */}
                    {
                        user && 
                        (
                            <>
                                <Link to="/account"><Item>PROFILE</Item></Link>
                                <Link to="/appointment/upcoming"><Item>UPCOMING APPOINTMENTS</Item></Link>
                                <Link to="/appointment/previous"><Item>PAST APPOINTMENTS</Item></Link>
                            </>
                        )
                    }

                    {/* instructor routes */}
                    {
                        insturctor && 
                        (
                            <>
                                <Link to="/instructor/account"><Item>PROFILE</Item></Link>
                                <Link to="/instructor/appointment/upcoming"><Item>UPCOMING APPOINTMENTS</Item></Link>
                                <Link to="/instructor/appointment/previous"><Item>PREVIOUS APPOINTMENTS</Item></Link>
                            </>
                        )
                    }
                    

                    <Link to="/privacy-policy"><Item>PRIVACY POLICY AND TERMS & CONDITIONS</Item></Link>
                    <Link to="/contact-us"><Item>CONTACT US</Item></Link>
                    <Link to="/about-us"><Item>ABOUT US</Item></Link>

                    {/* user logout fun */}
                    {
                        user && <Item onClick={logoutUser}>LOGOUT</Item>
                    }

                    {/* instructor logout fun */}
                    {
                        insturctor && <Item onClick={logoutInstructor}>LOGOUT</Item>
                    }

                    {/* if niether user nor insturctor are logged in */}
                    {
                        (!user && !insturctor) && <Link to="/login"><Item>LOGIN</Item></Link>
                    }
                    
                </Bar>
                <BlackRibbon>&copy; 2023 Vediheal India. All rights reserved.</BlackRibbon>
                </BarContainer>
            </Overlay>
        }
        </>
    )
}

export default SideBar;