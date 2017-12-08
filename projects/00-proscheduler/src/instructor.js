'use strict';

module.exports = function Instructor ( school, id, name ) {

    this.getId = function () {
        return id;
    };

    this.getName = function () {
        return name;
    };

    /*
        Retrieve a list of all Courses this Instructor is assigned to teach.
    */

    this.getCourses = function () {
        return school.getAllCourses().filter( ( course ) => {
            return course.getInstructor().getId() === id;
        } );
    };

    /*
        Retrieve a list of Students this Instructor teaches, across all
        Courses.
    */

    this.getStudents = function () {
        let students = [];
        for ( let course of this.getCourses() ) {
            students = students.concat( course.getStudents() );
        }
        return students;
    };

};
