const expect = require('chai').expect;
const laoo = require('../index');


describe('Require laoo', function() {
    it('Should give you the key', function () {
        let a = { b: { c: { d: 'd' }}}
        const obj = laoo(a, 'd')
        expect(obj).to.be.a.string
    });
    it('Should give you the key again', function () {
        let a = { b: { c: { d: { x: {key: 'value'}} }}}
        const obj = laoo(a, 'x')
        expect(obj).to.equal(a.b.c.d.x);

    })
});
