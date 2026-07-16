console.log("Internal verification JS is linked");

// Card & Deck Builder
const suite: Suite[] = ["❤️", "♠️", "♣️", "♦️"];
const value: (string | number)[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
type Suite = "❤️" | "♠️" | "♣️" | "♦️";
let player1: Card[] = [];

interface Card {
    value: number | string;
    suite: Suite;
}

class Card implements Card {
    constructor(value: number | string, suite: Suite) {
        this.value = value;
        this.suite = suite;
    }
}

interface Deck {
    deckOfCards: Card[];
}

class Deck implements Deck {
    constructor() {
        this.deckOfCards = [];
    }
    createDeck() {
        suite.forEach((suite) => {
            value.forEach((value) => {
                let tempDeck = new Card(value, suite);
                this.deckOfCards.push(tempDeck);
            });
        });
    }

    shuffleBot() {
        for (let i = this.deckOfCards.length - 1; i > 0; i--) {
            let randomCard = Math.floor(Math.random() * (i + 1));
            let tempCard = this.deckOfCards[i];
            this.deckOfCards[i] = this.deckOfCards[randomCard]!;
            this.deckOfCards[randomCard] = tempCard!;
        }
    }

    drawCard() {
        return this.deckOfCards.pop();
    }

    dealCards(numberOfCards: number) {
        if (numberOfCards > this.deckOfCards.length) {
            console.log(`insufficient number of Cards`);
        } else {
            for (let i = 1; i <= numberOfCards; i++) {
                let deal = this.drawCard()!;
                player1.push(deal);
                let remainingCards = this.deckOfCards.length;
                console.log(remainingCards);
            }
        }
    }
}

const deck = new Deck();

// functionality of HTML starts here

const addPlayer = document.getElementsByClassName("add")[0];
const addCard = document.getElementsByClassName("add")[1];
const subtractPlayer = document.getElementsByClassName("subtract")[0];
const subtractCard = document.getElementsByClassName("subtract")[1];
const playersDisplay = document.getElementById("playersDisplay") as HTMLInputElement;
const numOfCardsPerPlayerDisplay = document.getElementById(
    "numOfCardsPerPlayerDisplay"
) as HTMLInputElement;
const remainingCardsDisplay = document.getElementById("remainingCardsDisplay");
let numOfPlayers: number = 0;
let numOfCards: number = 0;
const zero: number = 0;

//Add Players

addPlayer!.addEventListener("click", function () {
    numOfPlayers += 1;
    console.log("Add a Player");
    playersDisplay.value = numOfPlayers.toString();
});

subtractPlayer!.addEventListener("click", function () {
    if (numOfPlayers <= 1) {
         console.log("if branch ran", playersDisplay.valueAsNumber);
        playersDisplay.value = zero.toString();
        numOfPlayers = 0;
    } else {
        console.log("else branch ran", playersDisplay.valueAsNumber);
        numOfPlayers -= 1;
        playersDisplay.value = numOfPlayers.toString();
    }
});

// Add Cards per player

addCard!.addEventListener("click", function () {
    numOfCards += 1;
    numOfCardsPerPlayerDisplay.value = numOfCards.toString();
});

subtractCard!.addEventListener("click", function () {
    if (numOfCards <= 1) {
        numOfCardsPerPlayerDisplay.value = zero.toString();
        numOfCards = 0;
    } else {
        numOfCards -= 1;
        numOfCardsPerPlayerDisplay.value = numOfCards.toString();
    }
});

// Code below was used to test in terminal while building the classes & functions not for final product.

/* const card = new Card(5, "❤️");
console.log(card.suite);
console.log(card.value);

deck.createDeck();
console.log(deck.deckOfCards);
deck.shuffleBot();
console.log(deck.deckOfCards);
console.log(deck.deckOfCards.length);
deck.drawCard();
console.log(deck.deckOfCards.length);
console.log(player1);
deck.dealCards(7);
console.log(player1);
console.log(deck.deckOfCards.length);
deck.dealCards(45); */
