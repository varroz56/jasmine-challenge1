describe("whatCanIDrink", function(){

    describe("Checking function", function() {
        beforeEach(function(){
            drink = new whatCanIDrink;
        });
        it("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
            drink.check(-1)
            expect(drink.value).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
            drink.check(130)
            expect(drink.value).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return 'Drink Toddy'", function() {
            drink.check(0)
            expect(drink.value).toBe("Drink Toddy");
        });
        it("should return 'Drink Coke'", function() {
            drink.check(14)
            expect(drink.value).toBe("Drink Coke");
        });
        it("should return 'Drink Beer'", function() {
            drink.check(18)
            expect(drink.value).toBe("Drink Beer");
        });
        it("should return 'Drink Whisky'", function() {
            drink.check(21)
            expect(drink.value).toBe("Drink Whisky");
        });
        it("should return an error if the input is not a number", function() {
            spyOn(window, "alert");
            
            drink.check("bla");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });

});