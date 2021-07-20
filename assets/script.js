class card {
    constructor(type, number, title, id, selected) {
        this.type = type;
        this.number = number;
        this.title = title;
        this.id = id;
        this.selected = selected;
    }
}

var secret_one;
var secret_two;
var secret_three;
var secret_four;
var secret_five;

var clubs_index = 6;
var spades_index = 6;
var hearts_index = 6;
var diamonds_index = 6;

var Clubs = [];
var Diamonds = [];
var Hearts = [];
var Spades = [];

var Deck = [];

var card_types = ["Clubs", "Diamonds", "Hearts", "Spades"];

for (let index = 1; index <= 13; index++) {
    var t;
    var check = false;
    switch (index) {
        case 1:
            t = "A"
            check = true;
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
    var tempCard = new card("Clubs", index, t, index, check);
    Clubs.push(tempCard);
    Deck.push(tempCard);

    tempCard = new card("Diamonds", index, t, (index + 13), check);
    Diamonds.push(tempCard);
    Deck.push(tempCard);

    tempCard = new card("Spades", index, t, (index + 26), check);
    Spades.push(tempCard);
    Deck.push(tempCard);


    tempCard = new card("Hearts", index, t, (index + 39), check);
    Hearts.push(tempCard);
    Deck.push(tempCard);

}



$(document).ready(function () {

    MessageBox = function MessageBox(title, text, icon, confirmButtonText) {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: confirmButtonText
        }).then((result) => {
            if (result.isConfirmed) {
                Stop_The_Game();
            }
        })
    }

    YeniKart = function YeniKart() {
        var myCard;
        do {
            var myCard = PickACard();
        } while (myCard.selected == true);

        myCard.selected = true;
        $("#remCard").text(Deck.filter(a => a.selected == false).length);

        var id = "cardView" + myCard.id;
        $("#drawer").removeClass("empty-card");
        $("#drawer").empty();
        $("#drawer").append($("#" + id).clone());

        PushCard(myCard);

        var maxindex = MaxIndex();

        if (maxindex == 5 && $("#col-5-5").hasClass("turned") == true) {
            $("#col-5-5").empty();
            var tempCard = "cardView" + secret_five.id;;
            $("#col-5-5").append($("#" + tempCard).clone());
            $("#col-5-5").removeClass("turned");

            switch (secret_five.type) {
                case "Clubs":
                    PullBack("club_ace", 2);
                    break;
                case "Diamonds":
                    PullBack("diamond_ace", 4);
                    break;
                case "Spades":
                    PullBack("spade_ace", 1);
                    break;
                case "Hearts":
                    PullBack("heart_ace", 3);
                    break;

                default:
                    break;
            }
        }


        if (maxindex == 4 && $("#col-4-5").hasClass("turned") == true) {
            $("#col-4-5").empty();
            var tempCard = "cardView" + secret_four.id;;
            $("#col-4-5").append($("#" + tempCard).clone());
            $("#col-4-5").removeClass("turned");

            switch (secret_four.type) {
                case "Clubs":
                    PullBack("club_ace", 2);
                    break;
                case "Diamonds":
                    PullBack("diamond_ace", 4);
                    break;
                case "Spades":
                    PullBack("spade_ace", 1);
                    break;
                case "Hearts":
                    PullBack("heart_ace", 3);
                    break;

                default:
                    break;
            }

        }

        if (maxindex == 3 && $("#col-3-5").hasClass("turned") == true) {
            $("#col-3-5").empty();
            var tempCard = "cardView" + secret_three.id;;
            $("#col-3-5").append($("#" + tempCard).clone());
            $("#col-3-5").removeClass("turned");

            switch (secret_three.type) {
                case "Clubs":
                    PullBack("club_ace", 2);
                    break;
                case "Diamonds":
                    PullBack("diamond_ace", 4);
                    break;
                case "Spades":
                    PullBack("spade_ace", 1);
                    break;
                case "Hearts":
                    PullBack("heart_ace", 3);
                    break;

                default:
                    break;
            }
        }
        if (maxindex == 2 && $("#col-2-5").hasClass("turned") == true) {
            $("#col-2-5 ").empty();
            var tempCard = "cardView" + secret_two.id;;
            $("#col-2-5 ").append($("#" + tempCard).clone());
            $("#col-2-5").removeClass("turned");

            switch (secret_two.type) {
                case "Clubs":
                    PullBack("club_ace", 2);
                    break;
                case "Diamonds":
                    PullBack("diamond_ace", 4);
                    break;
                case "Spades":
                    PullBack("spade_ace", 1);
                    break;
                case "Hearts":
                    PullBack("heart_ace", 3);
                    break;

                default:
                    break;
            }

        }
        if (maxindex == 1 && $("#col-1-5").hasClass("turned") == true) {
            $("#col-1-5 ").empty();
            var tempCard = "cardView" + secret_one.id;;
            $("#col-1-5 ").append($("#" + tempCard).clone());
            $("#col-1-5").removeClass("turned");

            switch (secret_one.type) {
                case "Clubs":
                    PullBack("club_ace", 2);
                    break;
                case "Diamonds":
                    PullBack("diamond_ace", 4);
                    break;
                case "Spades":
                    PullBack("spade_ace", 1);
                    break;
                case "Hearts":
                    PullBack("heart_ace", 3);
                    break;

                default:
                    break;
            }

        }

        if (clubs_index == 0 || spades_index == 0 || hearts_index == 0 || diamonds_index == 0) {

            if (clubs_index == 0) {
                MessageBox("Yarış Bitti!", "Sinek Kazandı!", "success", "Kapat")
            }

            if (spades_index == 0) {
                MessageBox("Yarış Bitti!", "Maça Kazandı!", "success", "Kapat")
            }

            if (hearts_index == 0) {
                MessageBox("Yarış Bitti!", "Kupa Kazandı!", "success", "Kapat")
            }

            if (diamonds_index == 0) {
                MessageBox("Yarış Bitti!", "Karo Kazandı!", "success", "Kapat")
            }
        }

    };

    PushCard = function PushCard(mycard) {
        switch (mycard.type) {
            case "Clubs":
                clubs_index--;
                var theCard = $("#club_ace");
                var currentRow = theCard.parent().attr("id").split("-")[1];
                var nextRow = (Number(currentRow) - 1);
                $("#" + ("col-" + nextRow + "-2")).removeClass("empty-card");
                $("#" + ("col-" + currentRow + "-2")).addClass("empty-card");
                $("#" + ("col-" + nextRow + "-2")).append(theCard);
                break;
            case "Diamonds":
                diamonds_index--;
                var theCard = $("#diamond_ace");
                var currentRow = theCard.parent().attr("id").split("-")[1];
                var nextRow = (Number(currentRow) - 1);
                $("#" + ("col-" + nextRow + "-4")).removeClass("empty-card");
                $("#" + ("col-" + currentRow + "-4")).addClass("empty-card");
                $("#" + ("col-" + nextRow + "-4")).append(theCard);
                break;
            case "Spades":
                spades_index--;
                var theCard = $("#spade_ace");
                var currentRow = theCard.parent().attr("id").split("-")[1];
                var nextRow = (Number(currentRow) - 1);
                $("#" + ("col-" + nextRow + "-1")).removeClass("empty-card");
                $("#" + ("col-" + currentRow + "-1")).addClass("empty-card");
                $("#" + ("col-" + nextRow + "-1")).append(theCard);
                break;
            case "Hearts":
                hearts_index--;
                var theCard = $("#heart_ace");
                var currentRow = theCard.parent().attr("id").split("-")[1];
                var nextRow = (Number(currentRow) - 1);
                $("#" + ("col-" + nextRow + "-3")).removeClass("empty-card");
                $("#" + ("col-" + currentRow + "-3")).addClass("empty-card");
                $("#" + ("col-" + nextRow + "-3")).append(theCard);
                break;

            default:
                break;
        }

    };

    PullBack = function PullBack(theCard, index) {
        var currentRow = $("#" + theCard).parent().attr("id").split("-")[1];
        var nextRow = Number(currentRow) + 1;
        $("#col-" + nextRow + "-" + index).removeClass("empty-card");
        $("#col-" + nextRow + "-" + index).append($("#" + theCard));
        $("#" + ("col-" + currentRow + "-" + index)).addClass("empty-card");

        switch (theCard) {
            case "club_ace":
                clubs_index++;
                break;
            case "diamond_ace":
                diamonds_index++;
                break;

            case "spade_ace":
                spades_index++;
                break;

            case "heart_ace":
                hearts_index++;
                break;

            default:
                break;
        }

    };

    PickACard = function PickACard() {
        var cardNumber = RandomNumber(1, 52);
        var myc = Deck.find(a => a.id == (Number(cardNumber)));

        return myc;
    }

    Stop_The_Game = function Stop_The_Game() {
        $("#btnKartCek").hide();
        $("#btnNewGame").show();
    };

    NewGame = function NewGame() {
        location.reload();
    };

    sortByKeyDesc = function sortByKeyDesc(array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }
    sortByKeyAsc = function sortByKeyAsc(array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    StartTheGame = function StartTheGame() {

        for (let index = 1; index < 6; index++) {
            switch (index) {
                case 1:
                    secret_one = PickACard();
                    break;
                case 2:
                    secret_two = PickACard();
                    break;
                case 3:
                    secret_three = PickACard();
                    break;
                case 4:
                    secret_four = PickACard();
                    break;
                case 5:
                    secret_five = PickACard();
                    break;
                default:
                    break;
            }

        }

        Deck = sortByKeyAsc(Deck, "id");
        $("#remCard").text(Deck.filter(a => a.selected == false).length);

    };

    RandomNumber = function RandomNumber(start, stop) {
        return Math.floor(Math.random() * stop) + start;
    };

    StartTheGame();

    MaxIndex = function MaxIndex() {
        var myArray = [clubs_index, diamonds_index, hearts_index, spades_index];
        return Math.max.apply(Math, myArray);
    }




});