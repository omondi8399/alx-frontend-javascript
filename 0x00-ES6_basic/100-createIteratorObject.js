/*
Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.
*/

export default function createIteratorObject(report) {
    function* employeeIterator() {
      for (const department of Object.values(report.allEmployees)) {
        for (const employee of department) {
          yield employee;
        }
      }
    }
    return employeeIterator();
  }