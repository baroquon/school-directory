export default function(server) {

  const people = server.createList('person', 40);

  people.forEach((person) => {
    if(person.role === 'teacher'){
      server.createList('experience', 3, { person });
    } else {
      server.createList('course', 5, { person });
    }
  });
}
