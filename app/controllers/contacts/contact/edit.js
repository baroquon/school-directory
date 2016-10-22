import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit(changeset) {
      return changeset.save().then(()=>{
        this.transitionToRoute('contacts.contact.index');
      });
    },
    rollback(changeset) {
      return changeset.rollback();
    }
  }
});
