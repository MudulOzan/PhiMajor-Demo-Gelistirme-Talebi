import React from 'react'
import userPic from '../images/user.png'; // Tell webpack this JS file uses this image

const Users = ({ users } : { users:any }) => {
  return (
    <div>
        { console.log(users) }


      {users.map((user : any, i : any) => (
        <div className="card">
        <img className="card-img-top" src={userPic} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Users