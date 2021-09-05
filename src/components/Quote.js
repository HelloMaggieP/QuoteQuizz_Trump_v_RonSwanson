import React from 'react';

const Quote = ({ronQuote, donaldQuote})=> {
    
    
    return(
        <>
        <h2>{ronQuote.text}</h2>
        <h2>{donaldQuote}</h2>
        </>
    )
}
export default Quote;