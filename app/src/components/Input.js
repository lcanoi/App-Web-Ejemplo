import React from "react"
import { FormGroup, Label, Input as InputB } from "reactstrap";
import BaseField from './BaseField';

class Input extends BaseField{
    constructor(props){
        super(props);
    }

    
    render(){
        return (
            <FormGroup {...this.props}>
                <label>{this.props.label}</label>
                <InputB type={this.props.fieldtype} value={this.state.value} placeholder={this.props.placeholder} onChange={(e)=>{this.setState({value: e.target.value})}}/>
            </FormGroup>
        )
    }
}

export default Input;
