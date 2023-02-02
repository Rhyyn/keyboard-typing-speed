import React from "react";
import { useState, useRef } from "react";

const input = React.forwardRef((_, ref) => {
    const [currValue, setCurrValue] = useState("");

    const handleChange = (event: any) => {
        document.addEventListener("keyup", (event) => {
            if (event.code === "Space") {
                setCurrValue("");
            }
        });

        setCurrValue(event.target.value);
    };

    return (
        <input
            id="userInput"
            value={currValue}
            onChange={(event) => handleChange(event)}
            ref={ref as React.LegacyRef<HTMLInputElement>}
        ></input>
    );
});

export default input;
