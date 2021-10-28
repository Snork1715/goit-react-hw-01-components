import PropTypes from 'prop-types';

export default function FriendsListItem(props) {
  const { id, avatar, name, active } = props;
  return (
    <li className="friend-item" id={id}>
      <div className={(active) ? "item-div" : "item-div item-div__active"}></div>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    active: PropTypes.bool,
};