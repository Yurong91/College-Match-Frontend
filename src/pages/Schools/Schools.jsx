import { useState, useEffect } from 'react'
import { getSchools } from '../../utilities/schools-service'
import { Link, useNavigate } from 'react-router-dom'
import './Schools.css'

const Schools = () => {
    const [schools, setSchools] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        // IIFE - Immediately Invoked Function Expression
        // ()(), we can put an anonymous function inside the first set of parenthesis and the second set of parenthesis will immediately invoke that function
        (async () => {
            const schoolsRes = await getSchools()
            setSchools(schoolsRes.data)
        })()
    }, [])

    return (
        <div id='school-wrapper'>
            <Link className="btn btn-primary" to='/schools/create'>Add School</Link>

            <div id='school-container'>
                {
                    schools.map(school =>
                        <div 
                            className="card" 
                            id='school-card' 
                            key={school._id}
                            onClick={() => navigate(`/schools/${school._id}`, { state: school })}
                        >
                            <img src={school.city} className="card-name" alt={`School: ${school.name}`} id='school-name' />
                            <div className="card-body">
                                <h5 className="card-name">{school.name}</h5>
                                <p className="card-text">{school.city}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

{/* <button onClick={() => setBool(true)}>CLICK ME</button> */ }
{/* <button onClick={logOut}>LOGOUT</button> */ }
export default Schools;