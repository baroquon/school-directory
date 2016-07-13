import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';
import computed from 'ember-computed';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  role: attr('string'),
  title: attr('string'),
  avatar: attr('string'),

  //relationships
  currentCourses: hasMany('course'),
  pastExperiences: hasMany('experience'),

  //computed
  isTeacher: computed('role', function(){
    const role = this.get('role');
    return role === 'teacher';
  }),
  fullName: computed('firstName', 'lastName', 'title', 'isTeacher', function(){
    const firstName = this.get('firstName');
    const lastName  = this.get('lastName');
    const title     = this.get('title');
    const isTeacher = this.get('isTeacher');

    if(isTeacher){
      return `${title} ${firstName} ${lastName}`;
    } else {
      return `${firstName} ${lastName}`;
    }
  })
});
