import axios from 'axios';

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
    <li className="list-none bg-gray-200 border border-gray-300 my-2 p-3 rounded-lg font-sans transition-all duration-200 flex justify-between items-center hover:bg-gray-300 hover:shadow-md">
      <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-start">
              <h2 className="text-xl text-gray-800 m-0">{eventName}</h2>
              <p className="text-lg text-gray-600 mt-1">{date} at {time}</p>
          </div>
          <button onClick={handleAddEvent} className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-300">
              Add Event
          </button>
        </div>
    </li>
  );
  }

export default Event

/*
<li className='event'>
        <div className="event-content">
            <div>
                <h2 className="event-title">{eventName}</h2>
                <p className="event-time">{date} at {time}</p>
            </div>
            <button onClick={handleAddEvent} className="add-event-button">Add Event</button>
        </div>
    </li>
*/
