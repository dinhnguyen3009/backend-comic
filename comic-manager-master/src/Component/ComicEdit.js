import React, { Component } from 'react'
import axios from 'axios'
//Hello{this.props.match.params.idcomic}
export default class ComicEdit extends Component {
  constructor(props){
    super(props)
    this.state={listChapters:[], openForm:false, newOrder:'', newLink:''}
    this.renderChapters= this.renderChapters.bind(this)
    this.addChapterForm= this.addChapterForm.bind(this)
}
componentWillMount(){
    this.setListComics();
}
setListComics = async() => {
  try {
    const URL = "https://dinh-test-v1.herokuapp.com/comic/" + this.props.match.params.idcomic;
      const response = await axios.get(URL)
      this.setState({listChapters : response.data.newDatas.Chapters,openForm:false});
      
  } catch (error) {
      alert(error.message)
  }   
}
editChapter = async() =>{
    try {
      const {newOrder,newLink}=this.state;
        if(newOrder!==''&&newLink!==''){
            const URL = 'https://dinh-test-v1.herokuapp.com/comic/add/'+ this.props.match.params.idcomic;
            const response = await axios.put(URL, {order:newOrder,link:newLink});
            alert(response.data.message) 
            this.setListComics();
        }
        else{
            alert('Không được để trống')
        }    
    } catch (error) {
        alert(error.message)
    }
}
renderChapters(comic){
    return(
        <div className="d-flex" style={{backgroundColor:'#dfe3ee', marginBottom:'10px',borderRadius:'5px'}}>
                <h5 className="text-success col-md-2" style={{margin:'10px'}}>Chapter: {comic.Chapter}</h5>
                <h5 className="text col-md-7" style={{margin:'10px'}}>{comic.Link}</h5>
                <div className="btn-container col-md-3">
                <button className= "btn btn-success" style={{margin:'10px'}}
                    onClick={()=>{this.setState({openForm:true,newOrder:comic.Chapter})}}
                    >Edit Chapter Link</button>
                </div>
            </div>
    )
}

addChapterForm(){
    if(!this.state.openForm) return(
        <button 
          className="btn btn-success"
          style={{width : 200 , margin : 10}}
          onClick={()=>{this.setState({openForm:true,newOrder:''})}}>
                Add Comic
        </button>
     )
     return(
      <div className="form-group word-from" >
          <input
              placeholder="Chapter"
              className="form-control"
              value={this.state.newOrder}
              onChange={evt => this.setState({newOrder : evt.target.value})}/>
          <input
              placeholder="Link Chapter"
              className="form-control"
              value={this.state.newLink}
              onChange={evt => this.setState({newLink : evt.target.value})}/>
          <br />
          <div className="btn-container">
              <button 
                  className="btn btn-success"
                  onClick={this.editChapter}>
                  Add comic
              </button>
              <button
                  className="btn btn-danger"
                  onClick={()=>{this.setState({openForm:false})}}>
                  Cancel
              </button>
          </div>
      </div> 
     )
}

    render() {
    return(
    <div className="word" style={{margin:'5%', width:'90%'}}>
        {this.addChapterForm()}
      {this.state.listChapters.map(c=>this.renderChapters(c))}
    </div>  
    )
  }
}
