import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  company: attr('string'),
  title: attr('string'),
  description: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),

  //relationships
  person: belongsTo('person')
});
