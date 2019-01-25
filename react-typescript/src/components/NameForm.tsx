import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';



export default class NameForm extends React.Component<{},{ value: string }> {

    constructor(props: string, context: string) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    public getValidationState() {
      // alert("heelllllllllo"); 
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
  
    public render() {
        




      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={'error'}
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>
      );
    }
  }
  
 