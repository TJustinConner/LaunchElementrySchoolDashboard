export default function Student( { student } ) {
    return(
        <div>
            <h2 align='center'>{student.first} {student.last}</h2>
            <div>Grade: {student.grade}</div>
            <div>Phone Number: {student.contact[0]}</div>
            <div>Email: {student.contact[1]}</div>
        </div>
    );
}