import './User.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { IoSettings } from "react-icons/io5";
import prof from "/home/student/nuru_frontend/dashboard/src/image/profile.jpeg";
import { VscBell } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import Searchbar from "../Searchbar/Searchbar.jsx";
import SendMessage from '../SendMessage';
// import { searching } from '../Searchbar/Searchbar.jsx';


function Users() {
  const [, setIsLoading] = useState(false);
  const [, setError] = useState();
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState()

  useEffect(() => {
    getUsers()
  }, []);
  const searching = (search) => {
    setFilter(search)
    console.log(search, 'goooo')
    if (filter !== '') {
      
      const filteredData = users.filter((item) => {
        return Object.values(item.Full_name).join('').toLowerCase().includes(search.toLowerCase());
      },
      )
      setUsers(filteredData)

    }
    else {
      console.log("users", users);
      setUsers(users)

    }

  }
  const getUsers = () => {
    console.log('hhhhh')
    // setIsLoading(true);
    // try {
    // const response = await
    axios.get("https://nurucare.herokuapp.com/api/Users/")
      .then(res => {
        console.log(res.data)
        setUsers(res.data)
      })
    //   console.log(response.data)
    //   if (response.status !== 200) {
    //     throw new Error(`Something went wrong!: ${response.status}`);
    //   }
    //   const data = await response.data.json();
    //   if (data) setUsers(data);
    // } catch (error) {
    //   setError(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };
  return (
    <div className="app">
      <nav className='nav'>
        <div className="title">
          {/* <h1>
                        <span></span>
                    </h1>import prof from "./image/profile.jpeg"; */}
          <div>

            <div class="search">
              <input onChange={e => { searching(e.target.value) }} type="text" class="searchTerm" placeholder="search" />
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>

            </div>
          </div>                </div>
        <div className="notification">
          <VscBell />
        </div>
        <div className="icon">
          <IoSettings />
        </div>
        <Link to="/profile">
          <div className="image">
            <a href="/profile">
              {/* <img src={prof} alt="" /> */}
            </a>
          </div>
        </Link>
      </nav>
      <h1 className='user'>Users</h1>
      <div className='head'>
      </div>
      <Link to='/add_user'>
        <a><button className='add' type="button">Add</button></a></Link>
      <table id="users" className="table table-dark table-borderless">
        <tr>
          <th>Select</th>
          <th>User's full Name</th>
          <th>Child's Name</th>
          <th>Child's Date of Birth</th>
          <th>Registration Date</th>
          <th>User's Phone Number</th>
          <th>Appointment Date</th>
          {/* <th>Action</th> */}
          {/* <th>Action</th> */}
        </tr>
        {/* {filteredUsers.length!==} */}
        {users.map(item => {
          return (
            <tr>
              <td><input type="checkbox" id='check'></input></td>
              <td>{item.Full_name}</td>
              <td>{item.child_name}</td>
              <td>{item.child_date_of_birth}</td>
              <td>{item.registration_date}</td>
              <td>{item.Phone_number}</td>
              <td>{item.appointment_date}</td>

              {/* <td><Link to=" "><button type='submit' onClick={SendMessage} id='send'>Send Message</button></Link></td> */}
              {/* <td>{item.action}</td> */}
            </tr>
          )
        })}
      </table>
      {/* <h2>Add</h2> */}
      {/* <form>
        <input
        type='text'
        name='full_name'
        required='required'
        placeholder='Enter a name'>
        </input>
        </form> */}
      <button className='del' type="button">Delete</button>
    </div>
  );
}
export default Users;
