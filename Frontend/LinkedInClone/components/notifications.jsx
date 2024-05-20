import { memo } from "react";

const NotificationsComponent = memo(function({data}) {
    console.log('Rendering notifications component' +  JSON.stringify(data.notifications))
    return (
        <div>
            <h1> LinkedIn Notiifcations </h1> <button onClick={() => {
                    data.refresh();
                }}> Refresh</button><br/><br/>
            { data.notifications.map((val, idx) => {
                return <div key={val.id}>{val.id} : {val.sender} : {val.notification}</div>
            })}    
        </div>
    )
}) 

export default NotificationsComponent