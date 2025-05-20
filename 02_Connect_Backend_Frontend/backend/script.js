import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get ('/', (req, res) => {
    res.send('Server is running!');
})

app.get ('/api/students', (req, res) => {
    const students = [
        {
            id: 1,
            name: "Student 1",
            roll: "2024UGEE029",
        },
        {
            id: 2,
            name: "Student 2",
            roll: "2024UGEE009",
        },
        {
            id: 3,
            name: "Student 3",
            roll: "2024UGEE021",
        },
        {
            id: 4,
            name: "Student 4",
            roll: "2024UGEE114",
        },
        {
            id: 5,
            name: "Student 5",
            roll: "2024UGEE028",
        },


    ]
    res.send(students);
})

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})