import React, { FormEvent, useEffect, useState } from 'react';
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import './../../styles/table.scss';
import './../../styles/users.scss';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

// fakeDb

import users, { User } from '../fakeDb/users';
import { useNavigate } from 'react-router-dom';

const Table: React.FC = () => {

  useEffect(() =>{

    localStorage.setItem('users', JSON.stringify(users));

  }, [])


  const [selectedRow, setSelectedRow] = useState<number>(0);

  const navigate = useNavigate()

  function handleFilter(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    let data = new FormData(e.currentTarget);

    let organization = data.get("org");
    let username = data.get("username");
    let email = data.get("email");
    let phoneNumber = data.get("phone");
    let date = data.get("date");
    let filter = data.get("filter");

    let filteredUsers = users.filter((user: User) => {
      if(organization && user.organization!== organization) return false;
      if(username && user.username!== username) return false;
      if(email && user.email!== email) return false;
      if(phoneNumber && user.phoneNumber!== phoneNumber) return false;
      if(date && user.dateJoined!== date) return false;
    
      return true;
    })

   
    

    if(filteredUsers.length > 0) {
      navigate(`/dashboard/user/${filteredUsers[0]?.id}`)
    }else{
      
      alert("no users found")
      
    }
    
    
  }
  function onReset(){
    console.log("helo");
    
  }

 
  const handleSelect = (item: string) => {
   
    // setIsOpen(false); // Close dropdown after selection
  };

  return(
    <main className='container'>

  <form onSubmit={handleFilter} className="filter-panel">
        <div className="filter">
          <label>Organization</label>
          <select name='org'>
            {users?.map((row) =>(
              <option key={row?.id} value={row?.organization}>{row?.organization}</option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label>Username</label>
          <input name='username' type="text" placeholder="User" />
        </div>
        <div className="filter">
          <label>Email</label>
          <input name='email' type="text" placeholder="Email" />
        </div>
        <div className="filter">
          <label>Date</label>
          <input name='date' type="date" />
        </div>
        <div className="filter">
          <label>Phone Number</label>
          <input name='phone' type="text" placeholder="Phone Number" />
        </div>
        <div className="filter">
          <label>Status</label>
          <select name='filter'>
           {
            ["Active", "Inactive", "Pending", "Blacklisted"]?.map((status, i) =>(
              <option key={i} value={status}>{status}</option>
            ))
           }
          </select>
        </div>
        <div className="buttons">
        <button  onClick={onReset}>Reset</button>
        <button >Filter</button>
        </div>
</form>


<section >
 <article className="table-responsive">
   <table className="user-table">
    <thead>
      <tr>
        <th>Organization</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Date Joined</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.organization}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td>{new Date(user.dateJoined).toLocaleDateString("en-GB",{
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}</td>
          <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td>

         
            <td className="dropdown">
              <div className="dropdown-toggle" onClick={() => setSelectedRow(user?.id)}>
                <td><BsThreeDotsVertical /></td>
              
              </div>
              {
                selectedRow == user?.id &&
                <ul className="dropdown-menu">
                {["Profile", "Settings", "Logout"].map((item, index) => (
                  <li
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleSelect(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              }
            </td>
          

        </tr>
      ))}
    </tbody>
  </table>
 </article>

 <article className="pagination">
      <article>
        <p>show</p>
        <select name="" id="">
          <option value="">100</option>
          <option value="">50</option>
          <option value="">10</option>
        </select>
        <p>Out of 100</p>
      </article>
      <article>
        <button>
          <FaLessThan/>
        </button>
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p><BsThreeDots/></p>
            <p>15</p>
            <p>16</p>
          </div>
          <button>
          <FaGreaterThan/>
        </button>
      </article>
 </article>
 </section>
  </main>
  )
}

export default Table;
