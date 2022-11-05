import Speaker from "./Speaker";
import {data} from "../../SpeakerData";
// import Speaker from "./Speaker";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
// import { resolve } from "styled-jsx/css";
import ReactPlaceHolder from "react-placeholder";
import useRequestSpeakers from "../hooks/useRequestDelay";

function SpeakersList({showSessions}){

  const {
    data : speakersData , 
    requestStatus,
     error,
    updateRecord,
  } = useRequestDelay(2000 , data)

   
   if(requestStatus === REQUEST_STATUS.FAILURE){
    return(
      <div className="text-danger">
        ERROR: <b>loading Speaker data Failed {error}</b>
      </div>
    )
   }
  //  if (isLoading === true) return <div>Loading...</div>

    return(
        <div className="container speakers-list">
          <ReactPlaceHolder
          type = "media"
          rows = {15}
          className="speakerslist-placeholder"
          ready={requestStatus === REQUEST_STATUS.SUCCESS}
          >
        <div className="row">
          {data.map(function (speaker){
             return(
               <Speaker 
               key ={speaker.id} 
               speaker={speaker}
               showSessions={showSessions}
               onFavoriteToggle={(doneCallBack) =>{
                   updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite,
                   }, doneCallBack);
               }} />
              );
          })}
      </div>
      </ReactPlaceHolder>
    </div>
    );
}

export default SpeakersList;