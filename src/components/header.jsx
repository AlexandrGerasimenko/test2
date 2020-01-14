import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
    <div className="header">
    <div className = 'headerLinks'>
        <Link to={'/countries'}>Countries</Link>
        <Link to={'/callCenters'}>CallCenters</Link>
        <Link to={'/users'}>Users</Link>
    </div>
    <div>
        <Link to={'/login'}>
            <button onClick ={ () => localStorage.removeItem('token')} >Exit</button>
        </Link>
        </div>
    </div>
)

export default Header