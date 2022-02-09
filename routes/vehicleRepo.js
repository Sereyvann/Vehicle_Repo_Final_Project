
const express = require('express')
const router = express.Router()
const vehicle_Repo = require('../models/vehicle_Repo')

//Getting all
router.get('/', (req, res) => {
    try {
        const vehicle = await vehicle_Repo.find()
        res.json(vehicle)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Getting one
router.get('/:id', getVehicleRepo, (req, res) => {
    res.json(res.vehicle)
})

//Creating one
router.post('/', async(req, res) => {
    const vehicle = new vehicle_Repo({
        id: req.body.id,
        name: req.body.name,
        model: req.body.model,
        price: req.body.price,
        condition: req.body.condition
    })

    try {
        const newVehicleRepo = await vehicle.save()
        res.status(201).json(newVehicleRepo)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Updating one
router.patch('/:id', getVehicleRepo, async(req, res) => {

    if(req.body.name != null) {
        res.vehicle.name = req.body.name
    }
    if(req.body.model != null) {
        res.vehicle.model = req.body.model
    }
    if(req.body.price != null) {
        res.vehicle.price = req.body.price
    }
    if(req.body.condition != null) {
        res.vehicle.condition = req.body.condition
    }
    try {
        const updateRepo = await res.vehicle.save()
        res.json(updateRepo)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})

//Deleting one
router.delete('/:id', getVehicleRepo, (req, res) => {

    try {
        await res.vehicle.remove()
        res.json({message: 'Delete Repo'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getVehicleRepo (req, res, next) {
    let vehicle
    try {
        vehicle = await vehicle_Repo.findById(req.params.id)
        if(vehicle == null) {
            return res.status(404).json({message: 'Cannot find '})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.vehicle = vehicle
    next()
}




module.exports = router
