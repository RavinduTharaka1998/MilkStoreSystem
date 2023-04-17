import  React, {Component} from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import 'jspdf-autotable';

import './css/milk.css';
import MilkMachineTableRow from './milkMachineTableRow';


export default  class viewMilkTank extends  Component{


    constructor(props) {
        super(props);

        this.state = {machines : []};
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/milk/machine/')
            .then(response => {
                this.setState({machines : response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.machines.map(function (object, i){
            return <MilkMachineTableRow obj = {object} key = {i}/>;
        });
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Milk Machine Report";
        const headers = [["Machine Number","Machine Type", "Man Power","Store In", "Tank Owner"]];
    
        const data = this.state.machines.map(elt=> [elt.mnumber, elt.machinetype, elt.manpower, elt.place,elt.owner]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("MilkMachineReport.pdf")
      }
   

    render() {
        return(
                <div>
                     <div>
                        <h2 style={{background:'#349beb',padding:10, color:'white'}}>Business Inventory System at Nalin Enterprises (PVT LTD)</h2>
                     </div>
                     <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoh2XlyfEULV988gOmEy94FcfN-2-84Z45fQ&usqp=CAU" width="70" style={{marginLeft:50,marginBottom:10}}/>
                     <div class="sidebar">
                        <a href="/">Bill</a>
                        <a href="/">Stock</a>
                        <a href="/">Financial</a>
                        <a href="/">Resource</a>
                        <a href="/">Employee</a>
                        <a href="/">Sales</a>
                        <a href="/">Marketing</a>
                        <a href="">Report</a>
                    </div>

                    <div class="content">
                        <h3 align="center">Current Milk Machine</h3>
                        <br/>
                        <div className="container" style={{marginLeft:300}}>
                        
                            <br/>
                            {/* <a href = "/viewmilktank" class="btn btn-success">View Machine</a> */}
                            <button className='btn btn-info' onClick={() => this.exportPDF()}>Export Result</button>

                            <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>Machine Number</th>
                                    <th>Machine Type</th>
                                    <th>Man Power</th>
                                    <th>Store Place</th>
                                    <th>Tank Owner</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>
                        </div>
                        
                    </div>
                </div>
        );
    }
}