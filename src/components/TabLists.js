import React from 'react';
import PropTypes from 'prop-types';

const TabLists = ({children}) => (
  <ul className="nav nav-tabs">
    {children}
  </ul>
);

TabLists.propTypes = {
  children: PropTypes.node.isRequired
};

export default TabLists;
