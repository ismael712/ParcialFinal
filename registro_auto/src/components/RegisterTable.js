import React from "react";
import RegisterRow from "./RegisterRow";

class RegisterTable extends React.Component{
    render(){
        let rows = this.props.list.map(element=>{
            return <RegisterRow 
                key={element._id} 
                auto={element}
                onDelete= {()=>{
                    this.props.onDelete(element);
                }}
                />
        });

        return(
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">Modelo</th>
                            <th scope="col">Marca</th>
                            <th scope="col">tipo de combustible</th>
                            <th scope="col">tipo de auto</th>
                            <th scope="col">tipo de transmision</th>
                            <th scope="col">año</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RegisterTable;