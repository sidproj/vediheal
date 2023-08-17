import { atom } from "recoil";

// should have
/*
    Reiki name,
    Appointment ID,
    Name,
    emailId,
    Date of appointment,
    Time,
    Meeting Link(not required),
 */

export const AppointmentModalAtom = atom({
    key:"appointmentModal",
    default:null,
});