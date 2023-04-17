import  React, {Component} from 'react';
import axios from 'axios'

import './css/milk.css';


export default  class updateMilkMachine extends  Component{


    constructor(props) {
        super(props);

        this.onChangemNumber = this.onChangemNumber.bind(this);
        this.onChangeMachineType = this.onChangeMachineType.bind(this);
        this.onChangeManPower = this.onChangeManPower.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onChangeOwner = this.onChangeOwner.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            mnumber: '',
            machinetype:'',
            manpower: '',
            place:'',
            owner:''
        }
    }

    componentDidMount() {
        //alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/milk/editmilkmachine/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    mnumber: res.data.mnumber,
                    machinetype: res.data.machinetype,
                    manpower: res.data.manpower,
                    place: res.data.place,
                    owner: res.data.owner
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangemNumber(e){
        this.setState( {
           mnumber: e.target.value
        });
    }
    onChangeMachineType(e){
        this.setState( {
           machinetype: e.target.value
        });
    }
    onChangeManPower(e){
        this.setState( {
           manpower: e.target.value
        });
    }
    onChangePlace(e){
        this.setState( {
           place: e.target.value
        });
    }
    onChangeOwner(e){
        this.setState( {
            owner: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            mnumber : this.state.mnumber,
            machinetype : this.state.machinetype,
            manpower : this.state.manpower,
            place : this.state.place,
            owner : this.state.owner,
        };
       
        
                            axios.post('http://localhost:4000/milk/updatemilkmachine/'+this.props.match.params.id,obj)
                                .then(res => {
                                    alert("Machine Updated Successfully");
                                    this.setState({
                                        mnumber: '',
                                        machinetype:'',
                                        manpower: '',
                                        place:'',
                                        owner:''
                                    })
                                    console.log(res.data)});
                            //this.props.history.push('/viewpayment/'+this.props.match.params.id);
                            window.location.replace('/viewmilkmachine');

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
                        <h3 align="center">Edit Milk Machine Form</h3>
                        <br/>
                        <div className="container" style={{marginLeft:300}}>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Machine Number</label>
                                <input type="number" class="form-control" min = "1" value={this.state.mnumber} onChange = {this.onChangemNumber}/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Type of Machine</label>
                                <input type="text" class="form-control" value={this.state.machinetype} onChange = {this.onChangeMachineType}/>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Number of Man Power</label>
                                <input type="number" class="form-control" min = "4" value={this.state.manpower} onChange = {this.onChangeManPower}/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Store Place</label>
                                <input type="text" class="form-control" value={this.state.place} onChange = {this.onChangePlace}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Machine Owner</label>
                                <input type="text" class="form-control" value={this.state.owner} onChange = {this.onChangeOwner}/>
                            </div>
                           
                            <button type="submit" class="btn btn-primary">Update Machine</button>
                            </form>

                            <br/>
                            <a href = "/viewmilktank" class="btn btn-success">View Machine</a>
                        </div>
                        
                    </div>
                </div>
        );
    }
}