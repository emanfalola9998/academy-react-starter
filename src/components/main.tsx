import { useState } from "react";
import isFizzBuzz from "../utils/FizzBuzz";
// you get determine relative pathways the same way you would bash command out of this
// directory where main.tsx is located to whatever file you wanted to reach

export default function FizzBuzzedList(): JSX.Element{
    //Execute useState, passing in an Initial value
    //Destructure its return value (array) into two variables
    const [chosenNumber, correspondingNumber] = useState(1)
    const [storeChosenNumber, getCorrespondingNumber] = useState<(string|number)[]>([""]);

    //function to add one to the current counter value
    const addOne = () => {
        correspondingNumber(chosenNumber => chosenNumber + 1)
        //pass the current number to a function that checks whether it should be FizzBuzzed
        const fizzBuzzDeterminer = isFizzBuzz(chosenNumber)
        //add fizzbuzzed number to a running stored record of all fizzbuzzed numbers in an array
        getCorrespondingNumber([...storeChosenNumber, fizzBuzzDeterminer])
    }   


return (
    <>
        <h1>FizzBuzzed Numbers</h1>
        <p>Calculate Fizzbuzzed numbers: {storeChosenNumber}</p>
        <p>number: {chosenNumber}</p>
        <button onClick={addOne}>Next</button>
    </>
);
}