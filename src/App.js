import './App.css';
import Apis from './api/Apis';
import Post from './api/Post'
import Post2 from './api/Post2'
import Mongoose from './mongoose/Mongoose';
 
function App() {
  
  return (
    <div className="App">
      {/* <Apis /> */}
      <Post />
      {/* <Post2/> */}
      <Mongoose />
    </div>
  );
}

export default App;
