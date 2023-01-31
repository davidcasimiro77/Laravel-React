// Use the "beforeRender" or "afterRender" hook
// to manipulate and control the report generation
const axios = require('axios');
async function beforeRender(req, res) {
    console.log("hola")
    const response = await axios.get('http://localhost:8000/api/tareajson');
    req.data.tareas = { ...response.data.tareas
    }
    console.log(req.data.tareas)
}