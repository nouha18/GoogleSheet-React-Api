import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Button,Header,Form,Container} from 'semantic-ui-react';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      age:'',
      salary:'',
      hobbies:''
    }
  }

changeHandler=(e)=>{
  this.setState({[e.target.name]:e.target.value,[e.target.age]:e.target.value,[e.target.salary]:e.target.value,[e.target.hobbies]:e.target.value})
}
submitHundler = e =>{
  e.preventDefault();
  console.log(this.state);
  fetch("https://sheet.best/api/sheets/35d63462-a3ac-4dd3-b6fe-89f1ca48194e",{
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(this.state),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

  //axios.post('https://sheet.best/api/sheets/35d63462-a3ac-4dd3-b6fe-89f1ca48194e',this.state).then(response =>{
    //console.log(response);
 // })
  }
  render(){
    const {name,age,hobbies,salary}=this.state;
    return (
      <Container fluid className="container">
        <Header  as='h2'>Google Sheet</Header>
        <Form className="form">
   <Form.Field>
    <label>Name</label>
    <input placeholder='Enter your name' type='text' name='name' value={name} onChange={this.changeHandler}/>
   </Form.Field>
   <Form.Field>
    <label>Age</label>
    <input placeholder='Enter your Age' type='text' name='age' value={age} onChange={this.changeHandler}/>
   </Form.Field>
   <Form.Field>
    <label>Salary</label>
    <input placeholder='Enter your Salary' type='number' name='salary' value={salary} onChange={this.changeHandler}/>
   </Form.Field>
   <Form.Field>
    <label>Hobbies</label>
    <input placeholder='Enter your Hobbies ' type="text" name="hobbies" value={hobbies} onChange={this.changeHandler}/>
   </Form.Field>
   <Button color="blue" onClick={this.submitHundler}>Submit</Button>
        </Form>
      </Container>
    );
  }
}


