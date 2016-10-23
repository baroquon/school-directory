import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPerson(newProperties){
      let newPerson = this.store.createRecord('person', newProperties);
      return newPerson.save().then((savedPerson)=> {
        this.transitionTo('contacts.contact', savedPerson.get('id'))
      }, (error) => {
        console.log(error);
      });
    }
  }
});
