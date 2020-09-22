var questions = [
    {
    text: "Your car is too small for all of your stuff, what do you do?",
    choices: [
        {
            text: "Rent a storage unit ($50)",
            cost: -50,
            
        },
        {
            text: "Have a yard sale",
            cost: 200,
        },
    ]
    },
    {
    text: "On your way to work, you blow a tire, what do you do?",
    choices: [
        {
            text: "Have it towed ($200)",
            cost: -200
        },
        {
            text: "Take the bus ($5)",
            cost: -5
        },
        {
            text: "Call a friend (free)",
            cost: 0,
        }
    ]
    },
    {
    text: "You get a big tip from a nice customer at work.",
    choices: [
        {
            text: "Nice",
            cost: 35
        }
    ]
    },
    {
    text: "Your mom needs some medication but doesn't have the $750 to pay for it.",
        choices: [
            {
                text: "Buy it for her",
                cost: -750
            },
            {
                text: "Tell her you can't afford it",
                cost: 0
            },
        ]
    },
    {
    text: "Your childhood best friend is getting married tomorrow and he wants you to be there. However, its in another state.",
        choices: [
            {
                text: "Fly over there ($200)",
                cost: -200,
                isJobStrike: true
            },
            {
                text: "Tell your friend you're sorry you can't make it.",
                cost: 0
            },
        ]
    },
    {
    text: "You decide its time to move into an actual apartment. A few are for sale near you.",
        choices: [
            {
                text: "700 sqft, 1 bed, 1.5 bath. Appliances and laundry included. $900/mo",
                cost: -900,
                isMonthly: true,
                isRent: true
            },
            {
                text: "900 sqft, 2 bed, 2 bath. Appliances and laundry included. $1200/mo",
                cost: -1200,
                isMonthly: true,
                isRent: true
            },
            {
                text: "450 sqft, studio. Appliances included. $550/mo",
                cost: -550,
                isMonthly: true,
                isRent: true
            },
        ]
    },
    {
    text: "You're pretty sure you weren't speeding, but the cop says otherwise.",
        choices: [
            {
                text: "Pay the ticket ($200)",
                cost: -200
            },
            {
                text: "Take it to court",
                cost: 0,
                isJobStrike: true
            },
        ]
    },
    {
    text: "Your new apartment doesn't have internet and it's driving you insane.",
        choices: [
            {
                text: "Sign up for internet ($50/mo)",
                cost: -50,
                isMonthly: true,
                isInternet: true
            },
            {
                text: "Use the public WiFi at the library",
                cost: 0
            }
        ]
    },
    {
        text: "You need some new shoes, your old ones are starting to fall apart.",
            choices: [
                {
                    text: "Buy some name brands ($100)",
                    cost: -100,
                },
                {
                    text: "Go to the thrift store ($20)",
                    cost: -20
                }
            ]
    },
    {
        text: "A car slipped on ice and ran right into your parked car. The person doesn't have insurance.",
            choices: [
                {
                    text: "Pay the $250 to fix it",
                    cost: -250,
                },
                {
                    text: "Leave it.",
                    cost: 0
                }
            ]
    },
    {
        text: "Your landlord finds out that you have a pet and demands you pay the $350 pet fee.",
            choices: [
                {
                    text: "Pay it",
                    cost: -350,
                },
                {
                    text: "Take your pet to the shelter",
                    cost: 0
                }
            ]
    },
    {
        text: "Your tooth has been hurting for a while. You need root canal work, but you dont have dental insurance.",
            choices: [
                {
                    text: "Get the work done. ($400)",
                    cost: -400,
                },
                {
                    text: "Use some numbing gel",
                    cost: 0
                }
            ]
    },
    {
        text: "A kid on the block hit a ball right through your window and your landlord insists you pay for it.",
            choices: [
                {
                    text: "Pay to fix it ($100)",
                    cost: -100,
                },
                {
                    text: "Buy some plastic sheeting to cover it ($10)",
                    cost: -10
                }
            ]
    },
    {
        text: "Your grandfather passed away recently and the memorial is being held in California.",
            choices: [
                {
                    text: "Fly there ($350)",
                    cost: -350,
                    isJobStrike: true
                },
                {
                    text: "Say you can't make it",
                    cost: 0
                }
            ]
    },
    {
        text: "Exercise is key to a healthy lifestyle. You need to start a fitness program.",
            choices: [
                {
                    text: "Join the gym ($25)",
                    cost: -25,
                },
                {
                    text: "Put it off",
                    cost: -25
                }
            ]
    },
    {
        text: "Even though you're not using your credit card anymore, the balance is still there.",
            choices: [
                {
                    text: "Pay it off ($7000)",
                    cost: -7000,
                },
                {
                    text: "Pay the minimum ($200)",
                    cost: -200
                }
            ]
    },
    {
        text: "The person ahead of you on the sidwalk drops $20. What do you do?",
            choices: [
                {
                    text: "Pocket it",
                    cost: 20,
                },
                {
                    text: "Give it back to them",
                    cost: 0
                }
            ]
    },
    {
        text: "A friend of yours needs a place to stay. He reached out to you and offered $200 to stay with you.",
            choices: [
                {
                    text: "Say yes",
                    cost: 200,
                },
                {
                    text: "Say no",
                    cost: 0
                }
            ]
    },
    {
        text: "You wake up with a splitting headache and a slight fever.",
            choices: [
                {
                    text: "Call in sick",
                    cost: 0,
                    isJobStrike: true
                },
                {
                    text: "Go in anyways",
                    cost: 0
                }
            ]
    },
    {
        text: "Your landlord discovers your friend is staying with you and will now add $300 to your rent for having an extra person.",
            choices: [
                {
                    text: "Darn",
                    cost: -300
                }
            ]
    },
    {
        text: "Your bathroom sink had a small leak that just became a big one.",
            choices: [
                {
                    text: "Hire a plumber ($150)",
                    cost: -150,
                },
                {
                    text: "Try to fix it yourself ($30)",
                    cost: -30
                }
            ]
    },
    {
        text: "Your friends call and ask if you want to go to a movie.",
            choices: [
                {
                    text: "Go with them ($20)",
                    cost: -150,
                },
                {
                    text: "Tell them you can't make it",
                    cost: 0
                }
            ]
    },
    {
        text: "Your 5 year high school reunion is coming up. It's at an expensive ballroom, and you need to buy a suit.",
            choices: [
                {
                    text: "Go to the reunion ($150)",
                    cost: -150,
                },
                {
                    text: "Skip it",
                    cost: 0
                }
            ]
    },
    {
        text: "Your fed up with the food you've been eating and wonder if you should splurge.",
            choices: [
                {
                    text: "Buy a 50 lb bag or rice ($5)",
                    cost: -5,
                },
                {
                    text: "Buy a nice steak ($20)",
                    cost: -20
                }
            ]
    },
    {
        text: "Your sister offers to take you to a nice resturant and pay, but your working that night.",
            choices: [
                {
                    text: "Go to dinner",
                    cost: 0,
                },
                {
                    text: "Tell her you can't make it",
                    cost: 0,
                    isJobStrike: true
                }
            ]
    },
    {
        text: "You dropped your phone as you were getting into your car and the screen cracked.",
            choices: [
                {
                    text: "Take it to the repair shop ($100)",
                    cost: -100,
                },
                {
                    text: "Fix it yourself ($25)",
                    cost: -25
                },
                {
                    text: "Live with it",
                    cost: 0
                }

            ]
    },
    {
        text: "Its your birthday! You're manager gives you a bonus check of $100",
            choices: [
                {
                    text: "Nice",
                    cost: 100
                }
            ]
    },
    {
        text: "Your college degree isn't really helping you right now as a waiter. The loan bills are still coming though.",
            choices: [
                {
                    text: "Pay this bill off ($250)",
                    cost: -250,
                },
                {
                    text: "Ignore it",
                    cost: 0
                }
            ]
    },
    {
        text: "Your bed is starting to make your back hurt bad.",
            choices: [
                {
                    text: "Buy a new matress ($500)",
                    cost: -500,
                },
                {
                    text: "Live with it",
                    cost: 0
                }
            ]
    },


]

