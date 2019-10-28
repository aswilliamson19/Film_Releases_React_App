import React, {Component} from 'react';

class MoreFilmInfo extends Component {

    render() {
        return( 
        <div className='film-information'>
            <a href={'https://www.imdb.com/calendar/?region=gb'}>Click to view more upcoming releases</a>
        </div>
        )
    }
}

export default MoreFilmInfo;