import './User.css'; // Import the CSS for styling

interface UserFormat {
    firstName: string;
    lastName: string;
  }

const User = ({ user }: {user:UserFormat}) => {
    return (
        <header className='user'>
            <h1>Welcome, {user.firstName} {user.lastName}!</h1>
        </header>
    );
}

export default User;
