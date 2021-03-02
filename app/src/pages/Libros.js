import React from "react"
import Input from '../components/Input';
import Form from '../components/Form';
import {Container, Button, Alert, Table} from "reactstrap";
import Api from "../utils/Api";
import { connect } from "react-redux"
import {saveBooks, deleteBooks} from "../store/actions"

class Libros extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            displayTip: true,
        }
        this.input1 = React.createRef()
        this.isbn = React.createRef()
    }

    searchBook = () => {
        this.setState({
            displayTip: false,
        });
        Api.GET(
            this.isbn.current.getValue(),
            (data)=>{
                this.setState({data:[data]})
            }
        )
        console.log(this.props.books)
    }
    
    render(){
        return (
            <Container>
            <br />
            <h5 style={{textAlign:'right'}}>Usuario</h5>
            <h5 style={{textAlign:'right'}}>
                <span>{localStorage.getItem("input1")}</span> <span>{localStorage.getItem("input2")}</span>
            </h5>
            <div style={{textAlign:'right'}}> <Button color="danger" onClick={()=>{
                    this.props.deleteBooks();
                    localStorage.clear();
                    this.props.history.push("/home");
                    }}>
                    Log Out
                </Button>
                </div>
            <br/>
            <Form>  
                <Input 
                ref={this.isbn}
                fieldtype={"text"}
                label={"Código ISBN "}/>
                {this.state.displayTip &&  
                <Alert color="success">
                    Escribe el código ISBN del libro que quieras buscar (ej: 9780747532743)
                </Alert>
                }
                <br/>
                <Button onClick={()=>{this.searchBook()}}>Buscar en la Web</Button>
                <span>  </span>
                
            </Form>
            <br/>
            <h1>LIBRO</h1>
            <Table>
            <thead>
                <tr>
                <th>Publisher</th>
                <th>Num de páginas</th>
                <th>Título</th>
                <th>Covers</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map((item,index)=>
                <tr key={index}>
                    <td>{item.publishers}</td>
                    <td>{item.number_of_pages}</td>
                    <td>{item.title}</td>
                    <td>{item.covers}</td>
                    <td>
                    <Button
                        color={"primary"} 
                        onClick={()=>{
                            let favBook = JSON.parse(JSON.stringify(this.props.books))
                            favBook.push(item)
                            this.props.saveBooks(favBook)
                        }}>
                        Agregar a favoritos</Button></td>
                </tr>)}
            </tbody>
            <br/>
            </Table>
            <hr style={{color:"red"}, {backgroundColor:"red"}, {height:12}}/>
            <h1>FAVORITOS</h1>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>Publisher</th>
                <th>Num de páginas</th>
                <th>Título</th>
                <th>Covers</th>
                </tr>
            </thead>
            <tbody>
                {this.props.books.map((item,index)=>
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{item.publishers}</td>
                    <td>{item.number_of_pages}</td>
                    <td>{item.title}</td>
                    <td>{item.covers}</td>
                </tr>)}
            </tbody>
            </Table>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Libros);