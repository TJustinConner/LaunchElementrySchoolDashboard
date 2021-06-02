

export default function Student( { student } ) {
    return(
        <div>
            <h2 align='center'>{student.first} {student.last}</h2>
            <div>&nbsp;Grade: {student.grade}</div>
            <div>&nbsp;Phone Number: {student.contact[0]}</div>
            <div>&nbsp;Email: {student.contact[1]}</div>
        </div>
    );
}