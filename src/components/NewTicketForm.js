import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';
import { firestore } from 'firebase';

function NewTicketForm(props) {
	const fireStore = useFirestore();
	function addTicketToFirestore(event) {
		event.preventDefault();
		props.onNewTicketCreation();
		return firestore.CollectionReference('tickets').add({
			names: event.target.names.value,
			locations: event.target.location.value,
			issue: event.target.issue.value,
			timeOpen: firestore.FieldValue.serverTimestamp()
		});
	}

	return <ReusableForm formSubmissionHandler={addTicketToFirestore} buttonText="Add" />;
}

export default NewTicketForm;
