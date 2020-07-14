import { connect } from 'react-redux';
import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import PropTypes from 'prop-types';
import * as a from './../actions';

class TicketControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTicket: null,
			editing: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.waitTimeUpdateTimer = setInterval(() => this.updateTicketElapsedWaitTime(), 1000);
	}

	componentDidUpdate() {
		console.log('component updated');
	}

	componentWillUnmount() {
		console.log('component unmounted');
		clearInterval(this.waitTimeUpdateTimer);
	}

	updateTicketElapsedWaitTime = () => {
		const { dispatch } = this.props;
		Object.values(this.props.masterTicketList).forEach((ticket) => {
			const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
			const action = a.updateTime(ticket.id, newFormattedWaitTime);
			dispatch(action);
		});
	};

	handleClick = () => {
		if (this.state.selectedTicket != null) {
			this.setState({
				selectedTicket: null,
				editing: false
			});
		} else {
			const { dispatch } = this.props;
			const action = a.toggleForm();
			dispatch(action);
		}
	};

	handleAddingNewTicketToList = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};

	// handleEditingTicketInList = (ticketToEdit) => {
	// 	const { dispatch } = this.props;
	// 	const { id, names, location, issue } = ticketToEdit;
	// 	const action = a.addTicket(ticketToEdit);
	// 	dispatch(action);
	// 	this.setState({
	// 		editing: false,
	// 		selectedTicket: null
	// 	});
	// };

	handleChangingSelectedTicket = (id) => {
		const selectedTicket = this.state.masterTicketList.filter((ticket) => ticket.id === id)[0];
		this.setState({ selectedTicket: selectedTicket });
	};

	handleDeletingTicket = (id) => {
		const { dispatch } = this.props;
		const action = a.deleteTicket(id);
		dispatch(action);
		this.setState({ selectedTicket: null });
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.props.formVisibleOnPage === null) {
			currentlyVisibleState = <TicketList />;
			buttonText = 'Add Ticket';
		} else if (this.props.formVisibleOnPage) {
			currentlyVisibleState = <NewTicketForm />;
			buttonText = 'Return to Ticket List';
		}
		return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		masterTicketList: state.masterTicketList,
		formVisibleOnPage: state.formVisibleOnPage
	};
};

TicketControl.propTypes = {
	masterTicketList: PropTypes.object
};

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;
