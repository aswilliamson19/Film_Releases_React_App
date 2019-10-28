import React, {Component} from 'react';

class Film extends Component {
    render() {
        return (
            <div className='film'>
                <h3>{this.props.children}</h3>
            </div>
        )
    }
}

export default Film;