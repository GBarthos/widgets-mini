/* eslint-disable */
import React from 'react';
/* eslint-enable */

class Testo extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

Testo.propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string
};

Testo.defaultProps = {
    title: 'default title',
    description: 'default description'
};

export default Testo;
