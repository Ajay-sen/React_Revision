import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile ()  {

    const {user}=useContext(UserContext)  // here we taking user insjtear setUser, as we want to fetch the data not update
 
    if(!user) return <div>Please Login</div>

    return <div> Welcome {user.username} </div>
}

export default Profile