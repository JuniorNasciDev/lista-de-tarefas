
import mysql from 'mysql2/promise'

const conect = await mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tarefaList'
})

export default conect;