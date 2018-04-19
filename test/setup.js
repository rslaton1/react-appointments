import React from 'react'; // eslint-disable-line no-unused-vars
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import chaiEnzyme from 'chai-enzyme';

Enzyme.configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme());

const dom = new JSDOM('').window;
global.window = dom.window;
global.document = dom.window.document;
global.navigator = { userAgent: 'browser' };

global.React = React;
global.expect = expect;

global.fdescribe = (...args) => describe.only(...args);
global.fit = (...args) => it.only(...args);
