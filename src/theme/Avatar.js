import React from 'react';


const Avatar = ({ name, profile_url, img_url, role }) => {
  
  return (
    <div class="avatar">
      <a
        class="avatar__photo-link avatar__photo avatar__photo--lg"
        href={ profile_url }
      >
        <img
          alt={ name }
          src={ img_url }
        />
      </a>
      <div class="avatar__intro">
        <h4 class="avatar__name">{ name }</h4>
        <small class="avatar__subtitle">
          { role }
        </small>
      </div>
    </div>
  );
}

export default Avatar;