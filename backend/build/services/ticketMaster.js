import dotenv from 'dotenv';
import axios from 'axios';
import express from 'express';
dotenv.config();
const router = express.Router();
const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/";
//const key = import.meta.env.TICKETMASTER_KEY;
const key = process.env.TICKETMASTER_KEY;
console.log("TicketMaster Key: ", key);
//req is used to access information posted to the link; res is used to respond back to the client
router.post("/eventName", async function (req, res) {
    try {
        const keyword = req.body.name;
        console.log("Keyword value: ", keyword);
        const response = await axios.get(ticketMasterUrl + `events.json?apikey=${key}&keyword=${keyword}&size=3`);
        console.log("Got Ticketmaster data successfully!");
        //console.log(response.data)
        const eventData = response.data._embedded.events;
        res.json(eventData);
    }
    catch (error) {
        console.error("Error fetching event data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
export default router;
