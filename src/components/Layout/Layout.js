import {Outlet} from 'react-router-dom';
import './Layout.css'

const Layout = () => (
    <div>
        <main className="container">
            <Outlet/>
        </main>
    </div>
);

export default Layout;