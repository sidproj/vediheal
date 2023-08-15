import { atom } from "recoil";

export const userAtom = atom({
    key:"user",
    default:null,
});

export const loginUser = (newUser,setState)=>{
    setState(oldState=>{
        return newUser;
    });
}

export const logoutUser = (setState)=>{
    setState(oldState=>{
        return null;
    });
}