import React, { FC, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { User } from '../../components/fakeDb/users'
import { AiOutlineUser } from 'react-icons/ai'

import "./../../styles/userdetails.scss"
const UserDetails: FC = () => {

    type tabProps = "General Details" | "Documents" | "Bank Details" | 
    "Loans" | "Savings" | "App and System"

    const { id } = useParams()

    const [user, setuser] = useState<User | undefined>(undefined)

    const [activeTab, setactiveTab] = useState<tabProps>("General Details")

    useEffect(() =>{

        let users: User[] = JSON.parse(localStorage.getItem("users") ?? "[]")

       let search = users.find(user => user.id == Number(id))

       setuser(search)


    }, [])

  return (
    <div className='userdetails'>

     <div className="first goback">
        <img src="/back.png" alt="back" />
        <p>Back to users</p>
     </div>

     <div className="second two-column">
        <p>Users Details</p>
        <div className='row'>
            <p>BLACKLIST USER</p>
            <p>ACTIVATE USER</p>
        </div>
     </div>

     <div className="third">
     <div className="user-profile">
      <div className="user-info">
        <div className='d-flex'>
        <div className="avatar">
          <span className="icon">
           <AiOutlineUser />
            </span>
        </div>
        <div className="details">
          <h3>{user?.username}</h3>
          <p>46rty55</p>
        </div>
        </div>

        <div className="tier">
          <span>User’s Tier</span>
          <div className="stars">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <span key={index} className={`star ${index < 4 ? 'filled' : ''}`}>★</span>
              ))}
          </div>
        </div>

        <div className="balance">
          <h3>4667</h3>
          <p>Savings</p>
        </div>
      </div>
      <div className="tabs">
        
        {
          [
            "General Details", "Documents", "Bank Details", 
            "Loans", "Savings", "App and System"
          ].map((item: any, i: number) =>(
            <span key={i} onClick={() => setactiveTab(item)} className={`tab ${
              activeTab === item? 'active' : ""
            }`}>{item}</span>
          ))
        }
      </div>
    </div>
     </div>

        
     <div className="fourth">
      <div className="profile">
        <section className="section">
          <h2>Personal Information</h2>
          <div className="row">
            <div>
              <p>Full Name:</p>
              <h6>{user?.username}</h6>
            </div>
            <div>
              <p>Phone Number:</p>
              <h6>{user?.phoneNumber}</h6>
            </div>
            
            <div>
              <p>Email</p>
              <h6>{user?.email}</h6>
            </div>
            <div>
              <p>BVN:</p>
              <h6>3455899DF</h6>
            </div>
            <div>
              <p>Gender:</p>
              <h6>M</h6>
            </div>
            
            <div>
              <p>Marital Status</p>
              <h6>Single</h6>
            </div>
            <div>
              <p>Children</p>
              <h6>2</h6>
            </div>
            <div>
              <p>Type of Residence</p>
              <h6>Office</h6>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Education and Employment</h2>
          <div className="row">
            <div>
              <p>Level of Education:</p>
              <h6>BSc</h6>
            </div>
            <div>
              <p>Employment Status:</p>
              <h6>Unemployed</h6>
            </div>
            <div>
              <p>Sector of Employment</p>
              <h6>IT</h6>
            </div>
            <div>
              <p>Duration Of Employment</p>
              <h6>6months</h6>
            </div>
            <div>
              <p>Office Email</p>
              <h6>test@gmail.com</h6>
            </div>
            <div>
              <p>Monthly Income</p>
              <h6>10000</h6>
            </div>
            <div>
              <p>Loan Repayment</p>
              <h6>50000</h6>
            </div>
           
            
          </div>
        </section>

        <section className="section">
          <h2>Socials</h2>
          <div className="row">
            <div>
              <p>Twitter:</p> 
              <h6>@grace_effiom</h6>
              </div>
            <div>
              <p>Facebook</p>
              <h6>Grace Effiom</h6>
            </div>
            <div>
              <p>Instagram</p>
              <h6>Grace Effiom</h6>
            </div>
            
          </div>
        </section>

        <section className="section">
          <h2>Guarantor</h2>
          
            <div className="row">
              <div>
                <p>Full Name:</p>
                <h6>Debby Ogana</h6>
              </div>
              <div>
                <p>Phone Number</p>
                <h6>098678904567</h6>
              </div>
              <div>
                <p>Email</p>
                <h6>debbyogana@gmail.com</h6>
              </div>
              <div>
                <p>Relationship</p>
                <h6>Married</h6>
              </div>
            </div>
        
        </section>
      </div>
     </div>

  </div>
  )
}

export default UserDetails