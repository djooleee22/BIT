import React from "react";

class SinglePage extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         cast: []
      }
   }


   fetchDdata(){
      fetch(`https://api.tvmaze.com/shows/${this.props.movies.show.id ? this.props.movies.show.id  : this.props.movies.show.show.id}/cast`).then(res => res.json()).then(dataRes => {
         this.setState({cast: dataRes})
      })
   }

   componentDidMount(){
      this.fetchDdata()
   }

   render(){
        return <div className="single">
         <div className="flexDiv">
            <div className="card extras">
               <img className="card-img" src={this.props.movies.show.image?.medium ? this.props.movies.show.image.medium : this.props.movies.show.show.image.medium}></img>
               <div className="card-text">{this.props.movies.show.name ? this.props.movies.show.name : this.props.movies.show.show.name}</div>
            </div>
            <ul>
                  <h2>CAST</h2>
                  {this.state.cast.filter((el,i) => i < 12).map(el => <li>{el.person.name}</li>)}
            </ul>
         </div>
            <button onClick={this.props.myFunc}>GO TO HOME</button>
        </div>
     }
 }


export default SinglePage;