import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, image, handleName }) => {
  return (
    <div>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <img src={image} alt="Profile" />
      <button onClick={handleName}>Show Name</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Azza Souei',
  bio: 'A web developpment student ',
  profession: 'web developper ',
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  image: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
