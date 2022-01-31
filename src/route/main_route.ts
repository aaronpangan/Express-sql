import customer from './routes/customer.route';

module.exports = (app: any) => {
  app.use('/customer', customer);
};
