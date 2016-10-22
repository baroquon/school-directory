import Ember from 'ember';
import ContactValidations from '../../../validations/contact';

export default Ember.Controller.extend({
  ContactValidations,
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
