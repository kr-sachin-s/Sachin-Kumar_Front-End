import React from 'react';
import List from './component/List';
// import List from './List';

const App = () => {
  const items = [
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
  ];

  return (
    <div>
      <h1>My List</h1>
      <List items={items} />
      <List/>

    </div>
  );
};


// Single List Item




export default App;







