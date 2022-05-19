import React from "react";

const input = React.forwardRef((props, ref: any) => { // forward ref to keyboard component


    return (
        <React.Fragment>
            <input  ref={ref} className="input"></input>
        </React.Fragment>

    )
})

export default input;