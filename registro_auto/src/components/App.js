import React from "react"
import RegisterForm from './RegisterForm'
import RegisterTable from './RegisterTable'
import API from '../utils/apiURLBase'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            auto_list:[],
            id_counter:0
        }
    }

    componentDidMount()
    {
        let options = {

            headers : {
                Accept : 'application/json'
            },

        }
        fetch(`${API.baseURL}/register`,options )
        .then(res =>{return res.json()})
        .then(data=>{
            console.log(data);          
            this.setState({
                auto_list : data.auto
            });
        })
        .catch(err => console.log("Ocurrio un error en la conexion"))
    }

    handleSubmit(auto){
        auto.datetime = new Date();
        let options ={
            method : "POST",
            headers : {
                "Content-type" : "application/json",
                Accept: "application/json"
            },

            body :  JSON.stringify(auto)
        }

        fetch(`${API.baseURL}/register/create`,options)
        .then(res =>{return res.json()})
        .then(data=>{
            console.log(data);
            let butter_list = this.state.auto_list.slice();
          
            this.setState({
                student_list :butter_list.concat([data.student]),
            });
        })
        .catch(err => console.log("Ocurrio un error en la conexion"))

        
    }

    handleDelete(auto){

        let options ={
            method : "DELETE",
            headers : {
                "Content-type" : "application/json",
                Accept: "application/json"
            },

            body :  JSON.stringify({id:auto._id})
        }

        fetch(`${API.baseURL}/register/delete`,options)
        .then(res =>{return res.json()})
        .then(data=>{
            console.log(data);

            let index = this.state.auto_list.find(value=>{
                return value._id === auto._id;
            })
    
            let buffer_list = this.state.auto_list.slice();
            buffer_list.splice(index, 1);
    
            this.setState({
                auto_list: buffer_list
            });
        })
        .catch(err => console.log("Ocurrio un error en la conexion"))
    }
    
    render(){
        return (
            <div className="container" style={{"marginTop":2+"em", "marginBottom":2+"em"}}>
                <RegisterForm 
                    onSubmit = {(auto)=>{
                        this.handleSubmit(auto);
                    }}
                />
                <RegisterTable 
                    list={this.state.auto_list}
                    onDelete={(auto)=>this.handleDelete(auto)}
                    />
            </div>
        );
    }
}

export default App;

