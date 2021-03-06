import '../App.css';
import React, {useState, useEffect} from 'react';
import Ron from '../images/Ron.png';
import Trump from '../images/Trump.png';
import Quote from '../components/Quote';

const Game = ()=>{
    const [ronQuote, setRonQuote] = useState({text: "", tag:"ron"})
    const [donaldQuote, setDonaldQuote] = useState({text:"", tag:"donald"})
    const [displayedQuote, setDisplayedQuote] = useState({text:"", tag:"donald"})
    const [checkedAnswer, setCheckAnswer] = useState(null)
    // let answer = ""
    //Q:Not sure why Donald Quote takes [] and Ron is ""
   
    //Watching for changes in the quote values
    useEffect(()=>{
        if (ronQuote !== displayedQuote){
            setDisplayedQuote({text: ronQuote.text, tag: ronQuote.tag})
        }
    }, [ronQuote]);

    useEffect(()=>{
        if(donaldQuote !== displayedQuote){
            setDisplayedQuote({text: donaldQuote.text, tag: donaldQuote.tag})
        }
    }, [donaldQuote])

    //Q:Not sure how to write a useEffect to load quote

    //fetch requests to APIs
    const fetchRonQuote = function(){
        fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(res => res.json())
        .then(ronQuote => setRonQuote({text: ronQuote, tag:"ron"}))
    }
    const fetchDonaldQuote = function(){
        fetch("https://api.tronalddump.io/random/quote")
        .then(res => res.json())
        .then(donaldQuote => setDonaldQuote({text: donaldQuote.value, tag:"donald"}))
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
    
    //Displayed Quote doesn't have a tag. Can't seem to add on line 17 and 23.
    const checkAnswer = (e)=>{
        // let answer = ""
        if (e.target.alt === displayedQuote['tag']){
            return <h5>"Correct"</h5> //NEITHER IS THIS
        }else{
            return <h5>"Nope. Guess Again!"</h5> //THIS IS NOT DISPLAYING
        }
    };
    
    // useEffect(()=>{
    //     setCheckAnswer(checkedAnswer);
    // }, [checkAnswer])

    return (
        <>
            <h1>Who Said This?</h1>
            <h4>Answer: {checkedAnswer}</h4>
            <button onClick={handleClickNewQuote}>Get New Quote</button>
            <Quote className="quote" displayedQuote={displayedQuote}/>
            {/* <Answer /> */}
            <img className="image" src={Ron} alt="ron" value="ron" onClick={checkAnswer}/>
            <img className="image" src ={Trump} alt="donald" value="donald" onClick={checkAnswer}/>
        
            {/* <Answer onClick={checkAnswer}/> */}
        </>
    )
}
export default Game;