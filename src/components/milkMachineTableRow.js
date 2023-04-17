import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/milk/deletemilkmachine/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        alert("Your Milk Machine Successfully Deleted....")
        window.location.replace('/viewmilkmachine');
    }
    render() {
        return (
           <tr>
                {/* <td>
                   {this.props.obj._id}
               </td> */}
               <td>
                   {this.props.obj.mnumber}
               </td>
               <td>
                   {this.props.obj.machinetype}
               </td>
               <td>
                   {this.props.obj.manpower}
               </td>
               <td>
                   {this.props.obj.place}
               </td>
               <td>
                   {this.props.obj.owner}
               </td>
               <td>
                   <Link to={"/editmilkmachine/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                    &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;