import { Factory, faker } from 'ember-cli-mirage';

function aUniversity(){
  let UniversityOf = 'University of ' + faker.address.state();
  let College = `${faker.address.state()} ${faker.list.random('College', 'A & M', 'State University')}`;
  return faker.list.random(UniversityOf, College);
}

export default Factory.extend({
  school()    { return aUniversity(); },
  degree()    { return faker.list.random('B.A.', 'B.S.', 'M.A.', 'M.S.', 'Ph.D.', 'Ed.D.')(); },
  major()     {  return faker.list.random('Computed Science',
                                          'Mathematics',
                                          'Biology',
                                          'Chemistry',
                                          'Literature',
                                          'History')(); },
  minor()     {  return faker.list.random('Computed Science',
                                          'Mathematics',
                                          'Biology',
                                          'Chemistry',
                                          'Literature',
                                          'History')(); },
  startDate() { return faker.date.past(); },
  endDate()   { return faker.date.past(); }
});
