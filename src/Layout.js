import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>

          <li> 
            <Link to="/Personal">Personal</Link>
          </li>


          <li> 
            <Link to="/Loan"> Loan </Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;