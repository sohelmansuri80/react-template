import React from "react";
import FirstComponent from "./components/first.component";

const App = () =>{
    return(
        <div className="container">
            <h1>This is my React app!</h1>
            <FirstComponent/>
        </div>
    );
};

export default App;