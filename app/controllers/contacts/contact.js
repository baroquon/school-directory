import Ember from 'ember';

export default Ember.Controller.extend({
  additionalInformationComponent: Ember.computed('model.isTeacher', function(){
    if(this.get('model.isTeacher')){
      return 'past-education';
    } else {
      return 'current-courses';
    }
  })
});
