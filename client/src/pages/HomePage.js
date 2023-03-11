import { useState } from "react"
import { useAppCtx } from "../utils/AppContext"
import useApi from "../utils/useApi"

import { Generator } from "../components"

const HomePage = () => {
  const { user, location, setLocation } = useAppCtx()
  const { fetchIt, myName } = useApi()
  
  const [ formData, setFormData ] = useState(location)

  const updateLocation = (e) => {
    e.preventDefault()
    setLocation(formData)
  }

  const fetchData = async () => {
    const response = await fetch('/api/user/verify')
    const data = await response.json()
    console.log(data)
  }

  const data = fetchIt('api url here')

  return (
    <>
      <h1>Home Page</h1>
      <p>Location: {location}</p>

      { !user ? (
        <p>The user is not logged in.</p>
      ) : (
        <p>The user is logged in.</p>
      )}

        <form>
          <input type='text' name='location' value={formData} onChange={(e) => setFormData(e.target.value)} />
          <button onClick={updateLocation}>save new location</button>
        </form>


        <Generator/>
    </>
  )
}

export default HomePage