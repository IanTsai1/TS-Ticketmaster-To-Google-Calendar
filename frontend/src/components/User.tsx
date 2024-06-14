interface UserFormat {
    firstName: string;
    lastName: string;
  }

const User = ({ user }: {user:UserFormat}) => {
    return (
        <header className='bg-grey-100 text-gray-800 p-5 text-center border-b border-gray-300 font-sans'>
            <h1>Welcome, {user.firstName} {user.lastName}!</h1>
        </header>
    );
}

export default User;
