import { useRef } from 'react';
import words from '../words.json';


const randomWords = () => {
    let randomWords: any[] = []; // define aray for random picked words
    let refs = useRef([]); // define refs
    let currentRefs: string[] = refs.current; // define array for refs


    function getRandom(arr:Array<string>, n:number) { // get a random number (n) of items in a given array (arr)
        var result:string[] = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        randomWords.push(result) // push the result to the new Array
        return result;
    }   
        getRandom(words.commonWords, 100)

    const addRefs = (el: any) => { // function to add refs to the array
        currentRefs.push(el)
    }

    return (
        <div className='randomWordsContainer'>
                {randomWords[0].map((item:string, index:number) => { // map through the random selected words
                    return <span ref={addRefs} className='word' key={index}>{item}</span>
                })}
        </div>
    )
}

export default randomWords;