import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import Header from "../container/header";
import Footer from "../container/footer";



export default class App extends React.Component{

  state = {
    "email": "",
    "password": "",
    "result": ""
  }



  render() {


  

    return (

  
      <Container>
        <Header/>
        <br></br><br></br>
        {
          this.state.result==="" &&
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="email" placeholder="something@idk.cool"  value={this.state.email} onChange={this.handleInputs}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="password" placeholder="***" value={this.state.password} onChange={this.handleInputs}/>
            </FormGroup>
            <Button  color='info' onClick={this.submit}>Submit</Button>
          </Form>   
        } 
        <h6>
        {
          this.state.result!=="" &&
          this.state.result.login
        }
        </h6>
        <br></br>
        <h4>
        {
          this.state.result.name &&
          "Welcome"+this.state.result.name+this.state.result.familyname
        }
        </h4>
        
      <Footer/>  
  </Container>
      );
  }
  
  
  submit = () => {
    
    axios ({
      url: 'http://localhost:3000/login',
      method: 'POST',
      data:{
        "email": this.state.email,
        "password": this.state.password
      }
    }).then((response) =>{
        this.setState({
          "result": response.data,
        });
        console.log(response.data.login);
    }).catch((error)=>{
        console.log( error.response.request);
    })

};

  handleInputs= e=>{
    this.setState({
      [e.target.name]:e.target.value
       })
  };

}



