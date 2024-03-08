import './App.css';
import 'bulma/css/bulma.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import characterFile from './Data-Files/character-profiles.json'
import Root from './pages/Root';
import CharacterSelect from './pages/CharacterSelect';
import characterSheetLoader from './pages/character-sheet/characterSheetLoader';
import Search from './pages/search/Search';
import CharacterSheet from './pages/character-sheet/CharacterSheet';
import searchLoader from './pages/search/searchLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <CharacterSelect />
      },
      {
        path: "/search",
        element: <Search />,
        loader: searchLoader,
      },
      {
        path: "/characters/:id",
        element: <CharacterSheet />,
        loader: characterSheetLoader,
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
