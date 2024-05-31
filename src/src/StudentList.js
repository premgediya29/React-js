// StudentList.js
import React from 'react';
import { connect } from 'react-redux';
import StudentItem from './StudentItem';
import { deleteStudent, updateStudent } from './action'; // Assuming you have imported updateStudent action

const StudentList = ({ students, deleteStudent, updateStudent }) => {
  return (
    <ul>
      {students.map(student => (
        <StudentItem
          key={student.id}
          student={student}
          onDelete={() => deleteStudent(student.id)}
          onUpdate={(id, updatedStudent) => updateStudent(id, updatedStudent)} // Pass updateStudent function here
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  students: state.students,
});

export default connect(mapStateToProps, { deleteStudent, updateStudent })(StudentList);
