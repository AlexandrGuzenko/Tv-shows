import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import SmartButtonNavigation, { ButtonNavigation } from '../ui/ButtonNavigation';
import { changePage } from '../redux/actionCreators/actionCreators';

jest.mock('../redux/actionCreators/actionCreators', () => ({
  changePage: (i) => ({
    type: 'test onChange',
    i
  })
}))

describe('<ButtonNavigation /> UI Component', () => {

	it('renders default navigation', () => {
		expect(
			shallow(<ButtonNavigation maxPage={20} curPage={10} />)
				.find('div.wrapper')
				.length
		).toBe(1)
	})

	it('renders small navigation', () => {
		expect(
			shallow(<ButtonNavigation maxPage={4} curPage={2} />)
				.find('div.smallWrapper')
				.length
		).toBe(1)
	})

	it('renders small navigation with 4 bottons', () => {
		expect(
			mount(<ButtonNavigation maxPage={4} curPage={2} />)
				.find('button')
				.length
		).toBe(4)
	})

	it('renders default navigation with page=1', () => {
		expect(
			mount(<ButtonNavigation maxPage={58} curPage={1} />)
				.find('button')
				.length
		).toBe(7)
	})

	it('renders default navigation with page=55 and maxPage=55', () => {
		expect(
			mount(<ButtonNavigation maxPage={55} curPage={55} />)
				.find('button')
				.length
		).toBe(7) 
	})
})

describe('<ButtonNavigation /> onClick tests', () => {

	/*beforeAll(() => {
		_click = jest.fn();
		wrapper = mount(<ButtonNavigation maxPage={55} curPage={55} onChange={_click} />);
	})*/

	it('maxPage=20 curPage=10', () =>{
		const _click = jest.fn();
		mount(<ButtonNavigation maxPage={20} curPage={10} onChange={_click} />)
			.find('button')
			.first()
			.simulate('click')
		expect(_click).toBeCalled()
	})

	it('maxPage=3 curPage=1', () =>{
		const _click = jest.fn();
		mount(<ButtonNavigation maxPage={3} curPage={1} onChange={_click} />)
			.find('button')
			.first()
			.simulate('click')
		expect(_click).toBeCalled()
	})

	it('maxPage=58 curPage=1', () =>{
		const _click = jest.fn();
		mount(<ButtonNavigation maxPage={58} curPage={1} onChange={_click} />)
			.find('button')
			.first()
			.simulate('click')
		expect(_click).toBeCalled()
	})

	it('maxPage=3 curPage=1', () =>{
		const _click = jest.fn();
		mount(<ButtonNavigation maxPage={40} curPage={40} onChange={_click} />)
			.find('button')
			.first()
			.simulate('click')
		expect(_click).toBeCalled()
	})
})

describe('Testing SmartButtonNavigation', () => {
	const initialState = global._defaultState;
	const mockStore = configureStore();
  let store,container;

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<SmartButtonNavigation store={store} /> );
  })

  it('render SmartButtonNavigation', () => {
  	expect(container.length).toEqual(1);
  })

  it('check prop page', () => {
  	expect(container.prop('curPage')).toEqual(initialState.otherContent.page);
  })

  it('check prop maxPage', () => {
  	expect(container.prop('maxPage')).toEqual(initialState.otherContent.maxPage);
  })

  it('check changePage reducer', () => {
  	let action;
  	mount(<SmartButtonNavigation store={store} />)
  		.find('button')
  		.first()
  		.simulate('click')
  	action = store.getActions();
  	expect(action[0].type).toBe('test onChange');
  })
})