import Ember from 'ember';
import ContactValidations from '../../../validations/contact';

export default Ember.Controller.extend({
  ContactValidations,
  errorArray: null,
  getTheErrors(changeset){
    console.log(JSON.stringify(changeset.get('errors')));
    return changeset.get('errors').map(error => error.validation)
                                  .reduce((topArr, nestedArr) => { return topArr.concat(nestedArr); }, []);
  },
  actions: {
    submit(changeset) {
      if(Ember.get(changeset, 'isValid')){
        this.set('errorArray', null);
        return changeset.save().then(()=>{
          this.transitionToRoute('contacts.contact.index');
        });
      } else {
        return this.set('errorArray', this.getTheErrors(changeset));
      }
    },
    rollback(changeset) {
      return changeset.rollback();
    }
  }
});
