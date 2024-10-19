import FriendList from './Friend/FriendList';
import Profile from './Profile/Profile'
import userData from './Profile/userData.json'
import friends from './Friend/friends.json'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions.json'


export default function App() {
  return (
    <>
      <Profile
        name = {userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    
    </>
  );
}

