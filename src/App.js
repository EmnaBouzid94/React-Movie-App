import React, { Component } from 'react';
import './App.css';
import MovieCard from './Comps/MovieCard.jsx';
import Search from './Comps/Search.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tab:["far fa-star ","far fa-star ","far fa-star ","far fa-star ","far fa-star "],
            tab1:["far fa-star ","far fa-star ","far fa-star ","far fa-star ","far fa-star "],
            tab2:["fas fa-star ","fas fa-star ","fas fa-star ","fas fa-star ","fas fa-star "],
      
      b:true,
      rate:5,
      name:"",
      image:"",
      card:[{tab:["fas fa-star ","fas fa-star ","fas fa-star ","fas fa-star ","fas fa-star "],name:'Inception',image:"https://is2-ssl.mzstatic.com/image/thumb/Video113/v4/83/84/eb/8384eb90-6fa0-1a28-a838-b23437efd244/pr_source.lsr/268x0w.jpg",rate:5},{tab:["fas fa-star ","fas fa-star ","fas fa-star ","fas fa-star ","far fa-star "],name:'Blade Runner',image:"https://vignette.wikia.nocookie.net/videotheque-de-morx/images/2/26/Blade_Runner_2049_%282017%29.jpg/revision/latest?cb=20171009062222&path-prefix=fr",rate:4}],
      search:[], 
      text:"",
      number:0
     }
  }
  onChange=(text)=> {
    this.setState({
      text:text
    })
  }
  rate=(number)=>{
    this.setState({
      number:number
    })
  }
  
  
  
  render() { 

    return ( 
      <div className="App">
  <Search search={(text)=>{this.onChange(text)}} number={(number)=>this.rate(number)}/>
  <div className="container">
      
  {this.state.card.filter(el=>el.name.toLowerCase().includes(this.state.text.toLowerCase().trim())&&el.rate>=this.state.number+1).map(el=><MovieCard key={Math.random()} tab={el.tab} image={el.image} name={el.name} />)}
  
  <div className="add">
    <button className="addbutton"onClick={()=>this.setState({b:!this.state.b})}>+</button>
  </div>
  </div>
  <div style={{display:this.state.b?"none":"flex"}}>
    <input type="text" placeholder="Movie Name" onChange={(e)=>this.setState({name:e.target.value})}></input>
    <input type="text" placeholder="Rating" onChange={(e)=>this.setState({rate:e.target.value})}></input>
    <input type="text"placeholder="Image Link" onChange={(e)=>this.setState({image:e.target.value})}></input>
    <button onClick={()=>this.setState({b:!this.state.b,card:[...this.state.card,{tab:this.state.tab2.slice(0,this.state.rate).concat(this.state.tab1.slice(this.state.rate)),name:this.state.name,image:this.state.image,rate:this.state.rate}]})}>ADD</button>
    </div>
  
    </div>
     );
  }
}
 
export default App;
