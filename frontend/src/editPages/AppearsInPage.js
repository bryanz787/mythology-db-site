import React from 'react';
import './Style.css'; 

const AppearsInPage = () => {
  return (
    <div className="non-editable-message-container">
      <h2 className="non-editable-message-title">Sorry, this page cannot be edited.</h2>
      <p className="non-editable-message-content">
        The AppearsIn table only contains primary keys and does not support editing through this interface.
      </p>
    </div>
  );
};

export default AppearsInPage;