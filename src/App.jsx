import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobAtom, networkAtom,notificationAtom,Messaging_atom, totalNotificationSelector} from "./Atom"


function App() {
  

  return (
  
      <div>
      <RecoilRoot>
        <RenderCounts/>
        </RecoilRoot>
    </div>
  )
}
function RenderCounts()
{const networkNotificationCount=useRecoilValue(networkAtom);
  const jobAtomCount=useRecoilValue(jobAtom);
  const notification_atom=useRecoilValue(notificationAtom);
  const [messagingAtom,setMessagingAtom]=useRecoilState(Messaging_atom);
  const totalNotification_count=useRecoilValue(totalNotificationSelector);
   return(
    <div>
      <button>Home</button>
       <button>My network {networkNotificationCount>=100?"99+":networkNotificationCount}</button>
       <button>Jobs {jobAtomCount}</button>
       <button>Messaging {messagingAtom}</button>
       <button>Notification {notification_atom}</button>
       <button>Me {totalNotification_count}</button>
    </div>
   )
}

export default App
