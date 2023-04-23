# Explain what the simple List component does.
Ans.The List component is a simple list that displays a collection of items provided through its items prop. Each item in the list is rendered as a SingleListItem component, which is a clickable list item with a text label. When a SingleListItem is clicked, it changes its background color to green and sets its isSelected prop to true. The List component keeps track of the currently selected index by storing it in its own state, and resets this state whenever the items prop changes.

# What problems / warnings are there with code?
Ans.<ol><li>In the SingleListItem component, the onClick handler is not wrapped in a function, which means it will be called immediately on render instead of waiting for a click event. It should be changed to <tt>onClick={() => onClickHandler(index)}.</tt></li>
<li>In the SingleListItem component, the isSelected prop is passed as a truthy value, but it should be a boolean. It should be changed to isSelected={selectedIndex === index}.</li>
<li>In the WrappedListComponent propTypes definition, the array propType is not used correctly. It should be changed to PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string.isRequired })).</li>
<li>In the WrappedListComponent defaultProps definition, the items prop should be an empty array instead of null, as the map function would throw an error if it was passed a null value.</li></ol>

# Please fix, optimize, and/or modify the component as much as you think is necessary.
Ans.<ol><li>Moved the definition of the SingleListItem component inside the List component as it is only used there and does not need to be exported.</li>
<li>Added the key prop to the SingleListItem component to improve performance when rendering lists.</li>
<li>Changed the isSelected prop to be a boolean and fixed the onClick handler in the SingleListItem component.</li>
<li>Updated the propTypes definition of the List component to correctly use the arrayOf propType and make the items prop required.</li>
<li>Changed the defaultProps definition of the List component to use an empty array instead of null.</li></ol>