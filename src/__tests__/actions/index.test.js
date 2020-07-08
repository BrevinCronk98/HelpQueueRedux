import * as actions from '../../actions';

describe('help queue actions', () => {
	// Test One
	it('deleteTicket should create DELETE_TICKET action', () => {
		expect(actions.deleteTicket(1)).toEqual({
			type: 'DELETE_TICKET',
			id: 1
		});
	});

	// Test Two
	it('toggleForm should create TOGGLE_FORM action', () => {
		expect(actions.toggleForm()).toEqual({
			type: 'TOGGLE_FORM'
		});
	});

	// Test Three
	it('addTicket should crerate ADD_TICKET action', () => {
		expect(
			actions.addTicket({ names: 'Jo and Jasmine', location: '3E', issue: 'Redux not working', id: 1 })
		).toEqual({
			type: 'ADD_TICKET',
			names: 'Jo and Jasmine'
		});
	});
});
