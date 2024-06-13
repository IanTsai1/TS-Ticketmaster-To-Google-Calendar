//PROBLEM: Google token expires after 30 seconds
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import { google, Auth, calendar_v3 } from 'googleapis';
dotenv.config();
const router = express.Router();
let userCredential = null;
const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL);
// Access scopes for read-only Drive activity.
const scopes = [
    'https://www.googleapis.com/auth/calendar'
];
//login page for google oauth
router.get("/google", (req, res) => {
    const authorizationUrl = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        // Pass in the scopes array defined above.
        // Alternatively, if only one scope is needed, you can pass a scope URL as a string
        scope: scopes,
        // Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes: true
    });
    res.redirect(authorizationUrl);
});
//get authoriation code from here
router.get('/google/callback', async (req, res) => {
    const { code, error } = req.query; //get the code or error in the link if present "code=", "error="
    if (error) {
        console.error('Error response from OAuth server:', error);
        res.status(500).send('Error occurred during authorization: ' + error);
    }
    else if (code) {
        // Handle authorization code response
        console.log('Authorization code received:', code);
        res.redirect(`/success?code=${code}`);
    }
    else {
        res.status(400).send('Unexpected response from OAuth server.');
    }
});
router.get("/success", async (req, res) => {
    //asserting string time
    const { code } = req.query;
    if (!code) {
        return res.status(400).send('Authorization code didnt get properrly sent to /success.');
    }
    let { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    //save to global variable so we can access it in the future OR save it in database
    userCredential = tokens;
    res.redirect("/main");
});
router.get('/google/calendars', (req, res) => {
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    calendar.calendarList.list({}, (err, response) => {
        if (err) {
            console.error('Error fetching calendars', err);
            res.status(500).send('Failed to fetch calendars due to an error!');
            return;
        }
        //need return to make sure it wont get to next line of code
        if (!response || !response.data || !response.data.items) {
            return res.send("No calendars found.");
        }
        const calendars = response.data.items.map(calendar => ({
            id: calendar.id,
            summary: calendar.summary,
            description: calendar.description || "No description",
            timeZone: calendar.timeZone
        }));
        if (calendars.length) {
            res.json({
                message: "Here are your calendars:",
                calendars: calendars
            });
        }
        else {
            res.send("No calendars found.");
        }
    });
});
// Route to list events from a specified calendar
router.get('/google/events', async (req, res) => {
    //if no value default value is 'primary'
    const calendarId = req.query.calendar ?? 'primary';
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    try {
        const response = await calendar.events.list({
            calendarId,
            timeMin: (new Date()).toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime'
        });
        if (!response.data.items || response.data.items.length === 0) {
            return res.send("No upcoming events found.");
        }
        const events = response.data.items.map(event => ({
            start: event.start?.dateTime || event.start?.date || "No start time",
            end: event.end?.dateTime || event.end?.date || "No end time",
            summary: event.summary || "No title",
            description: event.description || "No description"
        }));
        res.json({
            message: "Here are the upcoming events:",
            events: events
        });
    }
    catch (err) {
        console.error('Failed to fetch events', err);
        res.status(500).send('Failed to fetch events due to an error!');
    }
    /*
    calendar.events.list({
        calendarId,
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
    }, (err:Error|null, response) => {
        if (err) {
            console.error('Can\'t fetch events');
            return res.status(500).send('Failed to fetch events due to an error!');
        }
        if(!response || !response.data || !response.data.items){
            res.send("hi");
        }
        const events = response.data.items.map(event => ({
            start: event.start.dateTime || event.start.date || "no start time",
            end: event.end.dateTime || event.end.date || "no end time",
            summary: event.summary,
            description: event.description || "No description"
        }));
        if (events.length) {
            res.json({
                message: "Here are the upcoming events:",
                events: events
            });
        } else {
            res.send("No upcoming events found.");
        }
    });*/
});
router.post("/google/calendar/insert", async function (req, res) {
    try {
        const name = req.body.name;
        const startTime = req.body.time;
        const date = req.body.date;
        if (!name || !startTime || !date) {
            return res.status(400).send('Missing required fields: name, time, or date.');
        }
        const tmpDate = new Date("2000-01-01T" + startTime); // Assuming the date portion is irrelevant and choosing an arbitrary date
        tmpDate.setHours(tmpDate.getHours() + 1);
        const endTime = tmpDate.toTimeString().slice(0, 8);
        const event = {
            'summary': `${name}`,
            'start': {
                'dateTime': `${date}T${startTime}-05:00`,
                'timeZone': 'America/New_York',
            },
            'end': {
                'dateTime': `${date}T${endTime}-05:00`,
                'timeZone': 'America/New_York',
            }
        };
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
        calendar.events.insert({
            calendarId: 'primary',
            requestBody: event,
        }, function (err, event) {
            if (err) {
                console.log('There was an error contacting the Calendar service: ' + err);
                return;
            }
            console.log('Event created');
        });
        //     const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
        //     const response = await calendar.events.insert({
        //         calendarId: 'primary',
        //         resource: event
        //     });
        //         console.log('Event created!');
        //         res.status(200).send('Event created successfully.');
        //     }
        // catch (error) {
        //     console.error("Error:", error);
        //     res.status(500).send('Failed to create event due to an error.');
        // }
        /*
        calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            }, function(err:Error|null, event:any) {
            if (err) {
                console.log('There was an error contacting the Calendar service: ' + err);
                return;
            }
            console.log('Event created');
        });*/
    }
    catch (error) {
        console.error("Error:", error);
    }
});
export default router;
