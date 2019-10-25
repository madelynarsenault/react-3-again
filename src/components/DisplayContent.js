import React, {Component} from 'react'



import data from '../data.js';



class DisplayContent extends Component {
    render () {
       
        return (
        <div className="Container-Main">
           
            <h1 className="name">{data[this.props.arrayNum].name.first} {data[this.props.arrayNum].name.last}</h1>
            <p><span>From:</span> {data[this.props.arrayNum].city}, {data[this.props.arrayNum].country}</p>
            <p><span>Job Title:</span> {data[this.props.arrayNum].title}</p>
            <p><span>Employer:</span> {data[this.props.arrayNum].employer}</p>
            <ol> <h2>Favorite Movies: </h2>
                <li>{data[this.props.arrayNum].favoriteMovies[0]}</li>
                <li>{data[this.props.arrayNum].favoriteMovies[1]}</li>
                <li>{data[this.props.arrayNum].favoriteMovies[2]}</li>
            </ol>
            <h1 className="header1">{this.props.indexNum}/{data.length}</h1>
           
        </div>
        )
    }
}


export default DisplayContent;
