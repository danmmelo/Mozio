import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = { //get the state anytime an action occurs
      text: '',
      email: '',
      emailError0: '',
      emailError1: '',
      emailError2: ''

    }
    // this.clickHandler = this.clickHandler.bind(this);
    // this.textHandle = this.textHandle.bind(this);
  }

  textHandle = (event) => { //Will capture any value inside the field
    this.setState({
      text: event.target.value
    })
  }

  validateEmail = () => {

    let isError = false; //Start with false value
    const errors = {  //Object that will carry value for any error
      emailError0: '',
      emailError1: '',
      emailError2: ''
    };

    if (this.state.text.length === 0) { //if the field is blank emailError0 will get a error
      isError = true;
      console.log(isError);
      errors.emailError0 = "The required fields are not filled out"
      this.setState({
        emailError0: errors.emailError0
      })
    }
    if (this.state.text.indexOf("@") === -1) { //if there is no @ emailError1 will get a error
      isError = true;
      console.log(isError);
      errors.emailError2 = "Email must require @"
      this.setState({
        emailError1: errors.emailError1
      })
    }

    if (!this.state.text.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) { //If the email is invalid emailError2 will get a error
      isError = true;
      console.log(isError);
      errors.emailError2 = "Email invalid"
      this.setState({
        emailError2: errors.emailError2
      })

    }

    this.setState({ //state will remains the same if an error occurs and every time we click in the button the state will change
      ...this.setState, 
      ...errors
    })

    return isError;

  }


  clickHandler = () => {

    let err = this.validateEmail(); //After the function validateEmail was called email will change his state if err is true
    if (!err) {
      this.setState({
        email: this.state.text
      })
    }
  }

  render() {
    return (
      <div class="container-fluid">

        <form class="col-sm-3 container formValidatiom">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input

              type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              type="text"
              onChange={(event) => { this.textHandle(event) }}
              errorText={this.state.emailError}
            />
            <p>{this.state.emailError0}</p>
            <p>{this.state.emailError1}</p>
            <p>{this.state.emailError2}</p>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <button type="button" class="btn btn-primary"
            onClick={this.clickHandler}
          >Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
