import { shallow } from 'enzyme';

import ListRow from '../ui/ListRow';

describe('<ListRow /> UI Component', () => {

	it('render component', () => {
		expect(shallow(<ListRow />).length)
			.toBe(1)
	})

})