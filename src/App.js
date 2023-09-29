import logo from './logo.svg';
import './App.css';
import Places from './components/screens/Places';
import Place from './components/screens/Place';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NoPage from './components/screens/NoPage';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';

function App() {


  return (
    <>
	<Router>
		
		<Routes>
			<Route path="/" exact element={<Places/>}></Route>
			<Route path="place/:id" exact element={<Place/>}></Route>
			<Route path="/auth/login/" exact element={<Login/>} />
            <Route path="/auth/create/" exact element={<Signup/>} />
			<Route path="*" element={<NoPage/>}></Route>
		</Routes>
	</Router>
		
	</>
  );
}

export default App;
