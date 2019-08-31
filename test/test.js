var assert = require('assert');

describe('Array', function() {
	describe('#indexOf()', function(){
		it('should return -1 when the values is not present', function() {
			assert.equal([1,2,3].indexOf(4), -1);
		});
	});
});
