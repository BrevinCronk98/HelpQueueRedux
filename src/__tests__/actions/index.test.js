import * as actions from '../../actions';
import * as c from '../../actions/actionTypes';

describe('help queue actions', () => {
	// Test One
	it('deleteTicket should create DELETE_TICKET action', () => {
		expect(actions.deleteTicket(1)).toEqual({
			type: c.DELETE_TICKET,
			id: 1
		});
	});

	// Test Two
	it('toggleForm should create TOGGLE_FORM action', () => {
		expect(actions.toggleForm()).toEqual({
			type: c.TOGGLE_FORM
		});
	});

	// Test Three
	it('addTicket should create ADD_TICKET action', () => {
		expect(
			actions.addTicket({ names: 'Jo and Jasmine', location: '3E', issue: 'Redux not working', id: 1 })
		).toEqual({
			type: c.ADD_TICKET,
			names: 'Jo and Jasmine',
			location: '3E',
			issue: 'Redux not working',
			id: 1
		});
	});

	// Test Four
	it('updateTime should create UPDATE_TIME action', () => {
		expect(actions.updateTime(1, 'A few seconds ago')).toEqual({
			type: c.UPDATE_TIME,
			id: 1,
			formattedWaitTime: 'A few seconds ago'
		});
	});

	// Test Five
	it('addTicket should create ADD_TICEKT action', () => {
		expect(
			actions.addTicket({
				names: 'Jo and Jasmine',
				location: '3E',
				issue: 'Redux not working',
				timeOpen: 0,
				formattedWaitTime: 'A few seconds',
				id: 1
			})
		).toEqual({
			type: c.ADD_TICKET,
			names: 'Jo and Jasmine',
			location: '3E',
			issue: 'Redux not working',
			formattedWaitTime: 'A few seconds',
			timeOpen: 0,
			id: 1
		});
	});
});
