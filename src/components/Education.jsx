import { useState } from "react";

function Educations() {
    const [schoolName, setSchoolName] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    return (
        <section className="education-section">
            <h2>Educational Experience</h2>
            <label htmlFor='schoolName'>School Name:<input id='schoolName' type="text" placeholder="Enter your school name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}></input></label>
            <label htmlFor='title'>Title:<input id='title' type="text" placeholder="Enter title of study" value={title} onChange={(e) => setTitle(e.target.value)}></input></label>
            <label htmlFor='date'>Date:<input id='date' type="text" placeholder="Enter date of study" value={date} onChange={(e) => setDate(e.target.value)}></input></label>
        </section>
    )
}

export default Educations