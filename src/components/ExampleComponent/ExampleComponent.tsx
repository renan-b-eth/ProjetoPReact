import React, { useState } from "react";

const ExampleComponent: React.FC = () => {

    const [text, setText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setText(event.target.value);
    }

    return(
        <>
            <div>
                <b>Texto:</b>
                <input type="text" onBlur={ handleChange }/>
                <p>Texto digitado - OnBlur: {text} </p>
                <br></br>
                
            </div>
        </>
    )
}

export default ExampleComponent