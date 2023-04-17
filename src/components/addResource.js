import  React, {Component} from 'react';
import axios from 'axios'

import './css/milk.css';


export default  class addResource extends  Component{


    constructor(props) {
        super(props);
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

                    <div class="content" style={{marginTop:20}}>

                        <center>
                            <div className='row' style={{width:'50%'}}>
                                <div className='col'>
                                    <img src = "https://liscarrollengineering.ie/wp-content/uploads/2020/09/DSC_2187-Milk-Tank.jpg" width="300"/>
                                    <br/>
                                    <a href='/addmilktank' className='btn btn-primary'>Add Milk Tank</a>
                                </div>
                                <div className='col'>
                                     <img src = "https://sc04.alicdn.com/kf/H9807f65d3e6e40e7a018ee1dc590b5cfE.jpg" width="200"/>
                                     <br/>
                                     <a href='/addmilkmachine' className='btn btn-success'>Add Milk Machin</a>
                                </div>
                            </div>
                            <div className='row' style={{width:'50%',marginTop:100}}>
                                <div className='col'>
                                    <img src = "https://shilannail.com/wp-content/uploads/2023/03/More-from-our-blog-0422.png" width="200"/>
                                    <br/><br/>
                                    <a href='/viewmilktank' className='btn btn-dark'>View Milk Tank</a>
                                </div>
                                <div className='col'>
                                    <img src = "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/details-open-graph.jpg" width="250"/>
                                    <br/><br/>
                                    <a href='/viewmilkmachine' className='btn btn-warning'>View Milk Machin</a>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
        );
    }
}