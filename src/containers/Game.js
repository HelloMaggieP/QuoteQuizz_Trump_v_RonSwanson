import React, {useState, useEffect} from 'react';
import Quote from '../components/Quote';

const Game = ()=>{
    const [ronQuote, setRonQuote] = useState({text: ""})
    const [donaldQuote, setDonaldQuote] = useState([])
   
    useEffect(()=>{
        return (ronQuote)
    },[ronQuote])

    useEffect(()=>{
        return (donaldQuote)
    },[donaldQuote])

    const fetchRonQuote = function(){
        fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(res => res.json())
        .then(ronQuote => setRonQuote({text: ronQuote}))
        return ronQuote
    }
    const fetchDonaldQuote = function(){
        fetch("https://api.tronalddump.io/random/quote")
        .then(res => res.json())
        .then(donaldQuote => setDonaldQuote(donaldQuote.value))
    }

    // const handleClickNewQuote = ()=>{
    //     const option = Math.floor(Math.random() * 2);
    //     const options = [fetchRonQuote, fetchDonaldQuote]
    //     if (option === 0){
    //         return options[0];
    //     }else{
    //         return options[1];
    //     }  
    // }
    
    return (
        <>
            <h1>Who Said This?</h1>
            {/* <button onClick={handleClickNewQuote}>Get New Quote</button> */}
               
            <Quote ronQuote = {ronQuote.text} donaldQuote = {donaldQuote} />
        
            <button onClick={fetchRonQuote}>Ron Quote</button>
            <button onClick={fetchDonaldQuote}>Donald Quote</button>
        </>
    )
}
export default Game;
