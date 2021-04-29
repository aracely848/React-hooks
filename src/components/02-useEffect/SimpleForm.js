import React, { useEffect, useState }  from 'react';
import './effects.css';
import { Message } from './Message';

export const Simpleform = () => {

    const [ formState, setFormstate ] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect( () => {
        //console.log('hey')
    }, []);

    useEffect( () => {
        //console.log('formState cambió')
    }, [formState]);

    useEffect( () => {
        //console.log('email cambió')
    }, [email]);

    const handleInputchange = ({ target }) => {
        
        setFormstate({
            ...formState,
            [ target.name ] : target.value
        });
    }

    return (
        <>
            <h1>UseEffect </h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputchange}
                /> 
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputchange}
                /> 
            </div>

            { (name === '123') && <Message /> }
        </>
    )
}