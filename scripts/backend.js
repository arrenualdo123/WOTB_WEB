require('dotenv').config();
const express = require('express');
const axios = require('axios');
const qs = require('qs'); // Importa el paquete 'qs' para manejar el formato x-www-form-urlencoded

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
    const { text, targetLanguage } = req.body;
    try {
        const response = await axios.post('https://api-free.deepl.com/v2/translate', 
            qs.stringify({
                auth_key: process.env.API_KEY,
                text: text,
                target_lang: targetLanguage.toUpperCase()
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error en la llamada a la API:', error.message); // Agrega más detalles al error
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

