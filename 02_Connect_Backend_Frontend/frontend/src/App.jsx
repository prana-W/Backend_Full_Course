import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const [student, setStudent] = useState ([])

    useEffect (() => {

        //Here we don't need to do res.json(), parsing etc as all of this is handled by axios

    //     We have used proxy, therefore http://localhost:3000 automatically get appended before it and it will
        //     appear to the server as if the request was made from the 3000 port itself, allowing us to by-pass
        //     CORS issue.
    axios.get ('/api/students')
        .then ((res) => setStudent(res.data))
        .catch((err) => console.log(err))

    })

  return (
    <>
    <h1>Hello World</h1>
        <p>Students list: {student.length}</p>

        {
            student.map ((student) => {
                return (
                    <div key={student.id}>
                        <h3>Student name: {student.name}</h3>
                        <h3>Student Roll number: {student.roll}</h3>
                    </div>
                )
            })
        }
    </>
  )
}

export default App
