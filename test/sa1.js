var TestUtils = require('./testutils')
var SimpleAuction = artifacts.require("./SimpleAuction.sol");

contract('Sa1', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2];

        var ac1_end;
        var ac2_end;
        var ac3_end;
/*
        return SimpleAuction.new({"a":1,"b":ac1}).then(function(instance) {
            meta = instance;

        })
*/

        return SimpleAuction.deployed().then(function(instance) {
            meta = instance;

        })


        // Do all the minting up front so I can play with the
        // ability for others besides the minter to mint coins
/*
            return meta.bid();
        }).then(function() {

            return meta.bid();
        }).then(function() {

            return meta.bid();
        })

        }).then(function() {

            return meta.delegate(ac2);
        }).then(function() {

            return meta.delegate(ac2).then(function(tx) {
                // console.log(tx);
            })
        }).then(function() {

            return meta.delegate(ac3);
        }).then(function() {

            return meta.vote(1);
        }).then(function(balance) {
            ac1_end = balance.toNumber();
            console.log('1e', ac1_end);

            return meta.vote(1);
        }).then(function(balance) {
            ac2_end = balance.toNumber();
            console.log('2e', ac2_end);

            return meta.vote(1);
        }).then(function(balance) {
            ac3_end = balance.toNumber();
            console.log('3e', ac3_end);
        });
*/
    });
});
