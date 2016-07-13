import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  currentCourses: hasMany('course'),
  pastExperiences: hasMany('experience')
});
