import React from "react"
import PropTypes from "prop-types"

class BaseField extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value: props.defaultValue,
        }
    }

    getValue = () => {
        return this.state.value
    }
    setValue = (value) => {
        this.setState({value:value})
    }

}

BaseField.propTypes = {
    label: PropTypes.string,
    fieldtype: PropTypes.string,
    defaultValue: PropTypes.string,
}

BaseField.defaultProps = {
    label:"",
    fieldtype:"text",
    defaultValue:""
}

export default BaseField;