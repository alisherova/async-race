import startPage from './startPage.js';
import {handleLocation} from './route.js';
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
 
startPage()
handleLocation()
 

fetch('http://127.0.0.1:3000/garage')
    .then(res => res.json())
    .then(data => console.log(data))