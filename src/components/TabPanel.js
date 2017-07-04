import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = ({children, tabIndex}, {selectedIndex}) => (
  tabIndex === selectedIndex &&
  <div className="tab-content">
    <div className="tab-pane active">
      {children}
    </div>
  </div>
);

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.number.isRequired
};

TabPanel.contextTypes = {
  selectedIndex: PropTypes.number.isRequired
};

export default TabPanel;


