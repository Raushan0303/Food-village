const { useEffect, useState } = require("react")

const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",(event)=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online",(event)=>{
            setOnlineStatus(true);
        });

    });

    //boolean
    return onlineStatus;
}

export default useOnlineStatus;