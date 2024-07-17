import {createHmac} from 'crypto';
import dotenv from 'dotenv';
dotenv.config();
const {SECRET_KEY, API_KEY} = process.env;

const validateHeaders = (req, res, next) => {
  const {
    'x-date': xDate,
    'x-signature': xSignature,
    'x-authentication': xAuthentication,
  } = req.headers;

  if (!xDate || !xSignature || !xAuthentication) {
    return res.status(400).json({error: 'Missing headers'});
  }
  const url = req.originalUrl;
  const expectedSignature = createHmac('sha256', SECRET_KEY)
    .update(url + xDate)
    .digest('hex');

  if (xSignature !== expectedSignature) {
    return res.status(401).json({error: 'Invalid signature'});
  }

  if (xAuthentication !== API_KEY) {
    return res.status(401).json({error: 'Invalid API key'});
  }

  next();
};

export default validateHeaders;
