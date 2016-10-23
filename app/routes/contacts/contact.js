import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('person', params.person_id);
  },
  actions: {
    delete(model){
      model.destroyRecord().then(() =>{
        this.transitionTo('contacts');
      });
    }
  }
});
