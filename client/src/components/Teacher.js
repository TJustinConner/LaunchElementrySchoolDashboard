export default function Teacher( { teacher } ) {
    return(
        <div>
            <h2 align='center'>{teacher.first} {teacher.last}</h2>
            <div>Phone Number: {teacher.contact[0]}</div>
            <div>Email: {teacher.contact[1]}</div>
        </div>
    );
}