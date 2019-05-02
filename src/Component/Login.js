import React, { Component } from 'react'
import { Link} from "react-router-dom";
import axios from 'axios'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={txtUsername:'',txtPassword:''}
    }
    onLogin = async () => {
        try {
            const {txtUsername , txtPassword} = this.state;
            if(txtUsername!=='Admin'){
                alert('Bạn cần đăng nhập dưới quyền admin')
            }
            else{
                const URL = 'https://dinh-test-v1.herokuapp.com/user/signin'
                const response = await axios.post(URL, {username:txtUsername,password:txtPassword});
                if(response.data.success===true){
                this.props.onLogin()
                this.props.history.push('/manager');
            }
            else{
              alert(response.data.message);
            }
            }
    
        } catch (error) {
          alert(error.message)
        }
      }
    render() {
    return (
        <div className="container">
        <div className="d-flex justify-content-center mt-5">
            <div className="card">
                <div className="card-header">
                    <h3>Sign In</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="username"
                            onChange={evt => this.setState({txtUsername : evt.target.value})}/>
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-key"></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="password"
                            onChange={evt => this.setState({txtPassword : evt.target.value})}/>
                        </div>
                        <div className="form-group">
                        <Link to="/manager">
                        <button className="btn btn-success float-right" onClick={ this.onLogin}>
                        Login</button>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
