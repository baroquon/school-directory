import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params){
    return this.store.query('person', {
      page: {
        number: params.page,
        size: params.size
      }
    });
  }
});
