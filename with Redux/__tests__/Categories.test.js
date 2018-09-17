import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';


import SmartCategories, { Categories } from '../ui/Categories';

jest.mock('../redux/actionCreators/actionCreators', () => ({
  urlMaker: (url, category) => ({
  	type: 'test urlMaker',
  	url
  })
}))

describe("<Categories /> UI Component", () => {

	it('invokes onClick', () => {
		const _click = jest.fn();
		shallow(<Categories onClick={_click} />)
			.find('a.category')
			.first()
			.simulate('click')
		expect(_click).toBeCalled()
	})

	it('should render <h3> tag', () => {
		expect(shallow(<Categories />).find('h3').text())
			.toBe('Categoties')
	})

	it('onClick in Smart component', () => {
		const mockStore = configureStore();
		const store = mockStore()
		mount(<SmartCategories store={store} />)
			.find('a.category')
			.last()
			.simulate('click')
		const actions = store.getActions();
		expect(actions.length).toBe(1)
	})
})
