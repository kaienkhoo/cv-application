import Details from './components/Details.jsx'
import Educations from './components/Education.jsx'
import Job from './components/Job.jsx'
import Cta from './components/Cta.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [isEditing, setIsEditing] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setIsEditing(false)
  }

  return (
    <form onSubmit={handleSubmit} className='app-container'>
      <Details isEditing={isEditing} />
      <Educations isEditing={isEditing} />
      <Job isEditing={isEditing} />
      <Cta isEditing={isEditing} setIsEditing={setIsEditing} />
    </form>
  )
}

export default App
