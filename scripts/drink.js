whatCanIDrink = function(){
    this.value = "";
};

whatCanIDrink.prototype.check = function(age){
    
    /*--------Check if the input is number----*/
    
    if (typeof(age) == "number") {
        
        /*age <0 or >=130*/
        if (age < 0 || age >= 130){
            this.value += "Sorry. I can’t tell what drink because that age is incorrect!";
        }
        /*age 0-13*/
        else if(age<14){
            this.value += "Drink Toddy";
        }
        /*age 14-17*/
        else if(age<18){
            this.value += "Drink Coke";
        }
        /*age 18-20*/
        else if(age<21){
            this.value += "Drink Beer";
        }
        /*age 21-129*/
        else if(age<130){
            this.value += "Drink Whisky";
        }
    }
    /*----If the input is not a number, error---*/
    else {
        alert("Error!");
    }
    
};