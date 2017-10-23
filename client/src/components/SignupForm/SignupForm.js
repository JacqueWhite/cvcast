
import React, { Component } from "react";
import API from "../../utils/API";
import "./SignupForm.css";
import {Row, Input, Button, Col} from 'react-materialize';

class NewUser extends Component {
  // state = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   headshot: {
  //     data: '',
  //     contentType: ''
  //   },
  //   linkedIn: "",
  //   gitHubProfile: "",
  //   bio: ""
  // }
  state = {
    firstName: '',
    lastName: '',
    email: '',
    headshot: { file: '', filename: ''},
    linkedIn: '',
    gitHubProfile: '',
    bio: ''
  }

  handleInputChange = event => {
    const { name, value, files } = event.target;
    // // ternary operator if file => get file, else get value
    this.setState({ [name]: files ? { file: files[0], filename: value } : value });
    
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log("oh no robots!");
    // if (this.state.firstName && this.state.lastName && this.state.email) {
    //   var myUser = {
    //     firstName: this.state.firstName,
    //     lastName: this.state.lastName,
    //     email: this.state.email,
    //     headshot: this.state.headshot,
    //     linkedIn: this.state.linkedIn,
    //     gitHubProfile: this.state.gitHubProfile,
    //     bio: this.state.bio

    //   };
      const myUser = Object.keys(this.state).reduce((a, x) => {
        if (x == 'headshot') {
          a.append(x, this.state[x].file, this.state[x].filename)
        } else {
          a.append(x, this.state[x])          
        }
        return a
      }, new FormData())

      API.saveUser(myUser)
        .catch(err => console.log(err));

      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        headshot: { file: '', filename: ''},
        linkedIn: '',
        gitHubProfile: '',
        bio: ''
      }) 
  };



render() {
    return (
          <Row>
            <div>
              <Row>
              <Col s={6}>
                <Input
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  name="firstName"
                  placeholder="First Name(required)"
                  type="text"
                />
                </Col>
                <Col s={6}>
                <Input
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  name="lastName"
                  placeholder="Last Name (required)"
                  type="text"
                />
                </Col>
              </Row>
              <Row>
                  <Col s={6}>
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email Address (required)"
                    type="text"
                  />
                  </Col>
                  <Col s={6}>
                  <Input
                    value={this.state.headshot}
                    onChange={this.handleInputChange}
                    name="headshot"
                    placeholder=" Add the link to a profile picture."
                    type="text"
                  />
                  </Col>
                  <Col s={6}>
                    <Input
                      value={this.state.linkedIn}
                      onChange={this.handleInputChange}
                      name="linkedIn"
                      placeholder="Add your linkedIn profile link."
                      type="text"
                    />
                  </Col>
                  <Col s={6}>
                    <Input
                      value={this.state.gitHubProfile}
                      onChange={this.handleInputChange}
                      name="gitHubProfile"
                      placeholder="Add your GitHub profile link."
                      type="text"
                    />
                  </Col>
              </Row>

<<<<<<< HEAD
            <form onChange={this.handleInputChange}>
            <Row>
              <Input
                value={this.state.firstName}
                name="firstName"
                placeholder="First Name(required)"
                type="text"
              />
              <Input
                value={this.state.lastName}
                name="lastName"
                placeholder="Last Name (required)"
                type="text"
              />
              <Input
                value={this.state.email}
                name="email"
                placeholder="Email Address (required)"
                type="text"
              />
              <Input
                file={this.state.headshot.file}
                value={this.state.headshot.filename}
                name="headshot"
                placeholder=" Add the link to a profile picture."
                type="file"
              />
              <Input
                value={this.state.linkedIn}
                name="linkedIn"
                placeholder="Add your linkedIn profile link."
                type="text"
              />
              <Input
                value={this.state.gitHubProfile}
                name="gitHubProfile"
                placeholder="Add your GitHub profile link."
                type="text"
              />
              <Input
                value={this.state.bio}
                name="bio"
                placeholder=" Tell me about yourself."
              />
              <Button
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </Button>
            </Row>
            </form>
=======
              <Row>
                <Col s={6}>
                  <Input
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    name="bio"
                    placeholder=" Tell me about yourself."
                  />
                </Col>
              </Row>
                <Button
                  // disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </Button>
              </div>
              </Row>
>>>>>>> test2
          );
}
};
export default NewUser;
