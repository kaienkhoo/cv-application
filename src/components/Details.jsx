import { useState } from 'react'

function Details() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <section className="details-section">
            <h2>General Information</h2>
            <label htmlFor='name'>Name:<input id='name' type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}></input></label>
            <label htmlFor='email'>Email:<input id='email' type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input></label>
            <label htmlFor='phone'>Phone Number:<input id='phone' type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)}></input></label>
        </section>
    )
}

export default Details