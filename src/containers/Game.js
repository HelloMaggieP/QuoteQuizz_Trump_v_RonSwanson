import React, {useState, useEffect} from 'react';
import Quote from '../components/Quote';

const Game = ()=>{
    const [ronQuote, setRonQuote] = useState({text: ""})
    const [donaldQuote, setDonaldQuote] = useState([])
    //Q:Not sure why Donald Quote takes [] and Ron is ""
   
    useEffect(()=>{
        return console.log(ronQuote)
    },[ronQuote])

    useEffect(()=>{
        return console.log(donaldQuote)
    },[donaldQuote])

    //fetch requests to APIs
    const fetchRonQuote = function(){
        console.log("Ron Function Called")
        fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(res => res.json())
        .then(ronQuote => setRonQuote({text: ronQuote}))
    }
    const fetchDonaldQuote = function(){
        console.log("Donald Function Called")
        fetch("https://api.tronalddump.io/random/quote")
        .then(res => res.json())
        .then(donaldQuote => setDonaldQuote(donaldQuote.value))
    }

    //random choice generator between which API to send a fetch request to
    const handleClickNewQuote = ()=>{
        const option = Math.floor(Math.random() * 2);
        const options = [fetchRonQuote, fetchDonaldQuote]
            if (option === 0){
                return options[0]();
            }else{
                return options[1]();
            }     
    }
    
    return (
        <>
            <h1>Who Said This?</h1>
            <button onClick={handleClickNewQuote} >Get New Quote</button>
               
            <Quote ronQuote = {ronQuote} donaldQuote = {donaldQuote}/>
            {/* <button onClick={fetchRonQuote}>Ron Quote</button>
            <button onClick={fetchDonaldQuote}>Donald Quote</button> */}
        </>
    )
}
export default Game;