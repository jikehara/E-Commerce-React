import React from 'react';
import {Link} from 'react-router-dom';

const style = {
  active: {
    backgroundColor: "red"
  },
  inactive: {
    backgroundColor: '#4286f4',
    borderRadius: '1em'
  }
}



const NavBar = () => {

  let styleActive = false;

  return (
    <div>
      <nav>
        <div style={
         this.styleActive
         ? style.active
         : style.inactive
        }>
          <ul className='nav-list-style'>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
