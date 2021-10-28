import PropTypes from "prop-types";

export default function Profile(props) {
  const { name, tag, location, avatar, folowers, views, likes } = props;
  return (
    <div className="profile">
      <div className="profile_container">
        <div className="profile_description">
          <img
            src={avatar}
            alt="Аватар пользователя"
            className="description_avatar"
          />
          <p className="description_name">{name}</p>
          <p className="description_tag">{tag}</p>
          <p className="description_location">{location}</p>
        </div>
        <ul className="profile_stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{folowers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  folowers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
