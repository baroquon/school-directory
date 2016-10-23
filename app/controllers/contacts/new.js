import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit(){
      let newPerson = {
        firstName: this.get('newFirstName'),
        lastName:  this.get('newLastName'),
        email:     this.get('newEmail'),
        phone:     this.get('newPhone'),
        title:     this.get('newTitle'),
        avatar:    this.get('newAvatar'),
      };
      return this.send('createPerson', newPerson);
    }
  }
});