var accountBalance = 5000;
var currentQuestionIndex = 0;
var strikeCount = 0;
var isUBI = false;
var currMonth = 1;
var dayIncrement = 6;


function initPage() {
    $("#balanceAmount").text(accountBalance);
    $("#content").css("display", "none");
    $("#money").css("display", "none");
    $("#payday-text").css("display", "none");
    $("#jobstrike-text").css("display", "none");
    $("#intro-text-1").css("display", "none");
    $("#intro-text-2").css("display", "none");
    $("#loseNormal").css("display", "none");
    $("#winNormal").css("display", "none");
    $("#loseUBI").css("display", "none");
    $("#winUBI").css("display", "none");
    $("#bills").css("display", "none");
    
    async function displayIntro() {
        $("#intro-text-1").fadeIn();
        await new Promise(r => setTimeout(r, 2000));
        $("#intro-text-2").fadeIn();
        await new Promise(r => setTimeout(r, 2000));
        $("#pay-text").fadeIn();
        await new Promise(r => setTimeout(r, 1000));
        $("#continue-button").fadeIn(3000);
        document.getElementById("continue-button").onclick = async function() {
            $("#intro").fadeOut();
            await new Promise(r => setTimeout(r, 500));
            $("#money").fadeIn();
            await new Promise(r => setTimeout(r, 1000));
            $("#continue-button-pay").fadeIn(3000);
            document.getElementById("continue-button-pay").onclick = async function() {
                $("#money").fadeOut(1000, 'swing', (function() {
                    $('#content').fadeIn();
                    listQuestion(currentQuestionIndex);
                }));
            }
        }
    }
    displayIntro();

}

