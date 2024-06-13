import axios from 'axios';
const baseUrl = "/api/data";

type Accumulator = {
  newEvents: string[];
  newDates: string[];
  newTimes: string[];
}

type EventData = {
  name: string;
  dates: {
    start:{
      localDate: string;
      localTime: string
    }
  }
}

const postEventName = async (eventName:string) => {
  try {
    //getting data from ticketmaster
    const request = await axios.post(baseUrl + "/eventName", { name: eventName }, {
      headers: { "Content-Type": "application/json" },
    });
    //sending ticketmaster data to frontend hook
    //return type is Accumulator
    return request.data.reduce((acc: Accumulator, eventData:EventData): Accumulator => {
      acc.newEvents.push(eventData.name);
      acc.newDates.push(eventData.dates.start.localDate);
      acc.newTimes.push(eventData.dates.start.localTime);
      return acc;
    }, { newEvents: [], newDates: [], newTimes: [] }); //store requested data into these arr
  } catch (error) {
    console.error("Error:", error);
  }
}
export default {postEventName}