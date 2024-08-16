const Bug = require("../model/dataModel")
exports.Bug=  (req,res)=>{
    const {name,details}=req.body;
    const DateCurrent = new Date();
    const DateCurren = new Date();
    const ExpireTime = new Date(DateCurren.setDate(DateCurren.getDate() + 3));
    console.log('called')
    const bugObj = new Bug ({
       name,
       details,
       DateCurrent,
       ExpireTime
    });

     bugObj.save()

    .then(response => {
        Bug.find()
        .then(data => {
            res.render('index.ejs',{data})
        })
        .catch(err => {
            return res.send({ msg: "Error occured" })
        })
    })
    .catch( err => {
        res.status(500).json({ error: err })
    })
}  


exports.getBug = (req, res) => {
    
    Bug.find()
        .then(data => {
            res.render('index.ejs',{data})
        })
        .catch(err => {
            return res.send({ msg: "Error occured" })
        })
}