var bills = -210;

function handleChoiceClick(cost, isJobStrike, isRent, isInternet, isMonthly) {
    
    if(isInternet) {
        bills += cost;
        $("#internet").show()
    }

    if (cost !== undefined) {
        if(isRent) {
            bills += cost;
            $("#rentAmount").text("$" + (cost * -1))
        }
        var amount = Number.parseInt(cost);
        if(!isMonthly){
            accountBalance = accountBalance + amount;
            $("#balanceAmount").text(accountBalance);
        }
        
        if(accountBalance <= 0 && !isUBI) {
            gameOverNormal("loseNormal")
            return;
        }

        if(accountBalance <= 0 && isUBI) {
            console.log("loseUBI")
            gameOverUBI("loseUBI")
            return;
        }
    
        if(isUBI) {
            $("#UBITable").show()
        }

    }
    

    // Adds a day to the timeline day
    var newDay = parseInt($("#timelineDay").text());
    var currentMonth = $("#timelineMonth").text();
    newDay += dayIncrement;
    var newMonth = updateMonth(currentMonth, newDay);

    if(newMonth.name !== "") {
        currMonth++
        console.log("newDay")
        newDay = 1
        console.log(bills)

       $("#timelineMonth").text(newMonth.name);
       $("#balanceAmount").text(accountBalance + newMonth.UBI);
    }
    $("#timelineDay").text(newDay);

    // Moves the circle, month and day on the right side down 5px
    var timelineOffset = calculateDateTop(newMonth.days, currMonth, newDay)

    $("#container").css({'top':timelineOffset.containerTop});
    $("#timelineMonth").css({'top':timelineOffset.monthTop});
    $("#timelineDay").css({'top':timelineOffset.dayTop});

    if(newDay === 1 && currMonth >= 2) {
        accountBalance = accountBalance + bills
        $("#balanceAmount").text(accountBalance);
        showBills()
        return;
    } 

    currentQuestionIndex++;

    //Subtracts a day from days until payday
    var newPayDay = parseInt($("#days-left").text());
    newPayDay = newPayDay - 6;
    if(newPayDay <= 0) {
        showPayday(currentQuestionIndex)
        accountBalance = accountBalance + 798;
        newPayDay = 14;
        $("#balanceAmount").text(accountBalance);
        $("#days-left").text(newPayDay);
        return;
    }
    document.getElementById("days-left").innerText = newPayDay;

    // Checks to see if a choice gives the player a job strike
    if(isJobStrike) {
        strikeCount++
        console.log("strikeCount: " + strikeCount)
        showStrike(currentQuestionIndex, strikeCount)
        return;
    }
    
    if(newMonth.endOfDays && !isUBI) {
        gameOverNormal("winNormal")
        return;
    }
    else if(newMonth.endOfDays && isUBI) {
        gameOverUBI("winUBI")
        return;
    }

    listQuestion(currentQuestionIndex);
}

function calculateDateTop(daysInMonth, currMonth, day) {
    var currentMonthOffset = parseInt($("#month_" + currMonth).offset().top)
    var nextMonthOffset = parseInt($("#month_" + (currMonth + 1)).offset().top)
    console.log("currMonth: " + currMonth)
    var travelDistance = (nextMonthOffset - currentMonthOffset) / (daysInMonth/dayIncrement);
    var monthPosition = $("#timelineMonth").position();
    var containerPosition = $("#container").position();

    var monthTop = monthPosition.top + travelDistance;
    var containerTop = containerPosition.top + travelDistance;
    if(day === 1) {
        monthTop = currentMonthOffset - 16
        containerTop = currentMonthOffset
    }
    var dayTop = monthTop + 30;

    return {
        monthTop: monthTop,
        dayTop: dayTop,
        containerTop: containerTop
    };
}

async function money() {
    $("#intro").fadeOut();
    await new Promise(r => setTimeout(r, 1000));
    $("#money").fadeIn();
}

function showPayday(currentQuestionIndex) {
    async function payday() {
        $("#content").fadeOut(500, "swing", function(){
            $("#payday-text").fadeIn(750, "swing", function(){
                setTimeout(function(){
                    $("#payday-text").fadeOut(750, "swing", function(){
                        $("#content").fadeIn();
                        listQuestion(currentQuestionIndex);
                    }, 1000);
                });
            });
        }); 
    }
    payday();
}

