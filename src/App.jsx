import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link, Navigate, NavLink } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Login from './Login'
import Login1 from './Login1'
import College from './College'
import Student from './Student'
import Department from './Department'
import NavBar from './NavBar'
import PageNoteFound from './PageNoteFound'
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserEdit from './UserEdit'
import Login2 from './Login2'
import User1 from './User1'


// import Navbar from './Navbarr'
// import './Nav.css'

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <Login1></Login1> */}
      {/* <UserList></UserList>
      <UserAdd></UserAdd>
    */}
      {/* <Navbar></Navbar> */}
      <h3>Start using Tailwind in project</h3>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Link to="/">Home</Link><br />
      <Link to="/in/user/about">About</Link><br />
      <Link to="/in/user/login"><h2>Simple-Login</h2></Link>
      <Link to="/login1">UseAction</Link><br/>
      <Link to='/login2' target="_blank" rel="noopener noreferrer">Use-Reducer-Hook </Link><br/>
      <Link to="/User1">Use-API</Link><br/>
      <><NavLink className="list" to="/UserList"><h2>UserList</h2></NavLink>
        <NavLink className="list" to="/add"><h2>UserAdd</h2></NavLink></>

      {/* <NavLink to="/edit/:id"><h2>Edit</h2></NavLink> */}
      <Link to="/"><h2>Back</h2></Link>     {/*Component nhi hai Only link and route hai. */}
      {/* <Link to "/UserList"><h2>UserList</h2></Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='in'>
          <Route path='user'>
            <Route path='/in/user/about' element={<About />} />
            <Route path='/in/user/login' element={<Login />} />
          </Route></Route>

        <Route path='/college' element={<College />}>     {/*Component ko Route bnane ke liye. */}
          <Route path='student' element={<Student />} />
          <Route path='department' element={<Department />} />
        </Route>

        <Route path='/UserList' element={<UserList />} />
        <Route path='/add' element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit />} />
        <Route path='/login1' element={<Login1 />} />
        <Route path='/login2' element={<Login2/>} />
        <Route path='/User1' element={<User1/>} />


        <Route path='/*' element={<PageNoteFound />} />
        {/* <Route path='/*' element={<Navigate to="/" />} /> */}


      </Routes>

    </>
  )
}

export default App
