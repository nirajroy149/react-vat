import React,{useEffect} from 'react';
import "./deck.css";
import $ from "jquery";
import jQuery from "jquery";

function Deck() {

    var btnRefresh = document.getElementsByClassName("btn-refresh");

    var deckSize = 52;
    var d = 52;
    for( d=deckSize; d > 0; d--) { $('container select').append('<option value='+d+'>'+d+'</option>'); }

    var numberOfCards = 52;

    function deckOfCards() { 
        
        var randomValue, randomSuit, cardSingle, cardSuit, cardValue;

        var n = 0;
        var i = 0;
        var c = 0;
        var m = 0;

        var cardList = [];
        var listValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];
        var listSuit = ['♠', '♦', '♥', '♣'];

        $( 'card' ).remove(); /////////////////////////////////////////

    function cardGenerate() {  
        randomValue = listValue[Math.floor(Math.random() * listValue.length)];
        randomSuit = listSuit[Math.floor(Math.random() * listSuit.length)];
        cardSingle = randomSuit + randomValue; 
        
        
        if(jQuery.inArray(cardSingle, cardList) !== -1) {
            //rerun if card already exists
            // console.log(cardSingle)////////
            cardGenerate();
            return;
        }else{
            //push card to array if is doesn't
            cardList.push(cardSingle);
        }
    }

    for( i=0; i < deckSize; i++) { cardGenerate(); }



    function cardCode() { 
        $('container').append('<card><corner><value></value><suit></suit></corner><center></center><corner><value></value><suit></suit></corner></card>');
    }

    for( n=0; n < numberOfCards; n++) { cardCode(); }




        $( 'card' ).each(function() {

        cardSuit = cardList[c].substring(0).replace(/\d+/g, '').replace('A', '').replace('K', '').replace('Q', '').replace('J', '');
        cardValue = cardList[c].substring(1);

        $(this).addClass('no-' + cardValue);
        $(this).find('suit').html(cardSuit);

        $(this).find('value').html(cardValue);

        if (cardValue ==='A') { $(this).find('center').html( '<symbol>'+cardSuit+'&#xFE0E;</symbol>' ); }
        else if (cardValue === 'K'  && (cardSuit ==='♥' || cardSuit === '♦')){ $(this).find('center').html('&#x2654;&#xFE0E;'); }
        else if (cardValue === 'K'  && (cardSuit ==='♠' || cardSuit === '♣')){ $(this).find('center').html('&#x265a;&#xFE0E;'); }
        else if (cardValue === 'Q'  && (cardSuit ==='♥' || cardSuit === '♦')){ $(this).find('center').html('&#x2655;&#xFE0E;'); }
        else if (cardValue === 'Q'  && (cardSuit ==='♠' || cardSuit === '♣')){ $(this).find('center').html('&#x265b;&#xFE0E;'); }
        else if (cardValue === 'J'  && (cardSuit ==='♥' || cardSuit === '♦')){ $(this).find('center').html('&#x2657;&#xFE0E;'); }
        else if (cardValue === 'J'  && (cardSuit ==='♠' || cardSuit === '♣')){ $(this).find('center').html('&#x265d;&#xFE0E;'); }
        else { 
        for( m=0; m < cardValue; m++) { $(this).find('center').append( '<symbol>'+cardSuit+'&#xFE0E;</symbol>' ); }
        }
        if (cardSuit ==='♥') {cardSuit = 'heart';}
        else if (cardSuit === '♦'){ cardSuit = 'diamond'; }
        else if (cardSuit === '♠'){ cardSuit = 'spade'; }
        else if (cardSuit === '♣'){ cardSuit = 'club'; }
        $(this).addClass(cardSuit);
        c++;
        });

    }//deckOfCards


    $(btnRefresh).on('click', function(e) {
    e.preventDefault();
    numberOfCards = ($('.cardAmount').val());
    deckOfCards();
    });

    $(document).ready(function() {
    deckOfCards();
    });





  return (
    <>
    <container>
        <h1>Deck of CSS Cards shuffled with jquery</h1>
        <controls>
    
        Amount Of Cards <select name="cardAmount" className="cardAmount"></select> <span className="btn-refresh">Shuffle Deck &rsaquo;</span>
    </controls>
    </container>
    </>
  )
}

export default Deck;