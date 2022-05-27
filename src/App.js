import './App.css';
import {Routes, Route, Link, Router} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import { Contact }from './pages/Contact';
import {Header} from './Component/Header';
import { Projecten } from './pages/Projecten';



function App() {
  const data = 
  [
    {path:"/", name: 'Home', element:<Home/>},
    {path:"/about", name: 'About', element:<About/>},
    {path:"/projecten", name: 'Projecten', element:<Projecten/>},
    {path:"/contact", name: 'Contact', element:<Contact/>}
  ]

  return (
    <div>
      <Header links = {data}/>
      <Routes>
        {data.map(e=><Route key = {e.path} path = {e.path} element = {e.element}/>)}
        {/* <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/projecten" element={<Projecten />} /> */}
      </Routes>
    </div>
  );
}

export default App;
