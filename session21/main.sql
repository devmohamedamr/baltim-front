SELECT student_course.review ,
student.name AS student_name ,
course.name as course_name
FROM `student_course`
INNER JOIN student
ON student_course.student_id = student.id
INNER JOIN course
ON course.id = student_course.course_id;