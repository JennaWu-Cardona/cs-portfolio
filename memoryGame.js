// JavaScript File


var cards = document.querySelectorAll(".card");

//array with all of the back of the card pictures
function shuffle(a) {
    for (var i = a.length; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        
        var temp = a[i - 1]
        a[i - 1] = a[j];
        a[j] = temp
    }
}

var animals = [
    "match-img/bear.jpg",
    "match-img/bird.jpg",
    "match-img/cat.jpg",
    "match-img/chicken.jpg",
    "match-img/cow.jpg",
    "match-img/dog.jpg",
    "match-img/giraffe.jpg",
    "match-img/monkey.jpg",
    "match-img/penguin.jpg",
    "match-img/turtle.jpg",
    "match-img/bear.jpg",
    "match-img/bird.jpg",
    "match-img/cat.jpg",
    "match-img/chicken.jpg",
    "match-img/cow.jpg",
    "match-img/dog.jpg",
    "match-img/giraffe.jpg",
    "match-img/monkey.jpg",
    "match-img/penguin.jpg",
    "match-img/turtle.jpg",
];
shuffle(animals);

//memGameJS1
var cardsOpen = 0;
var card1 = {
    image: "blueCard",
    element: undefined,
    id: undefined
};

var card2 = {
    image: "blueCard",
    element: undefined,
    id: undefined
};
//end of memGameJS1

// var blueCard = document.getElementById("blueCard");

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(evt) {
        // alert(parseInt(evt.target.id));
        evt.target.src = animals[parseInt(evt.target.id)];

//memGameJS2
        cardsOpen++;
        
        if (cardsOpen >= 2) {
            card2.element = evt.target;
            card2.id = card2.element.id;
            card2.image = card2.element.src;
//end of memGameJS2

//memGameJS3
            if (card2.element.id !== card1.element.id) {
                if (card2.image !== card1.image) {
                setTimeout(function() {
                    //do what you need here
                    card2.element.src = "blueCard.png";
                    card1.element.src = "blueCard.png";
                }, 1000);
            }
            cardsOpen = 0;
            }
            else{
            cardsOpen = 1;
            }
        }
//end of memGameJS3
        
        else if (cardsOpen === 1) {
            card1.element = evt.target;
            card1.id = card1.element.id;
            card1.image = card1.element.src;
           
            
        }

        // if (cardsOpen === 2 && parseInt(evt.target.id) !== parseInt(evt.target.id)) {
        //     evt.target.src = blueCard.png;
        // }
        // if (cardsOpen === 2 && evt.target.id === evt.target.id){
        //     // alert("test");
        // }
        // alert(cardsOpen);
    });
}
