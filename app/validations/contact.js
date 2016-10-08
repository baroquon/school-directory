import {
  validatePresence,
  validateLength
} from 'ember-changeset-validations/validators';

export default {
  firstName: [
    validatePresence(true),
    validateLength({ min: 2 })
  ],
  lastName: validatePresence(true),
  email: validatePresence(true),
  phone: [
    validatePresence(true),
    validateLength({ min: 10, max: 20 })
  ]
};
