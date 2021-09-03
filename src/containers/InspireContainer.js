import React, {useState, useEffect} from 'react';

const InspireContainer = ()=>{
    const [ronQuote, setRonQuote] = useState({text: ""})
    const [donaldQuote, setDonaldQuote] = useState([])


    useEffect(()=>{
        fetchRonQuote();
    }, []);

    const fetchRonQuote = function(){
        fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(res => res.json())
        .then(ronQuote => setRonQuote({text: ronQuote}))
    }

    const fetchDonaldQuote = function(){
        fetch("https://api.tronalddump.io/random/quote")
        .then(res => res.json())
        .then(donaldQuote => setDonaldQuote(donaldQuote.value))
    }

    return (
        <>
            <h1>Inspire Me</h1>
            {ronQuote.text}
        <br></br>
            <button onClick={fetchRonQuote}>Ron Quote</button>
            {donaldQuote}
            <button onClick={fetchDonaldQuote}>Donald Quote</button>
        </>
    )
}
export default InspireContainer;
