import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => { // renamed and moved memo to the component definition
  const handleClick = () => {
    onClickHandler(index);
  };

  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={handleClick} // onClick should be passed a function, not the result of a function call
    >
      {text}
    </li>
  );
});

SingleListItem.propTypes = {
  index: PropTypes.number.isRequired, // made index required
  isSelected: PropTypes.bool.isRequired, // made isSelected required
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = memo(({ items }) => { // moved memo to the component definition
  const [selectedIndex, setSelectedIndex] = useState(null); // swapped the order of the variables in useState

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items && items.map((item, index) => (
        <SingleListItem
          key={index} // added a unique key prop to the list item
          onClickHandler={handleClick} // removed the index argument from handleClick
          text={item.text}
          index={index}
          isSelected={index === selectedIndex} // isSelected should be a boolean based on the index
        />
      ))}
    </ul>
  )
});

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired, // made items required
};

export default List;
