class card {
    constructor(type, number, title, id) {
        this.type = type;
        this.number = number;
        this.title = title;
        this.id = id;
    }
}

var secret_one;
var secret_two;
var secret_three;
var secret_four;
var secret_five;

var Selected_Clubs = [];
var Selected_Diamonds = [];
var Selected_Hearts = [];
var Selected_Spades = [];

var clubs_index = 5;
var spades_index = 5;
var hearts_index = 5;
var diamonds_index = 5;

var Clubs = [];
var Diamonds = [];
var Hearts = [];
var Spades = [];

var card_types = ["Clubs", "Diamonds", "Hearts", "Spades"];

for (let index = 1; index <= 13; index++) {
    var t;
    switch (index) {
        case 1:
            t = "A"
            break;
        case 11:
            t = "J"
            break;
        case 12:
            t = "Q"
            break;
        case 13:
            t = "K"
            break;

        default:
            t = index;
            break;
    }
    Clubs.push(new card("Clubs", index, t, index));
    Diamonds.push(new card("Diamonds", index, t, (index + 13)));
    Spades.push(new card("Spades", index, t, (index + 26)));
    Hearts.push(new card("Hearts", index, t, (index + 39)));

}

$(document).ready(function () {

    YeniKart = function YeniKart() {

        var myCard = PickACard();
        var id = "cardView" + myCard.id;

        $("#drawer").removeClass("empty-card");
        $("#drawer").empty();
        $("#drawer").append($("#" + id).clone());

        var rowID;
        switch (myCard.type) {
            case "Clubs":
                rowID = "col-" + clubs_index + "-2";
                clubs_index--;
                var theCard = $("#" + rowID + " .card");
                rowID = "col-" + clubs_index + "-2";
                $("#" + rowID).removeClass("empty-card");
                $("#" + rowID).append(theCard);
                break;
            case "Diamonds":
                rowID = "col-" + diamonds_index + "-4";
                diamonds_index--;
                var theCard = $("#" + rowID + " .card");
                rowID = "col-" + diamonds_index + "-4";
                $("#" + rowID).removeClass("empty-card");
                $("#" + rowID).append(theCard);
                break;
            case "Spades":
                rowID = "col-" + spades_index + "-1";
                spades_index--;
                var theCard = $("#" + rowID + " .card");
                rowID = "col-" + spades_index + "-1";
                $("#" + rowID).removeClass("empty-card");
                $("#" + rowID).append(theCard);
                break;
            case "Hearts":
                rowID = "col-" + hearts_index + "-3";
                hearts_index--;
                var theCard = $("#" + rowID + " .card");
                rowID = "col-" + hearts_index + "-3";
                $("#" + rowID).removeClass("empty-card");
                $("#" + rowID).append(theCard);
                break;

            default:
                break;
        }

        // if ($("#row-5 .card-place .card-slot").length < 1) {
        //     $("#col-5-5 .card").empty();
        //     var tempCard = "cardView" + secret_five.id;;
        //     $("#col-5-5 .card").append($("#" + tempCard).clone());
        // }

        // if ($("#row-4 .card-place .card-slot").length < 1) {
        //     $("#col-4-5 .card").empty();
        //     var tempCard = "cardView" + secret_five.id;;
        //     $("#col-4-5 .card").append($("#" + tempCard).clone());
        // }

        // if ($("#row-3 .card-place .card-slot").length < 1) {
        //     $("#col-3-5 .card").empty();
        //     var tempCard = "cardView" + secret_five.id;;
        //     $("#col-3-5 .card").append($("#" + tempCard).clone());
        // }
        // if ($("#row-2 .card-place .card-slot").length < 1) {
        //     $("#col-2-5 .card").empty();
        //     var tempCard = "cardView" + secret_five.id;;
        //     $("#col-2-5 .card").append($("#" + tempCard).clone());
        // }
        // if ($("#row-1 .card-place .card-slot").length < 1) {
        //     $("#col-1-5 .card").empty();
        //     var tempCard = "cardView" + secret_five.id;;
        //     $("#col-1-5 .card").append($("#" + tempCard).clone());
        // }
    };

    PickACard = function PickACard() {

        const cardType = RandomNumber(1, 4);
        var type = card_types[cardType - 1];
        var cardNumber = RandomNumber(2, 12);
        var id;
        switch (type) {
            case "Clubs":
                Selected_Clubs.push(cardNumber);
                id = Number(cardNumber);
                break;
            case "Diamonds":
                Selected_Diamonds.push(cardNumber);
                id = (Number(cardNumber) + 13);
                break;
            case "Spades":
                Selected_Spades.push(cardNumber);
                id = (Number(cardNumber) + 26);
                break;
            case "Hearts":
                Selected_Hearts.push(cardNumber);
                id = (Number(cardNumber) + 39);
                break;

            default:
                break;
        }

        return new card(type, cardNumber, cardNumber, id);

    };

    Stop_The_Game = function Stop_The_Game() {
        $("#btnKartCek").hide();
        $("#btnNewGame").show();
    };

    NewGame = function NewGame() {
        location.reload();
    };

    StartTheGame = function StartTheGame() {

        for (let index = 0; index < 5; index++) {
            switch (index) {
                case 0:
                    secret_one = PickACard();
                    break;
                case 1:
                    secret_two = PickACard();
                    break;
                case 2:
                    secret_three = PickACard();
                    break;
                case 3:
                    secret_four = PickACard();
                    break;
                case 4:
                    secret_five = PickACard();
                    break;
                default:
                    break;
            }

        }

    };

    RandomNumber = function RandomNumber(start, stop) {
        return Math.floor(Math.random() * stop) + start;
    };

    StartTheGame();

});