const utils = require('./utils');
it('should add two numbers', () =>  {
    var res = utils.add(33, 11);
    var expected = 44;
    //throw new Error('Valut not correct');

    if(res !== expected)
    {
        throw new Error(`Expected ${expected}, but got: ${res}`);
    }

});

it('should square a numbers', () =>  {
    var res = utils.square(5);
    var expected = 25;
    //throw new Error('Valut not correct');

    if(res !== expected)
    {
        throw new Error(`Expected ${expected}, but got: ${res}`);
    }

});
