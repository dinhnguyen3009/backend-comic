import React, { Component } from 'react'
import { Link} from "react-router-dom";
import axios from 'axios'
export default class Manager extends Component {
constructor(props){
    super(props)
    this.state={listComics:[], openForm:false, newComicName:'', newComicImage:'', newComicAuthor:'', newComicChapterOne:'' , 
    newComic:{Name:'', Image:'',Author:'', ChapterOne:''}}
    this.renderComic= this.renderComic.bind(this)
    this.addComicForm= this.addComicForm.bind(this)
}
componentWillMount(){
    this.setListComics();
}
setListComics = async() => {
  try {
      const response = await axios.get("https://dinh-test-v1.herokuapp.com/comic")
      this.setState({listComics : response.data.newDatas,
                        openForm:false,
                        newComicName:'',
                        newComicImage:'',
                        newComicAuthor:'',
                        newComicChapterOne:'' });
      
  } catch (error) {
      alert(error.message)
  }   
}
addComic = async() =>{
    try {
        if(this.state.newComicName!=='' && this.state.newComicImage!== '' && this.state.newComicAuthor !== '' && this.state.newComicChapterOne!==''){
            const newTempComic = {Name:this.state.newComicName,
                Image:this.state.newComicImage,
                Author:this.state.newComicAuthor,
                ChapterOne:this.state.newComicChapterOne}
            await this.setState({newComic:newTempComic})
            const URL = 'https://dinh-test-v1.herokuapp.com/comic/add';
            const response = await axios.post(URL, {ComicInfo:this.state.newComic});
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
removeComic = async(id) =>{
    const URL = 'https://dinh-test-v1.herokuapp.com/comic/' + id;
    const response = await axios.delete(URL)
    alert(response.data.message)
    this.setListComics();
}
renderComic(comic){
    const URL = "/manager/"+ comic.id;
    return(
        <div className="d-flex" style={{backgroundColor:'#dfe3ee', marginBottom:'10px',borderRadius:'5px'}}>
                <h3 className="text-success col-md" style={{margin:'10px'}}>Comic Name: </h3>
                <h3 className="text col-md" style={{margin:'10px'}}>{comic.name}</h3>
                <div className="btn-container col-md">
                <Link to={URL}>
                <button className= "btn btn-success" style={{margin:'10px'}}
                    onClick={()=>{}}
                    >See Chapter List</button>
                </Link>
                <button className="btn btn-warning" style={{margin:'10px'}}
                onClick={()=>this.removeComic(comic.id)}
                >Remove Chapter</button>
                </div>
            </div>
    )
}

addComicForm(){
    if(!this.state.openForm) return(
        <button 
          className="btn btn-success"
          style={{width : 200 , margin : 10}}
          onClick={()=>{this.setState({openForm:true})}}>
                Add Comic
        </button>
     )
     return(
      <div className="form-group word-from" >
          <input
              placeholder="Tên Truyện"
              className="form-control"
              onChange={evt => this.setState({newComicName : evt.target.value})}/>
          <input
              placeholder="Link ảnh giới thiệu"
              className="form-control"
              onChange={evt => this.setState({newComicImage : evt.target.value})}/>
        <input
              placeholder="Link chapter thứ nhất"
              className="form-control"
              onChange={evt => this.setState({newComicChapterOne : evt.target.value})}/>
        <input
              placeholder="Tác giả"
              className="form-control"
              onChange={evt => this.setState({newComicAuthor : evt.target.value})}/>
          <br />
          <div className="btn-container">
              <button 
                  className="btn btn-success"
                  onClick={this.addComic}>
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
        {this.addComicForm()}
      {this.state.listComics.map(c=>this.renderComic(c))}
    </div>  
    )
  }
}
