module.exports = {
  mongoURI: process.env.NODE_ENV === 'test' ? 'mongodb://localhost/testdb' : process.env.MONGO_URI,
  serverURI: process.env.HEROKU_URI || 'http://localhost:4000',
  clientURI: process.env.HEROKU_URI || 'http://localhost:3000',
  secretOrKey: process.env.SECRET_OR_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGrid: process.env.SENDGRID_API_KEY,
  avalaraLicense: process.env.AVALARA_LICENSE,
  avalaraAccountId: process.env.AVALARA_ACCOUNT_ID,
  easymail_url: process.env.EASY_URL,
  easymail_host: process.env.EASY_HOST,
  easymail_key: process.env.EASY_KEY
};
