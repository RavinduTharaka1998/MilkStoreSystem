import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/milk/deletemilktank/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        alert("Your Milk Tank Successfully Deleted....")
        window.location.replace('/viewmilktank');
    }
    render() {
        return (
           <tr>
                {/* <td>
                   {this.props.obj._id}
               </td> */}
               <td>
                   {this.props.obj.tnumber}
               </td>
               <td>
                   {this.props.obj.milktype}
               </td>
               <td>
                   {this.props.obj.capacity}
               </td>
               <td>
                   {this.props.obj.place}
               </td>
               <td>
                   {this.props.obj.owner}
               </td>
               <td>
                   {this.props.obj.date}
               </td>
               <td>
                   {this.props.obj.time}
               </td>
               <td>
                   <Link to={"/editmilktank/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                    &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;