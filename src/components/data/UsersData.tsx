import React from 'react'
import userPic from '../../images/user.png';
//import { useHistory } from 'react-router-dom';

const Users = ({ users } : { users:any }) => {
  //const history = useHistory();
  return (
    <div>
      {users.map((user : any, i : any) => (
        <div className="card">
        <img className="card-img-top" src={userPic} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title" onClick={() => handleClick(user.id)}>{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

function handleClick(id:any) {
  //history push
  console.log(id + ' clicked.');
}

export default Users