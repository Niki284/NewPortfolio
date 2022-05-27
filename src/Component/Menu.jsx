import React from 'react';
import About from './Abouts';
export default function Menu() {
  return (
    <div className='Header'>
        <h1>menu</h1>
        <About/>
    </div>
);
}
/*
render(){
    return {
        <Router>
            <div className='Header'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" rel="stylesheet">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" rel="stylesheet">About</Link>
                        </li>
                        <li>
                            <Link to="/detailproject" rel="stylesheet">DetailProject</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Router path="/About">
                        <About />
                    </Router>
                    <Router path="/DetailProject">
                    <DetailProject />
                </Router>
                <Router path="/">
                    <Home />
                </Router>
                </Switch>
            </div>
        </Router>
    };
};
*/