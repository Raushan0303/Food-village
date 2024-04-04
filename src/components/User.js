import { useState } from "react";
const User = ({name}) =>{

    const [count, setCount] = useState(0);
    const mousePointerStyle = { cursor: "pointer" };

    return (
        <div className="user-card">
            <h1 style={mousePointerStyle}
            onClick={()=>{setCount(count+1)}}>COUNT:  {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Purnea</h3>
            <h4>Conatact: @raushanig</h4>
        </div>
    );
};

export default User;