const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const handler = (req, res) => {
    res.send('ola mada faka.stop saying mada faka. all is correct mada faka. another changes. this from node mon baby')
}
app.get('/', handler);
app.use(cors());
app.use(express.json());
const users = [
    { id: 0, name: "Arafat", phone: '01757154656' },
    { id: 1, name: "Nadim", phone: '01757154656' },
    { id: 2, name: "Shouvic", phone: '01757154656' },
    { id: 3, name: "Mita", phone: '01757154656' },
    { id: 4, name: "Anamika", phone: '01757154656' },
    { id: 5, name: "Anika", phone: '01757154656' },
    { id: 6, name: "Imran khan", phone: '01757154656' },
    { id: 7, name: "Aronno Khan", phone: '01757154656' },
]

// app.get('/users', (req, res) => {
//     res.send(users)
// })
// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    // const result = users.filter(user => user.id == id);
    // console.log(result);
    const user = users[id];
    res.send(user);
})
// search result
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        console.log(searchResult);
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})
app.post('/users', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    newUser.id = users.length;
    users.push(newUser);
    // res.send('post gotten')
    res.json(newUser);
})
app.listen(port, () => {
    console.log('wass up')
})
