var booking = {
    check_in_day: 'Monday',
    duration: 4,
    cat_name : 'Snowy'
  }

  var booking2 = {
    check_in_day: 'Friday',
    duration: 5,
    cat_name : 'Snowy'
  }

  var booking3 = {
    check_in_day: 'Wednesday',
    duration: 1,
    cat_name : 'Snowy'
  }

  var booking4 = {
    check_in_day: 'Sunday',
    duration: 2,
    cat_name : 'Snowy'
  }

describe('The bookingCost Function' , function(){
    it('should calculate how much could be spent on a Monday if the duration is 4 times ' , function(){
        // assert.equal(2,2);
       
        assert.deepEqual(180,bookingCost(booking));
    });

});

describe('The bookingCost Function' , function(){
    it('should calculate how much could be spent on a Friday if the duration is 5 times and has a discount of 15% ' , function(){
        // assert.equal(2,2);
       
        assert.deepEqual(191.25,bookingCost(booking2));
    });

});



describe('The bookingCost Function' , function(){
    it('should calculate how much could be spent on a Wednesday if the duration is 1 time with a discount of 25% ' , function(){
        // assert.equal(2,2);
       
        assert.deepEqual(33.75,bookingCost(booking3));
    });

});

describe('The bookingCost Function' , function(){
    it('should calculate how much could be spent on a Sunday if the duration is 2 times ' , function(){
        // assert.equal(2,2);
       
        assert.deepEqual(90,bookingCost(booking4));
    });

});
