import React from 'react';
import './empty.style.scss';
const Empty = ({ children }) => (
  <div className="empty">No {children} Assigned Here</div>
);

export default Empty;
