import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/orders">Order History</Link>
                        <Link className="nav-link" to="" onClick={handleLogOut}>Log Out</Link>
                    </div>
                </div>
                <Link to="/orders"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">Cart
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>Cart
</svg></Link>
            </div>
        </nav>
    )
}

{/* <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">Ne Order</Link>
            &nbsp;&nbsp;
            <span> Welcome, { user.name } </span>
            &nbsp;&nbsp;
            <Link to="" onClick={ handleLogOut }>Log Out</Link>
        </nav> */}