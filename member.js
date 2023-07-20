function skillsMember() {
  var skills = {
    name: 'John',
    age: 30,
    skills: ['JS', 'React', 'Node', 'CSS'],
    salary: 1000,
    getSalary: function () {
      return this.salary;
    },
    setSalary: function (value) {
      this.salary = value;
    },
    getSkills: function () {
      return this.skills;
    },
    setSkills: function (value) {
      this.skills = value;
    },
  };
  return skills;
}