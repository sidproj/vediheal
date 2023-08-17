import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { AppointmentModalAtom } from "../Recoil/appintmentModal";

const AppointmentCard = styled.div`
    background-color:#f8cfc1;
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:1em;
    border-radius:1em;
    position:relative;
`


const Img = styled.img`
    height:8em;
    object-fit:contain;
`

const Details = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:1em;
`

const DetailsTitle = styled.div`
    text-align:center;
    font-weight:600;
    font-size:1.1em;
`

const DetailsDescription = styled.div`
    font-size:1em;
`

const Select = styled.div`
    position:absolute;
    bottom:12px;
    right:15px;
`

const Appointment = (props)=>{

    const [appointmentModal,setAppointmentModal] = useRecoilState(AppointmentModalAtom);

    const data = props.data;

    const handleModalSet = ()=>{
        setAppointmentModal(data);
    }

    const getDate = (str)=>{
        const date = new Date(str);
        return (date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear());
    }


    return (
        <AppointmentCard>
            <Img src={data.reiki_id.image}/>
            <Details>
                <DetailsTitle>{data.reiki_id.name}</DetailsTitle>
                <DetailsDescription>
                    Date : {getDate(data.start_time)}
                </DetailsDescription>
                {
                    data.meeting_link && (
                        <DetailsDescription>
                            <a href={data.meeting_link} target="_blank"> Meeting Link</a>
                        </DetailsDescription>
                    )
                }
            </Details>
            <Select>
                <FontAwesomeIcon color="black"  icon={faArrowRight} onClick={handleModalSet}/>
            </Select>
            {/* replace with icon */}
        </AppointmentCard>
    )
}

export default Appointment;