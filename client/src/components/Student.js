

export default function Student( { student } ) {
    return(
        <div>
            <h2 align='center'>{student.first} {student.last}</h2>
            <div align='left'>&nbsp;Grade: {student.grade}</div>
            <div align='left'>&nbsp;Phone Number: {student.contact[0]}</div>
            <div align='left'>&nbsp;Email: {student.contact[1]}</div>
        </div>
    );
}