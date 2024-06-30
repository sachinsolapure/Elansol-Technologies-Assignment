import React, { useEffect, useState } from "react";

function DisplayUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/fetchAllUsers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const alldata = await response.json();
        console.log();
        setUsers(alldata);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <h1 style={{textAlign: "center" }}>User List</h1><br />
        <table style={{ width: "80%", border: "1px solid #000", borderCollapse: "collapse" ,backgroundColor:"white",color:"black",marginLeft:"10%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>Name</th>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>Date of Birth</th>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>Email</th>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={{ border: "1px solid #000", padding: "8px",textAlign: "center"  }}>{user.name}</td>
              <td style={{ border: "1px solid #000", padding: "8px",textAlign: "center"  }}>{user.dob}</td>
              <td style={{ border: "1px solid #000", padding: "8px",textAlign: "center" }}>{user.email}</td>
              <td style={{ border: "1px solid #000", padding: "8px",textAlign: "center"  }}>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}
export default DisplayUsers;
