import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const IncreaseSteps = () =>{
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
        // console.log(steps);
    }

    useEffect(() => {
        console.log(steps);
    }, [steps])
    return (
        <div style={{border: '2px solid purple', backgroundColor: 'pink', margin: '20px'}}>
            <h2>This is my smart watch</h2>
            <h3>My current stapes: {steps}</h3>
            <button onClick={IncreaseSteps}>run the way</button>
            <Display name="garmin" steps={steps}></Display>
            
        </div>
    );
};

export default Watch;