import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props){
        super(props);
        // console.log("Parent constructor is called");
    }

 componentDidMount(){
        // console.log("Parent component Did mount")

        console.log(json);
    }

    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namste React web series</h2>
                <UserClass name={"Akshay Saini"} location={"Purnea"} />
                <UserClass name={"Raushan Choudhary"} location={"Purnea"} />
            </div>
        );
    }
}

export default About;
/**
 * Parent Constructor
 * Parent Render
 *   
 *      -Akshay Saini Constructor
 *      -Akshay saini render
 *      
 * 
 *      -Raushan Choudhary Constructor
 *      -Raushan Choudhary render
 *      
 *      <DOM UPDATED - IN SINGLE BATCH>
 *      -Akshay saini Component Did Mount
 *      -Raushan Choudhary Component Did Mount
 * 
 * Parent component Did Mount
 * 
 *      
 */