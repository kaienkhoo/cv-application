import { useState } from 'react'

function Details({ isEditing }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <section className="details-section">
            <h2>General Information</h2>
            {isEditing ? (
                <div className='inputs-group'>
                    <label htmlFor='name'>Name:<input id='name' type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required></input></label>
                    <label htmlFor='email'>Email:<input id='email' type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required></input></label>
                    <label htmlFor='phone'>Phone Number:<input id='phone' type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required></input></label>
                </div>
            ) : (
                <div className="view-group">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                </div>
            )}

        </section>
    )
}

export default Details