function showStrike(currentQuestionIndex) {
    console.log(strikeCount)
    async function strike() {
        $("#content").fadeOut(500, "swing", function(){
            $("#jobstrike-text").fadeIn(750, "swing", function(){
                setTimeout(function(){
                    $("#strike-" + strikeCount).css("opacity", 1);
                    $("#jobstrike-text").fadeOut(750, "swing", function(){
                        if(strikeCount == 3 && !isUBI) {
                            gameOverNormal("loseNormal");
                        }
                        else if(strikeCount == 3 && isUBI) {
                            gameOverUBI("loseUBI")
                        }
                        else {
                            $("#content").fadeIn();
                            listQuestion(currentQuestionIndex);
                        }
                    }, 1000);
                });
            });
        }); 
    }
    strike();
}

function showBills() {
    $("#content").fadeOut(500, "swing", function(){
        $("#bills").fadeIn(750)
    }); 
}

function hideBills() {
    $("#bills").fadeOut(500, "swing", function(){
        currentQuestionIndex++;
        listQuestion(currentQuestionIndex);
        $("#content").fadeIn(750)
    }); 
}

function gameOverNormal(outcome) {
    console.log(outcome)
    $("#content").fadeOut(500, "swing", function(){
        $("#" + outcome).fadeIn();
    }); 
}

function gameOverUBI(outcome) {
    console.log("gameover: '" + outcome +"'")
    $("#content").fadeOut(500, "swing", function(){
        $("#" + outcome).fadeIn();
    }); 
}

function listQuestion(questionIndex) {
    var questionHtml = "";

    for(i = 0; i < questions.length; i++) {

        if (questionIndex !== i)
            continue;
        questionHtml = "<div>" + questions[i].text + "<br/>"
        
        for(x = 0; x < questions[i].choices.length; x++) {
            questionHtml += "<button class='button-style'" +
                            "onclick='handleChoiceClick(" + questions[i].choices[x].cost + ","+ questions[i].choices[x].isJobStrike + "," + questions[i].choices[x].isRent + "," + questions[i].choices[x].isInternet + "," + questions[i].choices[x].isMonthly + ")' " +
                            "value='" + questions[i].choices[x].cost + "'>" + questions[i].choices[x].text + "</button>";
                            
        }
        questionHtml += "</div>";
        break;
    }
    $("#content").html(questionHtml);
}

function updateMonth(currentMonth, newDay) {
    console.log("currentMonth:" + currentMonth);
    console.log("newDay:" + newDay);
    var name = "";
    var days = 31;
    var endOfDays = false

        switch(currentMonth) {
            case "Jan":
                if(newDay >= 32) {
                    name = "Feb";
                    days = 28
                }
                else {
                    days = 31
                }
                break;

            case "Feb":
                if(newDay >= 29) {
                    name = "Mar";
                    days = 31
                }
                else {
                    days = 28
                }
                break;

            case "Mar":
                if(newDay >= 32) {
                    name = "Apr";
                    days = 30
                }
                else {
                    days = 31
                }
                break;

            case "Apr":
                if(newDay >= 31) {
                    name = "May";
                    days = 31
                }
                else {
                    days = 30
                }
                break;

            case "May":
                if(newDay >= 31) {
                    endOfDays = true
                }
                else {
                    days = 31
                }
                break;

            default:
                break;
    }
    console.log("days: " + days)

    var month = {
        name: name,
        UBI: isUBI ? 1000 : 0,
        days: days,
        endOfDays: endOfDays
    }
    return month;
};

function playAgain(outcome) {
    accountBalance = 5000;
    currentQuestionIndex = 0;
    strikeCount = 0;
    isUBI = true;
    newDay = 1;
    currMonth = 1;

    $("#timelineMonth").text("Jan")
    $("#balanceAmount").text(accountBalance);
    $("#strike-1").css("opacity", 0.3);
    $("#strike-2").css("opacity", 0.3);
    $("#strike-3").css("opacity", 0.3);
    $("#container").css("top", "3%");
    $("#timelineMonth").css("top", "1%");
    $("#timelineDay").css("top", "4%");
    $("#timelineDay").text(1);
    $("#days-left").text(14);
    $("#winNormal").css("display", "none");
    $("#loseNormal").css("display", "none");
    $("#winUBI").css("display", "none");
    $("#loseUBI").css("display", "none");
    $("#bills").css("display", "none");
    

    $("#" + outcome).fadeOut(500, "swing", function() {
        listQuestion(currentQuestionIndex)
        $("#content").fadeIn()
    })
}