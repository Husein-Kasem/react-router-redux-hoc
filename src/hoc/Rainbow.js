import React from 'react';

const Rainbow = (WrappedComponent)=>{
    const colours = ['red', 'pink', 'blue', 'yellow', 'green'];
    // * 5 to get a random number between 0 and 5
    const randomColour = colours[Math.floor(Math.random() * 5)];

    // in materialize we add a class name of the name of the colour followed by "-text"
    // example bleu-text
    const className = randomColour + '-text';

    // now we return the component that we received wrapped with
    // a div with the needed materlialize class name to change the text colour
    return (props) =>{
        return(
            <div className={className}>
                <wrappedComponent{...props}/>
            </div>
        )
    }
}

export default Rainbow;