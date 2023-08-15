import { atom } from "recoil";

export const sidebarAtom = atom({
    key:"sidebar",
    default:false,
});

export const loginUser = (setState)=>{
    setState(oldState=>{
        return !oldState;
    });
}