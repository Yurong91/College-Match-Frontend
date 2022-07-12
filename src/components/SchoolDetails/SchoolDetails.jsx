import { useLocation, useNavigate } from 'react-router-dom'
import { deleteSchool } from '../../utilities/schools-service'

const SchoolDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const schoolDetails = location.state


    const handleDelete = async () => {
        try {
            const res = await deleteSchool(schoolDetails._id)
            if(res.status === 200) navigate('/schools')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <p>Name: {schoolDetails.name}</p>
            <p>City: {schoolDetails.city}</p>
            <button 
                className='btn btn-primary' 
                onClick={() => navigate(`/movies/${schoolDetails._id}/edit`, { state: schoolDetails })}
            >
                Edit
            </button>
            <button 
                className='btn btn-danger' 
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default SchoolDetails;