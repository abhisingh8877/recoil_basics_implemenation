import { atom, selector } from "recoil";
export const networkAtom=atom({
    key:"networkAtom",
    default:104
})
export const jobAtom=atom({
    key:"jobAtom",
    default:0
})
export const notificationAtom=atom({
    key:"notification_atom",
    default:12
})
export const Messaging_atom=atom({
    key:"messagingAtom",
    default:0
})
export const totalNotificationSelector=selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const networkAtomCount=get(networkAtom)
        const jobAtomCount=get(jobAtom)
        const  notificationatom=get(notificationAtom);
        const messaging_atom=get(Messaging_atom);
        return networkAtomCount+jobAtomCount+notificationatom+messaging_atom
    }
})