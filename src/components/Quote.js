import React from 'react';
// import Answer from './Answer';

const Quote = ({displayedQuote})=> {
    
    console.log(displayedQuote)
    return(
        <>
        <h2 className="quote">{displayedQuote.text}</h2>
       
        
        </>
    )
}
export default Quote;


 {/* <Answer displayedQuote={displayedQuote}>{displayedQuote} score = {score}</Answer> */}