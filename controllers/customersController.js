const Customer = require('../models/Customer');
const { validationResult } = require('express-validator');

exports.newCustomer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { document } = req.body;
  try {
    let customer = await Customer.findOne({ where: { document } });
    if (customer) {
      return res
        .status(400)
        .json({ msg: 'A customer already exist with this document' });
    }
    customer = new Customer(req.body);
    customer.createdBy = req.user.id;
    await customer.save();
    res.json(customer);
  } catch (error) {
    console.log(error);
    res.staus(500).send('Sorry, something went wrong');
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json({ customers });
  } catch (error) {
    console.log(error);
    res.status(500).send('Sorry, something went wrong');
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({ where: { id: req.params.id } });
    res.json({ customer });
  } catch (error) {
    console.log(error);
    res.status(500).send('Sorry, this user does not exist.');
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    await Customer.update(req.body, {
      where: { id: req.params.id },
    });
    const customer = await Customer.findByPk(req.params.id);
    res.json({ customer });
  } catch (error) {
    console.log('Sorry, this user does not exist.');
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.destroy({ where: { id: req.params.id } });
    res.json({ msg: 'Customer deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Sorry, this user does not exist.');
  }
};
