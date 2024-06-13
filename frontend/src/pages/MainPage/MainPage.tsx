// MainPage.jsx
import { useEffect, useState } from 'react';
//import userService from '../../services/userService.js'; //for database
//import Header from '../../components/User.jsx';  // Import the Header component; for database
import EventComponent from '../../components/Event.jsx';  // Ensure Event component is imported
import './MainPage.css';
import backendService from '../../services/backendService.js';


const Main = () => {
  //const [users, setUsers] = useState([]);
  const [eventName, setEventName] = useState('');
  const [events, setEvents] = useState([]);
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  /* for database
  useEffect(() => {
    userService.getUsers().then(initialUsers => {
      setUsers(initialUsers)
    })
  }, []);*/

  useEffect(() => {
    if (submitted) {
      const updateState = async () => {
        const { newEvents, newDates, newTimes } = await backendService.postEventName(eventName);
        setEvents(prevEvents => prevEvents.concat(newEvents));
        setDates(prevDates => prevDates.concat(newDates));
        setTimes(prevTimes => prevTimes.concat(newTimes));
        setEventName('');
        setSubmitted(false);
      };
      updateState();
    }
  }, [submitted]);

  const handleSubmit = async (event:React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleEventChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEventName(event.target.value);
  }

  //this line was below but removed since db isn't setup
  //{users.map((user) => <Header key={user.id} user={user} />)}
  return (
    <div className="main-page">

      <div className="search-container">
        <h1>Events:</h1>
        <form onSubmit={handleSubmit}>
          <input className="search-input" value={eventName} onChange={handleEventChange} />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <ul>
        {events.map((event, index) =>
          <EventComponent key={index} name={event} date={dates[index]} time={times[index]} />
        )}
      </ul>
    </div>
  );
}

export default Main;




