import FriendList from "./components/FriendList";
import Profile from "./components/Profile";
import StatisticsItem from "./components/Statistics";
import TransactionHistory from "./components/TransactionHistory";
import userList from "./user.json";
import statistic from "./statistical-data.json";
import transitHist from "./transactions.json";
import style from "../src/index.css";

export default function App() {
  return (
    <div>
      <FriendList />
      <Profile
        name={userList.name}
        tag={userList.tag}
        location={userList.location}
        avatar={userList.avatar}
        folowers={userList.stats.followers}
        views={userList.stats.views}
        likes={userList.stats.likes}
      />
      <StatisticsItem title="UPLOAD STATS" stats={statistic}/>
      <TransactionHistory history={transitHist} />
    </div>
  );
}

