var counter = {
    currentValues: function () {
        return 1;
    },
};
function sumOfValues() {
    return counter.currentValues();
}

describe("mock and spy", function () {
    var player;
    beforeEach(() => {
        player = jasmine.createSpyObj("player", ["level", "health", "attack"]);
        player.level = 100;
        player.health = 50000;
        player.attack("enemy");
    });

    // and expect that we called the spy function for one time
    it("spying", function () {
        spyOn(counter, "currentValues").and.callFake(() => {
            return 1;
        });
        expect(sumOfValues()).toEqual(1);
        expect(counter.currentValues).toHaveBeenCalled();
        expect(counter.currentValues).toHaveBeenCalledWith();
    });

    it("mocking", () => {
        expect(player.level).toBeDefined();
        expect(player.health).toEqual(50000);
        expect(player.attack).toHaveBeenCalled();
        expect(player.attack).toHaveBeenCalledWith(jasmine.anything());
    });
});
