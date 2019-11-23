import React from "react";

class RegisterRow extends React.Component{
    render(){
        let auto = this.props.auto;

        return(
            <tr className="table-active">
                <th> {auto.modelo}</th>
                <td>{auto.marca}</td>
                <td>{auto.tipo_combustible}</td>
                <td>{auto.tipo_auto}</td>
                <td>{auto.tipo_transmision}</td>
                <td>{auto.anio}</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={()=>{
                            this.props.onDelete();
                        }}>
                            Drop
                        </button>
                </td>
            </tr>
        );
    }
}

export default RegisterRow;