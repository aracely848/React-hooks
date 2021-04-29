import React, { useRef } from 'react';

import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const InputRef = useRef();
    //console.log(ref);

    const handleClick = () =>{
        InputRef.current.select();
        console.log(InputRef);
    }

    return (
        <div>
            <h1> Focus Screen</h1>
            <hr />

            <input
                className="form-control"
                placeholder="Su nombre"
                ref={ InputRef }
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}