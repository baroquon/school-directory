import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  previousPage: Ember.computed('page', function(){
    return (this.get('page') > 1) ? this.get('page') - 1 : 1;
  }),
  nextPage: Ember.computed('page', 'model', function(){
    return (this.get('page') < this.get('model.meta.total')) ? this.get('page') + 1 : this.get('model.meta.total');
  }),
  actions: {
    paginate(page){
      this.set('page', page);
    }
  }
});
