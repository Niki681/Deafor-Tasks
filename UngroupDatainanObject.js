const ungroupStudents = [{
  teacher: "Ms. Car",
  data: [{
    name: "James",
    emergenceNumber: "617-771-1082",
  }, {
    name: "Alice",
    alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}];

const flat = ungroupStudents.flatMap(({teacher, data}) => data.map(o => Object.assign({teacher}, o)));
console.log(flat)

// Unmodified original Array:
console.log(ungroupStudents)