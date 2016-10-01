export default function() {

  function setPagination(people, pageNumber = 1, pageSize = 10){
    let newReturn = people;
    const lastPerson  = (pageNumber * pageSize);
    const firstPerson = lastPerson - pageSize;
    newReturn["models"] = people.models.slice(firstPerson, lastPerson);
    return newReturn;
  }

  this.namespace = 'api';

  this.get('/people', function(schema, request){
    const pageNumber    = Number(request.queryParams["page[number]"]);
    const pageSize      = Number(request.queryParams["page[size]"]);
    const people        = schema.people.all();
    const totalPages    = Math.ceil(people.models.length/pageSize);

    let paginatedPeople = setPagination(people, pageNumber, pageSize);
    let json            = this.serialize(paginatedPeople);

    json.meta           = { page: pageNumber, total: totalPages };

    return json;
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
