import { useState } from 'react';

function Job() {
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <section className="job-section">
            <h2>Job Experience</h2>
            <label htmlFor='companyName'>Company Name:<input id='companyName' type="text" placeholder="Enter company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}></input></label>
            <label htmlFor='position'>Position:<input id='position' type="text" placeholder="Enter position" value={position} onChange={(e) => setPosition(e.target.value)}></input></label>
            <div className='date-section'>
                <label htmlFor='startDate'>From:<input id='startDate' type="date" placeholder="Enter start date" value={startDate} onChange={(e) => setStartDate(e.target.value)}></input></label>
                <label htmlFor='endDate'>To:<input id='endDate' type="date" placeholder="Enter end date" value={endDate} onChange={(e) => setEndDate(e.target.value)}></input></label>
            </div>
        </section>
    )
}

export default Job