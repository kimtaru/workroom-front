import React from 'react';

export default function MyProfile({
  userName,
  userPosition,
}) {
  return (
    <div id="MyProfile">
      <div className="userPhotoDiv" />
      <div className="userNameDiv">{userName}</div>
      <div className="userPositionDiv">{userPosition}</div>
    </div>
  );
}
