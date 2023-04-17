import  React, {Component} from 'react';
import axios from 'axios'

import './css/milk.css';


export default  class addMilkTank extends  Component{


    constructor(props) {
        super(props);

        this.onChangetNumber = this.onChangetNumber.bind(this);
        this.onChangeMilkType = this.onChangeMilkType.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);

        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tnumber: '',
            milktype:'',
            capacity: '',
            place:'',
            owner:'',
            date:'',
            time:''
        }
    }
    onChangetNumber(e){
        this.setState( {
           tnumber: e.target.value
        });
    }
    onChangeMilkType(e){
        this.setState( {
           milktype: e.target.value
        });
    }
    onChangeCapacity(e){
        this.setState( {
           capacity: e.target.value
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
    onChangeDate(e){
        this.setState( {
            date: e.target.value
        });
    }
    onChangeTime(e){
        this.setState( {
            time: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            tnumber : this.state.tnumber,
            milktype : this.state.milktype,
            capacity : this.state.capacity,
            place : this.state.place,
            owner : this.state.owner,
            date : this.state.date,
            time : this.state.time
        };
       
      
                            axios.post('http://localhost:4000/milk/addmilktank',obj)
                                .then(res => {
                                    alert("Registration Successfully");
                                    this.setState({
                                        tnumber: '',
                                        milktype:'',
                                        capacity: '',
                                        place:'',
                                        owner:'',
                                        date:'',
                                        time:''
                                    })
                                    console.log(res.data)});
                            //this.props.history.push('/viewpayment/'+this.props.match.params.id);
                            window.location.replace('/viewmilktank');

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
                        <h3 align="center">Add Milk Tank Form</h3>
                        <br/>
                        <div className="container" style={{marginLeft:300}}>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Tank Number</label>
                                <input type="number" class="form-control" min = "1" value={this.state.tnumber} onChange = {this.onChangetNumber}/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Type of Milk</label>
                                <input type="text" class="form-control" value={this.state.milktype} onChange = {this.onChangeMilkType}/>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Capacity (Liter)</label>
                                <input type="number" class="form-control" min = "1" value={this.state.capacity} onChange = {this.onChangeCapacity}/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Store Place</label>
                                <input type="text" class="form-control" value={this.state.place} onChange = {this.onChangePlace}/>
                                </div>
                            </div>
                          
                            <div class="form-group">
                                <label for="inputAddress">Owner</label>
                                <input type="text" class="form-control" value={this.state.owner} onChange = {this.onChangeOwner}/>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Date</label>
                                <input type="date" class="form-control" value={this.state.date} onChange = {this.onChangeDate}/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Time</label>
                                <input type="time" class="form-control" value={this.state.time} onChange = {this.onChangeTime}/>
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Add Tank</button>
                            </form>

                            <br/>
                            <a href = "/viewmilktank" class="btn btn-success">View Tanks</a>
                        </div>
                        
                    </div>
                </div>
        );
    }
}