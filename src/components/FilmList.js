import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {

    render() {

        const filmNodes = this.props.films.map(film => {
            return (
                <Film><a href={film.url}>{ film.name }</a></Film>
            )
        })

        return (
            <div className='film-list'>
                {filmNodes}
            </div>
        )
    }
}

export default FilmList;