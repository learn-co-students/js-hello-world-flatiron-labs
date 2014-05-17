'use strict';

describe('hello', function() {
  it('logs "Hello World" to the screen', function() {
    spyOn(console, 'log');
    // Your code here
    expect(console.log).toHaveBeenCalledWith("Hello World")
  });
});
