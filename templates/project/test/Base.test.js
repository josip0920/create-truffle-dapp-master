/* eslint-env node, mocha */
/* global artifacts, contract, it,  assert */

const _project_placeholder_ = artifacts.require('_project_placeholder_');

let instance;

contract('_project_placeholder_', (accounts) => {
  it('Should deploy an instance of the _project_placeholder_ contract', () => _project_placeholder_.deployed()
    .then((contractInstance) => {
      instance = contractInstance;
    }));

  it('Should set the number', () => instance.setNumber(2, {
    from: accounts[0],
  }));

  it('Should get the number', () => instance.getNumber()
    .then((number) => {
      assert.equal(number.toNumber(), 2, 'Number is wrong!');
    }));
});
