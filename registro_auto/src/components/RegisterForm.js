import React from "react";

class RegisterForm extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            modelo:" ",
            marca: " ",
            tipo_combustible: " ",
            tipo_auto : " ",
            tipo_transmision :" ",
            anio : " ",
            isDisable: true,
        }

    }

    handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        let returnValue = {
            [name]: value,
        }

        


        this.setState(returnValue);
    }


    
    render(){
        return(
            <div className="jumbotron">
                <h2>
                    Registro de automoviles "Garcia".
                </h2>

                <div className="form-group">
                    <label className="col-sm-2 col-form-label">modelo del auto: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="modelo" 
                        className= "modelo"
                        value={this.state.modelo}
                        onChange={this.handleChange}    
                        />
                </div>

                <div className="form-group">
                    <label >marca el auto:</label>
                    <input  type="text" 
                         name="marca" 
                        className="form-control custom-input" 
                        value={this.state.marca}
                        onChange={this.handleChange}>
                    </input>
                </div>

                <div className="form-group">
                    <label >tipo de combustible:</label>
                    <input  type="text" 
                         name="tipo_combustible" 
                        className="form-control custom-i" 
                        value={this.state.tipo_combustible}
                        onChange={this.handleChange}>
                      
                    </input>
                </div>

                <div className="form-group">
                    <label >tipo de auto:</label>
                    <input  type="text" 
                         name="tipo_auto" 
                        className="form-control custom-in" 
                        value={this.state.tipo_auto}
                        onChange={this.handleChange}>
                      
                    </input>
                </div>

                <div className="form-group">
                    <label >tipo de transmision:</label>
                    <input  type="text" 
                         name="tipo_transmision" 
                        className="form-control custom-inp" 
                        value={this.state.tipo_transmision}
                        onChange={this.handleChange}>
                      
                    </input>
                </div>

                <div className="form-group">
                    <label >Año del auto:</label>
                    <input  type="number"  
                        name="anio" 
                        className="form-control custom-inpu" 
                        value={this.state.anio}
                        onChange={this.handleChange}>
                      
                    </input>
                </div>


                <div className="form-group">
                    <button 
                        type="button" 
                        className="btn btn-info" 
                        id="submit_btn"
                        onClick={()=>{
                            this.props.onSubmit({
                                modelo: this.state.modelo,
                                schedule: this.state.marca,
                                tipo_combustible: this.state.tipo_combustible,
                                tipo_auto : this.state.tipo_auto,
                                tipo_transmision : this.state.tipo_transmision,
                                anio : this.state.anio,
                            });
                        }} 
                        disabled = {this.state.isDisable}>Guardar</button>
                </div>
            </div>
        );
    }
}

export default RegisterForm;