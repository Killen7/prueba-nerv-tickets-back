const { request, response } = require("express")

const tickets = require('../tickets.json')

const getTickets = (req = request, res = response) => {
    try {
        if(tickets)
            res.json(tickets);
    } catch (error) {
        console.log(error)
        res.send("Se ha producido un error")
    }
}

module.exports = getTickets;