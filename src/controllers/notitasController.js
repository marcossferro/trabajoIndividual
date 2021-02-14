const db = require("../database/models");

module.exports = {

    index: (req, res)=>{

        db.Nota.findAll()
        .then((notas)=>{
            res.render("index", {
                notas: notas
            });
        })
    },

    edit: function(req,res){
        db.Nota.findByPk(req.params.id)
        .then(function(notas){
            return res.render("detail", { notas: notas })
        })
    },

    update: function(req, res){
        if(!req.body.title || !req.body.message){
            res.send("Debes completar todos los campos")
        }else{
            db.Nota.update({
                titulo: req.body.title,
                texto: req.body.message
            },{
                where:{
                    id: req.params.id
                }
            })
            .then(()=>{
                res.redirect("/");
            })
        }
    },
    create: (req, res)=>{

        if(!req.body.title || !req.body.message){
            res.send("Amiguito, te falto algo...");
        }

        db.Nota.create({
            titulo: req.body.title,
            texto: req.body.message
        })
        .then(()=>{
            res.redirect("/");
        })
        .catch(error =>{
            res.send("Esto esta mal: " + error.toString());
        });
    },

    delete: (req, res)=>{

        if(!req.params.id){
            res.send("Amiguito, te falto algo...");
        }
       
        db.Nota.destroy( {
            where: {
                id: req.params.id
            }
        })
        .then(()=>{
            res.redirect("/");
        })
        .catch(error =>{
            res.send("Esto esta mal: " + error.toString());
        });
    }

}