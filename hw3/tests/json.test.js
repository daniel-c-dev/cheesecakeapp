// Daniel Co

test('test selectEvent', () => {

    // Test the json object
    const one = require('../routes/orders.js');
    test('tests json object', () => {
        expect (orders()).toBe("[{\"topping\":\"cherry\",\"quantity\":2},{\"topping\":\"plain\",\"quantity\":6},{\"topping\":\"chocolate\",\"quantity\":3}]");
    });
});