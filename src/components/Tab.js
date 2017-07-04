import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const linkClasses = (tabIndex, selectedIndex) => {
  return classNames(
    'nav-link',
    {active: tabIndex === selectedIndex}
  )
};

const handleClick = (onTabChange, tabIndex) => {
  return () => onTabChange(tabIndex)
};

const Tab = ({children, tabIndex}, {selectedIndex, onTabChange}) => (
  <li className="nav-item">
    <a
      role="button"
      className={ linkClasses(tabIndex, selectedIndex) }
      onClick={ handleClick(onTabChange, tabIndex) }>
      { children }
    </a>
  </li>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.number.isRequired
};

Tab.contextTypes = {
  selectedIndex: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired
};

export default Tab;
