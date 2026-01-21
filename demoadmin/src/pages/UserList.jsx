// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// const User = () => {
//   const [data, setData] = useState([])
//   const [isUpdating, setIsUpdating] = useState(false)

//   useEffect(() => {
//     fetch('https://67c851b10acf98d070860387.mockapi.io/api/student')
//       .then(res => res.json())
//       .then(res => {
//         setData(res)
//       })
//   }, [isUpdating])

//   const formattedData = data.map(item => {
//     return (
//       <>
//         <tr>
//           <td>{item.id}</td>
//           <td>{item.name}</td>
//           <td>{item.age}</td>
//           <td>
//             <Link className='btn btn-info' to={`/user/${item.id}`}>
//               View
//             </Link>
//           </td>
//           <td>
//             <button
//               className='btn btn-danger'
//               onClick={() => {
//                 let ans = confirm('Are You Delete???')
//                 if (ans) {
//                   let apiurl =
//                     'https://67c851b10acf98d070860387.mockapi.io/api/student/'
//                   fetch(apiurl + item.id, { method: 'DELETE' })
//                     .then(item => item.json())
//                     .then(res => {
//                       setIsUpdating(!isUpdating)
//                     })
//                 }
//               }}
//             >
//               Delete
//             </button>
//           </td>
//           <td>
//             <Link className='btn btn-success' to={`/user/edit/${item.id}`}>
//               Edit
//             </Link>
//           </td>
//         </tr>
//       </>
//     )
//   })
//   return (
//     <>
//       <h1>User List</h1>
//       <Link className='btn btn-primary mb-2' to='/user/add'>
//         Add New User
//       </Link>
//       <table className='table table-hover table-bordered'>
//         <thead>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Age</th>
//           <th colSpan={3}>Action</th>
//         </thead>
//         <tbody>{formattedData}</tbody>
//       </table>
//     </>
//   )
// }

// export default User


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const apiUrl = 'https://67c851b10acf98d070860387.mockapi.io/api/student';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.error('Error fetching users:', err));
  }, [refresh]);

  const handleDelete = id => {
    const confirmDelete = window.confirm('Are you sure you want to delete?');
    if (!confirmDelete) return;

    fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
      .then(() => setRefresh(!refresh))
      .catch(err => console.error('Error deleting user:', err));
  };

  return (
    <>
      <h1>User List</h1>

      <Link className="btn btn-primary mb-2" to="/user/add">
        Add New User
      </Link>

      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <Link className="btn btn-info" to={`/user/${item.id}`}>
                  View
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link className="btn btn-success" to={`/user/edit/${item.id}`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
