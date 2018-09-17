import {
	otherContent,
	mainContent,
	defaultState
} from '../redux/reducers/reducers';

describe('Reducers', () => {
	it('CHANGE_PAGE success',() => {
		const page = 132;
		const action = {
	    type: 'CHANGE_PAGE',
	    page
	  }
		const result = otherContent(defaultState, action)
		expect(result)
			.toEqual({
				...defaultState,
				page
			})
	});

	it('SET_MAX_PAGE success', () => {
		const maxPage = 296;
		const action = {
			type: 'SET_MAX_PAGE',
			maxPage
		}
		const result = otherContent(defaultState, action)
		expect(result)
			.toEqual({
				...defaultState,
				maxPage
			})
	})

	it('SET_LOADING success', () => {
		const loading = false;
		const action = {
			type: 'SET_LOADING',
			loading
		}
		const result = otherContent(defaultState, action);
		expect(result)
			.toEqual({
				...defaultState,
				loading
			})
	})

	it('IS_NOTHING_FOUND success', () => {
		const nothingFound = false;
		const action = {
			type: 'IS_NOTHING_FOUND',
			nothingFound
		}
		const result = otherContent(defaultState, action);
		expect(result)
			.toEqual({
				...defaultState,
				nothingFound
			})
	})

	it('SET_URL success', () => {
		const url = 'https://test%20site.ru';
		const action = {
			type: 'SET_URL',
			url
		}
		const result = otherContent(defaultState, action);
		expect(result)
			.toEqual({
				...defaultState,
				url
			})
	})

	it('SET_CATEGORY success', () => {
		const category = 'Anime';
		const action = {
			type: 'SET_CATEGORY',
			category
		}
		const result = otherContent(defaultState, action);
		expect(result)
			.toEqual({
				...defaultState,
				category
			})
	})

	it('SET_QUERY success', () => {
		const query = 'My test query';
		const action = {
			type: 'SET_QUERY',
			query
		}
		const result = otherContent(defaultState, action);
		expect(result)
			.toEqual({
				...defaultState,
				query
			})
	})

	it('SET_SORT success', () => {
		const sort = {
    sortOn: 'year',
    direction: 'on',
  };
		const action = {
			type: 'SET_SORT',
			sort
		}
		const result = otherContent(defaultState, action);
		expect(result)
			.toEqual({
				...defaultState,
				sort
			})
	})

	it('SET_NEW_CONTENT success', () => {
		const content = ['first item', 'second item'];
		const action = {
			type: 'SET_NEW_CONTENT',
			content
		}
		const result = mainContent(defaultState, action);
		expect(result)
			.toEqual({
				...defaultState,
				content
			})
	})
})
