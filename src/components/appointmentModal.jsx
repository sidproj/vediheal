import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { AppointmentModalAtom } from "../Recoil/appintmentModal";

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
    margin:0.5rem 1rem;
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
`

const DetailRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:calc(100% - 2rem);
    margin:0.5rem 1rem;
`

const Data = styled.div`
    font-size:0.75rem;
    font-weight:400;
`

const AppointmentModal = ()=>{

    const [appointmentModal,setAppointmentModal] = useRecoilState(AppointmentModalAtom);

    const getDate = (str)=>{
        const date = new Date(str);
        return (date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear());
    }
    
    const getTime = (str)=>{
        const date = new Date(str);
        let hour = date.getHours()+"";
        let min = date.getMinutes()+"";
        if( hour.length == 1) hour = "0"+hour;
        if(min.length == 1) min = "0"+min;
        return (hour+" : "+min);
    }

    return (
        <Overlay>
            <Container>
                <TitleRow>
                    <Title>Appointment Details</Title>
                    <FontAwesomeIcon icon={faClose} onClick={()=>setAppointmentModal(null)}/>
                </TitleRow>
                <Hr/>
                <DetailRow>
                    <Title>Reiki: </Title>
                    <Data>{appointmentModal.reiki_id.name}</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Appointment ID: </Title>
                    <Data>{appointmentModal._id}</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Insturctor Name: </Title>
                    <Data>{ 
                            appointmentModal.instructor_id?.first_name ?
                            (appointmentModal.instructor_id?.first_name +" "+ appointmentModal.instructor_id?.last_name) :
                            "Pending"
                        }</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Insturctor Email: </Title>
                    <Data>{appointmentModal.instructor_id?.email || "Pending"}</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Date: </Title>
                    <Data>{ getDate(appointmentModal.start_time) }</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Time: </Title>
                    <Data>{ getTime(appointmentModal.start_time) } </Data>
                </DetailRow>
                {
                    (appointmentModal.is_completed == false ) &&
                    <DetailRow>
                        <Title>Meeting Link: </Title>
                        <Data>{appointmentModal.meeting_link || "Pending"}</Data>
                    </DetailRow>
                }
            </Container>
        </Overlay>
    );
}

export default AppointmentModal;