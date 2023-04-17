const express = require('express');
const milkRoutes = express.Router();


let MilkTanks = require('./milktank.model');
let MilkMachines = require('./milkmachine.model');

milkRoutes.route('/addmilktank').post(function (req,res){
    let milktanks = new MilkTanks(req.body);
    console.log("milk tank add backend calling...")
    milktanks.save()
        .then(milktanks => {
            res.status(200).json({'milktank' : 'milktanks is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

milkRoutes.route('/addmilkmachine').post(function (req,res){
    let milkmachines = new MilkMachines(req.body);
    console.log("milk machine add backend calling...")
    milkmachines.save()
        .then(milkmachines => {
            res.status(200).json({'milkmachine' : 'milkmachines is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

milkRoutes.route('/milktank').get(function (req, res){
    console.log("get milk tank calling");
    MilkTanks.find(function (err,tank){
        if(err)
            console.log(err);
        else{
            res.json(tank)
        }
    });

});

milkRoutes.route('/machine').get(function (req, res){
    console.log("get milk machine calling");
    MilkMachines.find(function (err,machine){
        if(err)
            console.log(err);
        else{
            res.json(machine)
        }
    });

});

milkRoutes.route('/editmilktank/:id').get(function (req,res){
    let id = req.params.id;
    MilkTanks.findById(id, function (err,tanks){
        res.json(tanks);
    });
});

milkRoutes.route('/editmilkmachine/:id').get(function (req,res){
    let id = req.params.id;
    MilkMachines.findById(id, function (err,machines){
        res.json(machines);
    });
});

milkRoutes.route('/updatemilktank/:id').post(function (req,res){
    let id = req.params.id;
    MilkTanks.findById(id, function (err, tanks){
        if(!tanks)
            res.status(404).send("Data is not found??");
        else{
            tanks.tnumber = req.body.tnumber;
            tanks.milktype = req.body.milktype;
            tanks.capacity = req.body.capacity;
            tanks.place = req.body.place;
            tanks.owner = req.body.owner;
            tanks.date = req.body.date;
            tanks.time = req.body.time;


            tanks.save().then(tanks => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


milkRoutes.route('/updatemilkmachine/:id').post(function (req,res){
    let id = req.params.id;
    MilkMachines.findById(id, function (err, machines){
        if(!machines)
            res.status(404).send("Data is not found??");
        else{
            machines.mnumber = req.body.mnumber;
            machines.machinetype = req.body.machinetype;
            machines.manpower = req.body.manpower;
            machines.place = req.body.place;
            machines.owner = req.body.owner;


            machines.save().then(tanks => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

milkRoutes.route('/deletemilktank/:id').get(function(req,res){
    MilkTanks.findByIdAndRemove({_id:req.params.id}, function (err, tanks){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

milkRoutes.route('/deletemilkmachine/:id').get(function(req,res){
    MilkMachines.findByIdAndRemove({_id:req.params.id}, function (err, machines){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});




module.exports = milkRoutes;