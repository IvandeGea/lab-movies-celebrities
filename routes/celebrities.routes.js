const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")

// all your routes here

router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity")
});

router.post("/celebrities/create", (req, res, next) => {
    let data = req.body;
    Celebrity.create(data)
        .then((data) => {
            res.render("celebrities/celebrities")
        })
        .catch((err) => {
            res.render("celebrities/new-celebrity")
        })
});

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
        .then((data) => {
            res.render("celebrities/celebrities", { celebrity: data })
        })
        .catch((err) => {
            console.log(err)
        })
})

// router.get("/celebrity/:id/edit", (req, res, next) => {
//     let id = req.params.id;
//     Celebrity.findById(id)
//         .then((data) => {
//             res.render("celebrities/edit-celebrity", { celebrity: data })
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })


module.exports = router;