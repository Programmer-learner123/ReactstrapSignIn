import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

class App extends Component {
  render(){
    return(
    
      <Form className="login-form border border-success bg-light">
      <h1><span className="font-weight-light">Sign In!</span></h1>
      
      <FormGroup>
      <div className="container">
      <div className="row">
      <div class="col-12-md-6-md-6">
      <FacebookLoginButton />
      </div>
      <div class="col-12-md-6-md-6">
      <GoogleLoginButton />
      </div>
      </div>
      </div>
      </FormGroup>
      
      <FormGroup className="text-center"><span className="font-weight-light">or</span></FormGroup>
      <FormGroup>
        <Input type="email" placeholder="Email"/>
      </FormGroup>

      <FormGroup>
      <Input type="password" placeholder="Password"/>
      </FormGroup>
      <Button className="btn-lg btn-block btn-success">LOG IN</Button>
      <FormGroup>
      <a href="#"className="nounderline text-danger"><div className="text-right font-weight-light "> Forgot Your Password?</div>
      </a>
      </FormGroup>
      <FormGroup>
      <span className="text-left font-weight-light">Don't Have An Account Yet?</span>
      <Button className="btn btn-light btn-outline-dark float-right">SIGN UP!</Button>
      </FormGroup>
      
      </Form>
    
    );
  }

}
export default App;



