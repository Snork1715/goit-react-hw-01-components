import FriendsListItem from "./FriendListItem";
import friendsList from "../friends.json";

export default function FriendList() {
  return (
    <div className="friends_container">
      <ul className="friends">
        {friendsList.map((friend) => (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            active={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
}
