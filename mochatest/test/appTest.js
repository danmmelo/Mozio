const assert = require('chai').assert; //using chai library and assert function
const app = require('../app');


validateExtension = app.getFileExtension("mozio.jpg");

describe('app', function(){

   describe('getFileExtension()', function(){
    it('The result has a valid extention', function(){
      assert.typeOf(validateExtension, 'number');

    })

   })

})// end of App

