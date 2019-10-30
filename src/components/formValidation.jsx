import React from 'react' ;
import { Button, Checkbox, Form } from 'semantic-ui-react';
class FormValidation extends React.Component{
    state ={
            fName : "",
            lName: "",
            email: "",
            password: "",
            fNameError: "",
            lNameError: "",
            emailError: " ",
            passwordError: "",
    }
    // to input data dynamic
handleChange = e =>{
    this.setState({ 
        ...this.state,
        [e.target.name] : e.target.value
    })
};
// to submit form 
handleSubmit = (event) =>{
        event.preventDefault();
        const isValid = this.validate();
      if(isValid){
          console.log(this.state);
          //clear form
          this.setState(this.state);
      }
    
};
validate = () =>{
    let fNameError = "";
  let lNameError= " ";
   let emailError=" ";
  let passwordError= " ";
    // first name
    if(!this.state.fName){
            fNameError = 'Please enter your first name!';
    }
    // last name
   if(!this.state.lName){
    lNameError = 'Please enter your last name!';
}
//email
if(!this.state.email.includes('@ ') && !this.state.email.includes('.com')){
    emailError = 'Invalid Email';
}
//password
if(this.state.password.length < 3){
    passwordError = 'Must be more than 3';
}
    if(fNameError || lNameError || emailError|| passwordError){
        this.setState({
            fNameError , lNameError , emailError, passwordError
        });
        return false;
    }
    return true; 
};
    render(){
        return(
            
            <Form onSubmit={this.handleSubmit}>
            <Form.Group unstackable widths={2}>
              <Form.Input 
              label='First name' 
              placeholder='First name'
            type ="text"
            name="fName"
            value={this.state.fName}
            onChange={this.handleChange}
               />
               <div style = {{color: "red"}}>{this.state.fNameError}</div>
               
              <Form.Input 
              label='Last name' 
              placeholder='Last name'
              type ="text"
            name="lName"
            value={this.state.lName}
            onChange={this.handleChange}
               />
               <div style = {{color: "red"}}>{this.state.lNameError
            }</div>
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input 
              label='Email'
               placeholder="alita@animate.com" 
               type ="email"
               name="email"
            value={this.state.email}
            onChange={this.handleChange}
               />
               <div style = {{color: "red"}}>{this.state.emailError}</div>
              <Form.Input 
              label='password'
               placeholder='password' 
               type ="password"
               name="password"
               value={this.state.password}
               onChange={this.handleChange}
               />
               <div style = {{color: "red"}}>{this.state.passwordError}</div>
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button type='submit'>Submit</Button>
          </Form>
           
        );                    

    }
}
export default FormValidation;