import Router from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
    return<div className='HomeButton'>
        <Link to="/">
        <img style={{ width: 50, height: 50 }} src="https://free-icon-rainbow.com/i/icon_00569/icon_005690_256.png" alt="Main Page" />
        </Link>
    </div>
}
//<Link to="/">Main Page</Link>
//<button><img src="./home_image_1.png" alt="Main Page" onClick={this.myfunction} /></button>
//https://free-icon-rainbow.com/i/icon_00569/icon_005690_256.png
export default Navigation;