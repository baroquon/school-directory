import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'card',
  additionalInformationComponent: Ember.computed('contact.isTeacher', function(){
    if(this.get('contact.isTeacher')){
      return 'past-education';
    } else {
      return 'current-courses';
    }
  })
});
