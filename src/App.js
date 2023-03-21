import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import { ChannelDetail, Feed, Navbar, SearchFeed, SearchVideos, VideoDetail } from './Components';

function App() {
  return (
    <Router >
      <Box>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' element={<SearchVideos/>}/>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
