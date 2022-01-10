import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Recent from './components/Recent';
import AllContacts from './components/AllContacts';
import Favorite from './components/Favorites';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import NewContactModal from './components/NewContactModal';
import SearchBar from './components/SearchBar';

const store = createStore(allReducers)

export default function App() {
  const [value, setValue] = React.useState(1);

  return (
    <Provider store={store}>
      <Box style={{ width: 400, margin: 'auto'}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="All Contacts" icon={<PersonIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
          <SearchBar></SearchBar>
          <br/>
        {(value===0)&&(<Recent/>)}
        {(value===1)&&(<AllContacts/>)}
        {(value===2)&&(<Favorite/>)}
      </Box>
      <NewContactModal/>
    </Provider>

  );
}