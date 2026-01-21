// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// const UserAddEdit = () => {
//   const [data, setData] = useState({})
//   const navigate = useNavigate()
//   const { id } = useParams()
//   useEffect(() => {
//     fetch('https://67c851b10acf98d070860387.mockapi.io/api/student/' + id)
//       .then(res => res.json())
//       .then(res => {
//         setData(res)
//       })
//   }, [])
//   return (
//     <>
//       <h1>User Add Edit Page</h1>
//       <table>
//         <tr>
//           <td>Name</td>
//           <td>
//             <input
//               type='text'
//               value={data.name}
//               onChange={e => {
//                 setData({ ...data, name: e.target.value })
//               }}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>RollNo</td>
//           <td>
//             <input
//               type='text'
//               value={data.rollno}
//               onChange={e => {
//                 setData({ ...data, rollno: e.target.value })
//               }}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>Age</td>
//           <td>
//             <input
//               type='text'
//               value={data.age}
//               onChange={e => {
//                 setData({ ...data, age: e.target.value })
//               }}
//             />
//           </td>
//         </tr>
//         <tr>
//                <td colSpan={2}>
//                     { id==undefined && 
//                         <button onClick={()=>{
//                         let apiUrl = "https://67c851b10acf98d070860387.mockapi.io/api/student/";
//                         fetch(apiUrl,{
//                             method:"POST",
//                             body:JSON.stringify(data),
//                             headers:{
//                                 "Content-Type":"application/json"
//                             }
//                         })
//                         .then(res=>res.json())
//                         .then(res=>{
//                             navigate("/user")
//                         });
//                     }}>
//                         Add User
//                     </button> }
//                     { id != undefined && 
//                         <button onClick={()=>{
//                             let apiUrl = "https://67c851b10acf98d070860387.mockapi.io/api/student/";
//                             fetch(apiUrl+"/"+id,{
//                                 method:"PUT",
//                                 body:JSON.stringify(data),
//                                 headers:{
//                                     "Content-Type":"application/json"
//                                 }
//                             })
//                             .then(res=>res.json())
//                             .then(res=>{
//                                 navigate("/user")
//                             });
//                         }}>Edit User</button>
//                     }
//                 </td>
//         </tr>
//       </table>
//     </>
//   )
// }

// export default UserAddEdit


//

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserAddEdit = () => {
  const [data, setData] = useState({ name: '', rollno: '', age: '' });
  const navigate = useNavigate();
  const { id } = useParams();
  const apiUrl = 'https://67c851b10acf98d070860387.mockapi.io/api/student';

  // Fetch user data if editing
  useEffect(() => {
    if (id) {
      fetch(`${apiUrl}/${id}`)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.error('Error fetching user:', err));
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}/${id}` : apiUrl;

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(() => navigate('/user'))
      .catch(err => console.error('Error saving user:', err));
  };

  return (
    <>
      <h1>User {id ? 'Edit' : 'Add'} Page</h1>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>RollNo</td>
            <td>
              <input
                type="text"
                name="rollno"
                value={data.rollno}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>
              <input
                type="text"
                name="age"
                value={data.age}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={handleSubmit}>
                {id ? 'Edit User' : 'Add User'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UserAddEdit;
