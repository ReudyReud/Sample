import * as React from 'react';
// import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Alert, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

export default class Validation extends React.Component {
  
  
 public render() {
   // tslint:disable-next-line:no-unused-expression
   
    return (
      
      <Form>

      <h1>Form</h1>
      
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
       <FormGroup id = "theId">
          <Label for="exampleEmail">Input without validation</Label>
          <Input />
          <FormFeedback>You will not be able to see this</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" >Valid input</Label>
          <Input valid = {true} />
          <FormFeedback valid = {true}>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Invalid input</Label>
          <Input invalid = {true}/>
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Input without validation</Label>
          <Input />
          <FormFeedback tooltip = {true}>You will not be able to see this</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input valid = {true} />
          <FormFeedback valid = {true} tooltip = {true}>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Invalid input</Label>
          <Input invalid = {true} />
          <FormFeedback tooltip = {true}>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <Button color="success">success</Button>{' '}
      </Form>
    );
  }
}