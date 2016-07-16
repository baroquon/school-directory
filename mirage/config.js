export default function() {

  this.namespace = 'api';

  this.get('/people', (schema) => {
    return schema.people.all();
  });
  this.get('/people/:id', (schema, request) => {
    return schema.people.find(request.params.id);
  });
  this.get('/experiences', (schema) => {
    return schema.experiences.all();
  });
  this.get('/experiences/:id', (schema, request) => {
    return schema.experiences.find(request.params.id);
  });
  this.get('/courses', (schema) => {
    return schema.courses.all();
  });
  this.get('/courses/:id', (schema, request) => {
    return schema.courses.find(request.params.id);
  });
}
