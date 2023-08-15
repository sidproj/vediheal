import { styled } from "styled-components";
import logoSrc from "../assets/images/logo.png";
import { useRecoilState } from "recoil";
import { sidebarAtom } from "../Recoil/sidebar";
import { useNavigate } from "react-router";

const Head = styled.div`
    background-color:#fce4de;
    height:3.25rem;
    display:flex;
    flex-direction:row;
    padding:0.5em 1em;
    align-items:center;
    justify-content:space-between;
`
const A = styled.div`
    height:3rem;
`
const Logo = styled.img`
    height:inherit;
    object-fit:contain;
`
const Ham = styled.img`
    height:1.3em;
    padding:0.7em;
    background-color:#ff4d4d;
    border-radius:50%;
    object-fit:contain;
`

const Header = ()=>{

    const [sidebar,setSidebar] = useRecoilState(sidebarAtom);

    const navigate = useNavigate();

    const gotoHome = ()=>{
        navigate("/");
    }

    return(
        <Head>
            <A onClick={gotoHome}><Logo src={logoSrc}/></A>
            <Ham onClick={()=>setSidebar(true)} src="https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg"/>
        </Head>
    );
}

export default Header;