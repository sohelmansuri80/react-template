import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageSelector, updateMessage } from "../redux/first/firstSlice";

const FirstComponent = () => {
    const dispatch = useDispatch();
    const message = useSelector(messageSelector);
    console.log("message: ", message);

    const handleMessageChange = (event) =>{
        dispatch(updateMessage(event.target.value));
    };

    return(
        <div className="first-component">
            <span className="message">{message}</span>
            <br/>
            <input type="text" value={message} onChange={handleMessageChange}/>
        </div>
    );

};

export default FirstComponent;