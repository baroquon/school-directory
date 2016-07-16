import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() { return faker.name.firstName();},
  lastName()  { return faker.name.lastName(); },
  title()     { return faker.name.prefix(); },
  phone()     { return faker.phone.phoneNumber();},
  email()     { return faker.internet.email(); },
  avatar()    { return faker.internet.avatar(); },
  role()      { return faker.list.random('teacher', 'student')(); }
});
