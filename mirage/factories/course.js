import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.list.random('World History',
                                     'Literature',
                                     'Invertebrate Zoology',
                                     'Algebra',
                                     'Biology',
                                     'Human Anatomy'
                                    )},
  description() { return faker.lorem.paragraph(); },
  creditHours() { return 3;}
});
