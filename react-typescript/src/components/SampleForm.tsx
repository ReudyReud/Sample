import * as React from 'react';
// import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Alert, Form, Col, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SampleForm extends React.Component<{},{value: string}> {
  constructor(props: string, context: string) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    };
  }

  public getValidationState() {
    const length = this.state.value.length;
    if (length > 10){ 
    return 'success';
      }
    else if (length > 5){
     return 'warning';
      }
    else if (length > 0){ 
        return 'error';}
    return null
  }

  public handleChange(e:any) {
    this.setState({ value: e.target.value });
  }
  public handleSubmit(event: any) {
    alert('Form successfully Submitted ' + this.state.value);
    event.preventDefault();
  }
  
 public render() {
   
    return (
      
      <Form onSubmit={this.handleSubmit}> 
      <h1>Form</h1> 
      <Alert color="primary">
        Sample Form
      </Alert>
       <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input />
        </FormGroup>
        <FormGroup check={true} inline={true}>
          <Label check={false}>
            <Input type="checkbox" /> Input
          </Label>
        </FormGroup>
        <FormGroup check={true} inline={true}>
          <Label check={false}>
             <Input type="checkbox"/> Input
          </Label>
        </FormGroup>
        <FormGroup check={true} inline={true}>
          <Label check={false}>
            <Input type="checkbox" /> Input
          </Label>
        </FormGroup>
        <FormGroup check={true} inline={true}>
          <Label check={false}>
             <Input type="checkbox"/> Input
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" >Valid</Label>
          <Input valid = {true} placeholder="Valid"/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Wrong</Label>
          <Input invalid = {true} placeholder="Invalid"/>
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
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input valid = {true} placeholder="valid"/>
          {/* <FormFeedback valid = {true} tooltip = {true}>Sweet! that name is available</FormFeedback> */}
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup row={false}>
          <Label for="exampleText" sm={2}>Text Area
          </Label>
          <Col sm={14}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        {/* <FormGroup>
          <Label for="examplePassword">Invalid input</Label>
          <Input invalid = {true} />
          <FormFeedback tooltip = {true}>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup> */}
        {/* <Button color="success">success</Button>{' '} */}
        <Input type="submit" value="Submit" />
      </Form>
    );
  }
}