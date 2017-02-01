import React from 'react';
import Modal from 'react-modal';

import Testo from 'login/components/Testo.jsx';

/*
const Modal = (props) => {
	const { children, ...properties } = props;
	const items = Object.entries(properties).map((entry) => { return {name:String(entry[0]), value:String(entry[1])}; });
	const list = items.map((item) => <li key={item.name}>{item.name}: {item.value}</li>);

	return (
		<div>
			<ul>
				{list}
			</ul>
			{children}
		</div>
	);
};
*/

class TestoWithModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	closeModal() {
		this.setState({ isOpen: false });
	}

	render () {
		return (
			<div>
				<button onClick={this.openModal}>open plssssss</button>
				<Modal
					contentLabel={'noshit'}
					isOpen={this.state.isOpen}
				>
					<button onClick={this.closeModal}>click me</button>
					<br />
					<span>{'Hello Sailor - span'}</span>
					<br />
					<Testo
						title={'i hate you - title'}
						description={'pouet pouet - description'}
					/>
				</Modal>
			</div>
		);
	}
}

export default TestoWithModal;
