import keyList from '../keyList.json';
import RandomWords from './randomWords';
import React, { useEffect, useRef } from 'react';
import Input from './input';


const keyboard = () => {

    let refs: any = useRef([]); // arrays of ref
    let currentRefs: string[] = refs.current; // defining var for array of refs
    const inputRef: any = useRef(); // ref of input


    const addRefs = (el: any) => {  // Function to push each span Element into the array of refs
        currentRefs.push(el)
    }

    useEffect(() => {

        window.addEventListener('keydown', event => {   // event listener on keydown
            let keyPressed: string = event.key.toUpperCase(); // get key user pressed and set it to UpperCase
            if (keyPressed !== null) {
                refs.current.map((item: any, index: number) => { // map through refs and find the element that match user key
                    if (item.id === keyPressed) {
                        item.classList.add('pressed') // add class pressed for visual feedback to the user
                    }
                });
            }
        });

        window.addEventListener('keyup', event => { // event listener on keyup
            let keyPressed: string = event.key.toUpperCase(); // get key user pressed and set it to UpperCase
            if (keyPressed !== null) {
                refs.current.map((item: any, index: number) => { // map through refs and find the element that match user key
                    if (item.id === keyPressed) {
                        item.classList.remove('pressed') // remove class pressed for visual feedback to the user
                    }
                });
            }
        })
    }, [])


    return (
        <div className='keyboardContainer'>
            <RandomWords></RandomWords>
            <Input ref={inputRef}></Input>
            {keyList.keys.map((keyRow: Array<string>, index: number) => ( // map through json 
                <div className='row' key={index}>
                    {keyRow.map((keyId: string, index: number) => ( // map through each key in the json 
                        <div ref={addRefs} className={`key ${keyId}`} id={keyId.toUpperCase()} key={keyId + index} >
                            <span className='word'>{keyId}</span>
                        </div>
                    ))}
                </div>
            ))
            }

        </div >

    )

}

export default keyboard;
