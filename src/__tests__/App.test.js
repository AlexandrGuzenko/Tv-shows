import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import SmartApp from '../../src/App';

jest.mock('../redux/actionCreators/actionCreators', () => ({
  urlMaker: (url, category) => ({
    type: 'test urlMaker',
  }),
  sortFun: () => ({
  	type: 'test sortFun',
  })
}))

/*jest.mock('../redux/actionCreators/actionCreators', () => ({
  urlMaker: (url, category) => ({
    type: 'test urlMaker',
  }),
  sortFun: () => ({
  	type: 'test sortFun',
  })
})) */

describe('<App /> UI Component', () => {
	const initialState = global._defaultState;
	const mockStore = configureStore();
  let store,container;

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<SmartApp store={store} /> );
  })

  it('check page prop', () => {
  	expect(container.prop('page')).toEqual(initialState.otherContent.page)
  })

  it('check loading prop', () => {
  	expect(container.prop('loading')).toEqual(initialState.otherContent.loading)
  })

  it('check nothingFound prop', () => {
  	expect(container.prop('nothingFound')).toEqual(initialState.otherContent.nothingFound)
  })

  it('check content prop', () => {
  	expect(container.prop('content')).toEqual(initialState.mainContent.content)
  })

  it('dispatch sortFun function', () => {
  	console.log(mount(<SmartApp store={store} />).debug())
  	/*mount(<SmartApp store={store} />)
  		.find('th.sort')
  		.first()
  		.simulate('click')
  	const actions = store.getActions();
    expect(actions.length).toBe(1);*/
  })

})

