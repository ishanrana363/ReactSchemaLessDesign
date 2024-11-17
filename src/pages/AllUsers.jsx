import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const AllUsers = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3000/api/v1/all-user`)
        .then(res => res.json())
        .then(data => setUsers(data.data))
    },[])
    const deleteUser = id=>{
        alert(`User ${id} deleted`)
        fetch(`http://localhost:3000/api/v1/delete-user/${id}`,{
            method: 'DELETE',
        }).then((res)=>{
            if(res.status===200){
                toast.success(`User ${id} deleted`);
                return;
            }
        }).catch((err)=>{
            console.log(err);
        })

    }
    return (
        <div>
            <h1> Total Users : { users.length } </h1>
            {
                users.map((user,index)=>(
                    <div key={index}>
                        <p> User No : {index+1} </p>
                        <h2> User Name : { user.name } </h2>
                        <h3> Email : { user.email } </h3>
                        <button onClick={()=>{deleteUser(user._id)}} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Delete</button>

                    </div>
                ))
            }
        </div>
    )
}

export default AllUsers
