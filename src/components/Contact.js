import React from 'react';
import PropTypes from "prop-types";
import './Contact.css';

function Contact({ name, avatar, online }) {
    return (
      <div className="Contact">
        <img className="avatar" src={avatar} alt={name} />
        <div>
          <p className="name">{name}</p>
          <div className="status">
            <div className={online ? "status-online" : "status-offline"} />
            <p className="status-text">{online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    );
  }
  
  Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool
  };
  

export default Contact;