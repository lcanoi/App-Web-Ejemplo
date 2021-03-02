import React from "react"
import Input from '../components/Input';
import Form from '../components/Form';
import {Container, Button, Alert, Table} from "reactstrap";
import Api from "../utils/Api";
import { connect } from "react-redux"
import {saveBooks, deleteBooks} from "../store/actions"
import { withRouter } from "react-router-dom"

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            displayAlert: false,
        }
        this.input1 = React.createRef()
        this.input2 = React.createRef()
        this.input3 = React.createRef()
        this.input4 = React.createRef()
    }

    componentDidMount () {
        Api.GET(
                "b043df5a",
                (data)=>{
                    this.setState({data:data})
                }
            )
        
            console.log(this.props.books)
    }

    saveValue = () => {
        if (this.input1.current.getValue() == null || this.input3.current.getValue() == null) {
            this.setState({
                displayAlert: true
            });
        } else if (this.input2.current.getValue() == null){
            this.input2.current.setValue("")
        } else {
            this.setState({
                displayAlert: false
            });
            localStorage.setItem("input1", this.input1.current.getValue());
            localStorage.setItem("input2", this.input2.current.getValue());
            localStorage.setItem("input3", this.input3.current.getValue());
            localStorage.setItem("input4", this.input4.current.getValue());
            this.props.history.push("/libros")
        }
    }

    clearForm = () => {
        localStorage.clear();
        window.location.reload();
    }

    render(){
        return (
            <Container>
            <br/>
            <h1 style={{textAlign:'center'}}>Actividad 2. ReactJS y Redux</h1>
            <br/>
            <Form>
                <Input 
                ref={this.input1}
                fieldtype={"text"}
                label={"Nombre "}
                placeholder={"Required*"}
                defaultValue={localStorage.getItem("input2")}/>

                <Input 
                ref={this.input2}
                fieldtype={"text"}
                label={"Apellidos "}
                defaultValue={localStorage.getItem("input2")}/>

                <Input 
                ref={this.input3}
                fieldtype={"text"}
                label={"Correo "}
                placeholder={"Required*"}
                defaultValue={localStorage.getItem("input3")}/>

                <Input 
                ref={this.input4}
                fieldtype={"date"}
                label={"Fecha de nacimiento "}
                defaultValue={localStorage.getItem("input4")}/>

                <Button color="primary" onClick={this.saveValue}>Continuar</Button>
                <span>  </span>
                <Button color="danger" onClick={this.clearForm}>Limpiar formulario</Button>
            </Form>
            <br/>

            {this.state.displayAlert &&  
            <Alert color="danger">
                ¡ Favor de llenar las áreas requeridas !
            </Alert>
            }
            
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.booksState.books
    }
}

const mapDispatchToProps = {saveBooks, deleteBooks}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));