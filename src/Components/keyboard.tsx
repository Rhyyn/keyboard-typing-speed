import keyList from "../keyList.json";
import RandomWords from "./randomWords";
import React, { RefObject, useEffect, useRef } from "react";
import Input from "./input";

const keyboard = () => {
    let keysRefs = useRef<HTMLDivElement[]>([]);
    // let refs: any = useRef([]); // arrays of ref
    // let currentRefs: string[] = refs.current; // defining var for array of refs
    const addRefs = (el: any) => {
        // Function to push each span Element into the array of refs
        keysRefs.current.push(el);
    };

    // create an array of Refs that is passed down to randomWords.tsx where we store each words so we can compare the user input vs the word and change the word's color
    let handleRandomWordsRef = useRef<HTMLSpanElement[]>([]);
    const addWordsRefs = (el: HTMLSpanElement) => {
        // Function to push each span Element into the array of refs
        handleRandomWordsRef.current = [...handleRandomWordsRef.current, el];
    };

    // create a ref that is passed down to input.tsx to store the input of the user so we compare it to the current selected word of the list handleRandomWordsRef
    const handleInputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            // event listener on keydown
            let keyPressed: string = event.key.toUpperCase(); // get key user pressed and set it to UpperCase
            if (keyPressed !== null) {
                keysRefs.current &&
                    keysRefs.current.map((item: any, index: number) => {
                        // map through refs and find the element that match user key
                        if (item.id && item.id === keyPressed) {
                            item.classList.add("pressed"); // add class pressed for visual feedback to the user
                            //.toggle
                        }
                    });
            }
        });

        window.addEventListener("keyup", (event) => {
            // event listener on keyup
            console.log(handleInputRef?.current?.value);
            let keyPressed: string = event.key.toUpperCase(); // get key user pressed and set it to UpperCase
            if (keyPressed !== null) {
                keysRefs.current &&
                    keysRefs.current.map((item: any, index: number) => {
                        // map through refs and find the element that match user key
                        if (item.id && item.id === keyPressed) {
                            // console.log(item.classList);
                            item.classList.remove("pressed"); // remove class pressed for visual feedback to the user
                            console.log(keysRefs.current);
                        }
                    });
            }
        });
    }, []);

    return (
        <div className="keyboardContainer">
            <RandomWords addWordsRef={addWordsRefs}></RandomWords>
            <Input ref={handleInputRef}></Input>
            {keyList.keys.map(
                (
                    keyRow: Array<string>,
                    index: number // map through json
                ) => (
                    <div className="row" key={index}>
                        {keyRow.map(
                            (
                                keyId: string,
                                index: number // map through each key in the json
                            ) => (
                                <div
                                    ref={addRefs}
                                    className={`key ${keyId}`}
                                    id={keyId.toUpperCase()}
                                    key={keyId + index}
                                >
                                    <span className="word">{keyId}</span>
                                </div>
                            )
                        )}
                    </div>
                )
            )}
        </div>
    );
};

export default keyboard;
