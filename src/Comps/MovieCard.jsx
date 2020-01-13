import React, { Component } from 'react';
class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
          }
    }
    render() { 
        return (
        <div className="movie-card" >
            <div className="stars-rate">
            {this.props.tab.map(el=><i className={el} key={Math.random()}/>)}
          </div>
            <img alt=""className="image" src={this.props.image}/>
            
            <p className="movie-name" >{this.props.name}</p>
        </div> );
    }
}
 
export default MovieCard;