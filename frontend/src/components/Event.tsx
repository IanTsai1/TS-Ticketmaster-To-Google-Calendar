import axios from 'axios';
import './Event.css'; // Import the CSS for styling

const Event = ({name,date,time}: { name: string; date: string; time: string }) => {
  const eventName:string = name;
  const eventDate:string = date;
  const eventTime:string = time;
  const handleAddEvent = async (event:React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior; prevent submit button from submitting form
    //setSubmitted(true);
    try {
      await insertEvent(); //wait for showEvent to finish returning before going on to next line
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const insertEvent = async () =>{
    try {
      console.log("I'm in insert event");
      await axios.post("/google/calendar/insert", { name: eventName, date: eventDate, time: eventTime}, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

return (
    <li className='event'>
        <div className="event-content">
            <div>
                <h2 className="event-title">{eventName}</h2>
                <p className="event-time">{date} at {time}</p>
            </div>
            <button onClick={handleAddEvent} className="add-event-button">Add Event</button>
        </div>
    </li>
);
  }

export default Event
