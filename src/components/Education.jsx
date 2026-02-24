import { useState } from "react";

function Educations({ isEditing }) {
    const [schoolName, setSchoolName] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    return (
        <section className="education-section">
            <h2>Educational Experience</h2>
            {isEditing ? (
                <div className='inputs-group'>
                    <label htmlFor='schoolName'>School Name:<input id='schoolName' type="text" placeholder="Enter your school name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} required></input></label>
                    <label htmlFor='title'>Title:<input id='title' type="text" placeholder="Enter title of study" value={title} onChange={(e) => setTitle(e.target.value)} required></input></label>
                    <label htmlFor='date'>Date:<input id='date' type="date" placeholder="Enter date of study" value={date} onChange={(e) => setDate(e.target.value)} required></input></label>
                </div>
            ) : (
                <div className="view-group">
                    <p><strong>School Name:</strong> {schoolName}</p>
                    <p><strong>Title of Study:</strong> {title}</p>
                    <p><strong>Date of Study:</strong> {date}</p>
                </div>
            )}

        </section>
    )
}

export default Educations