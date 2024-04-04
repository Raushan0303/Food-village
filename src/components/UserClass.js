import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name: "Dummy",
                location: "Default"
            }
        };
        // console.log(this.props.name+"constructor")
    }

 async componentDidMount(){
        //after the constructor and render method get called component Did mount will be get called
        // console.log(this.props.name+"component Did mount");
        // component Did Mount make a api call
        // why but componnet did mount?
        // it works in same fashion as useEffect work that's why we use component Did mount
        const data = await fetch("https://api.github.com/users/Raushan0303");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

    }
 // if we want to create another state variable inside a class based component we declare all the class inside the this.state ={count:0, count2:0} like this 
    render(){
        // console.log(this.props.name+"render")
        
        const {name,location} = this.state.userInfo;
    
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Conatact: @raushanig</h4>
            </div>
        );
    }
}

export default UserClass;


    // -ââ MOUNTING ----
  
    // Constructor (dummy)
    // Render (dummy)
  
    //     <HTML Dummy >
  
    // componentDidMount() 
  
      //     <API Call>
  
      //     <this.setState> â State variable is updated
    
  
    // ---- UPDATE
  
    // renderApiData(data)
  
      //     <HTML (new API data>)
      //     componentDid Update
 