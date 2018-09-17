import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';


import SmartSearchField, { SearchField } from '../ui/SearchField';

jest.mock('../redux/actionCreators/actionCreators', () => ({
  setQuery: (query) => ({
    type: 'test setQuery',
   // query
  }),
  urlMaker: (url, category) => ({
  	type: 'test urlMaker',
  	url
  })
}))

describe('<SearchField /> UI Component', () => {

	it('render component', () => {
		expect(shallow(<SearchField />).length).toEqual(1)
	})

	it('onClick function on <i> tag', () => {
		const _click = jest.fn();
		shallow(<SearchField urlMaker={_click} />)
			.find('i')
			.simulate('click')
		expect(_click).toBeCalled()
	})

	it('onChange function on FormControl', () => {
		const _click = jest.fn();
		mount(<SearchField onChangeQuery={_click} />)
			.find('input')
			.simulate('change')
		expect(_click).toBeCalled()
	})

})

describe('<SearchField /> UI Smart Component', () => {

	const initialState = global._defaultState;
	const mockStore = configureStore();
  let store,container;

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<SmartSearchField store={store} /> );
  })

	it('check query property', () => {
		expect(container.prop('query')).toEqual(initialState.otherContent.query)
	})

	it('check category property', () => {
		expect(container.prop('category')).toEqual(initialState.otherContent.category)
	})

	it('check ', () => {
		mount(<SmartSearchField store={store} /> )
			.find('input')
			.simulate('change');

    const actions = store.getActions();
    expect(actions.length).toBe(1);
	})

	it('check dispatch function on <i> tag', () => {
		mount(<SmartSearchField store={store} /> )
			.find('i')
			.simulate('click');
    const actions = store.getActions();
    expect(actions.length).toBe(1);
	})

})

