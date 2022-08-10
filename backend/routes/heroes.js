const express = require('express')
const app = express()
const heroes = require('../heroes.js')
const { verifySlug } = require('../middleware/slug')
const { verifyHeroe } = require('../middleware/heroesExist')
const { verifyPower } = require('../middleware/power')



app.get('/', (req,res)=>{
    res.json(heroes)
})

app.get('/:slug',verifySlug, (req,res)=>{
    res.json(req.heroe)
})

app.get('/:slug/power',verifySlug, (req,res)=>{
    res.json(req.heroe.power)
})

app.post('/', verifyHeroe,  (req,res)=>{
    heroes.push(req.heroe)
    res.json(req.heroe)
})

app.put('/:slug/power',verifySlug, (req,res)=>{
    req.body.forEach(power=>{
        req.heroe.power.push(power)
    })
    res.json(req.heroe.power)
})

app.delete('/:slug',verifySlug, (req,res)=>{
    heroes.splice(req.index, 1)
    res.json(`${req.heroe.slug}`)
})

app.delete('/:slug/power/:power',verifySlug,verifyPower, (req,res)=>{
    
    heroes[req.index].power.splice(req.Powindex, 1)
    res.json(`${req.power}  ${req.heroe.slug}`)
})


module.exports = app
