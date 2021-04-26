const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // Get list of all acc
    accounts = await web3.eth.getAccounts();

    // Use one of them to deploy cont
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hello world!"]})
        .send({ from: accounts[0], gas: '1000000' })

    inbox.setProvider(provider);

});

describe('Inbox', () => {
    it('deploys', () => {
        assert.ok(inbox.options.address);
    });

    it('has default', () => {
        
    })
});