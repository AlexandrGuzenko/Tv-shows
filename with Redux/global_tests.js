import React from 'react';
import deepFreeze from 'deep-freeze';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

import { defaultState } from './redux/reducers/reducers.js';

configure({ adapter: new Adapter() });
global.React = React;
global._defaultState = deepFreeze({
	otherContent: {...defaultState, content: null},
	mainContent: defaultState.content
});
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;