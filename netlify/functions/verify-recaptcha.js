const axios = require('axios');

exports.handler = async (event) => {
    const { recaptchaToken } = JSON.parse(event.body);

    try {
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: '6LcNDBUqAAAAAKOPdr61jnhN2rEYussy3JhtBuXd', // Your actual secret key
                response: recaptchaToken,
            }
        });

        if (response.data.success) {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true }),
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'reCAPTCHA verification failed' }),
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Server error' }),
        };
    }
};
