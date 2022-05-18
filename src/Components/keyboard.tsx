import keyList from '../keyList.json';
import React, { useRef } from 'react';
import words from "../words.json";

const keyboard = () => {


    words.commonWords.forEach(element => {
        console.log(element);
        
    });
    

    document.addEventListener("keydown", event => {
        const keyPressed: string = event.key.toUpperCase();
        const keyElement = document.getElementById(keyPressed);
        
        if (keyElement !== null) {
            keyElement.classList.add("pressed")
            document.addEventListener('keyup', () => {
                keyElement.classList.remove("pressed")
            })
        } else {
            return null;
        }
    })


    return (
        <div className='keyboardContainer'>
            <textarea></textarea>
            {keyList.keys.map((keyRow: Array<string>, index: number) => (
                <div className='row' key={index}>
                    {keyRow.map((keyId: string, index: number) => (
                        <div className={`key ${keyId}`} id={keyId.toUpperCase()} key={keyId + index} ><span>{keyId}</span></div>
                    ))}
                </div>
            ))
            }

        </div >

    )

}

export default keyboard;
