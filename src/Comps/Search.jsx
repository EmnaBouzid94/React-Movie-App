import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            tab:[{class:"far fa-star",i:0},{class:"far fa-star",i:1},{class:"far fa-star",i:2},{class:"far fa-star",i:3},{class:"far fa-star",i:4}],
            tab1:[{class:"far fa-star",i:0},{class:"far fa-star",i:1},{class:"far fa-star",i:2},{class:"far fa-star",i:3},{class:"far fa-star",i:4}],
            tab2:[{class:"fas fa-star",i:0},{class:"fas fa-star",i:1},{class:"fas fa-star",i:2},{class:"fas fa-star",i:3},{class:"fas fa-star",i:4}],
            j:0
          }
    }
    
    render() { 
        
        return ( <div className="search">
            <div >
                <input type="text" placeholder="Type movie name to search" onChange={(event)=>this.props.search(event.target.value)}></input>
                <button className="button">Search</button>
            </div>
            <div className="rate">
            <p>Minimum rating</p>
            
            <div className="stars">
            {this.state.tab.map(el=><i className={el.class} key={Math.random()} onClick={()=>{ 
                this.props.number(el.i)
            this.setState({tab:this.state.tab2.slice(0,el.i+1).concat(this.state.tab1.slice(el.i+1)),j:el.i+1})}}/>)}
            </div>
          </div>
            
            
            
        </div> );
    }
}
 
export default Search;