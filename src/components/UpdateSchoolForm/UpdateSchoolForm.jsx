import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as schoolsService from '../../utilities/schools-service'

const UpdateSchoolForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const school = location.state

    const [schoolDetails, setSchoolDetails] = useState(school)

    const handleChange = e => {
        setSchoolDetails({
            ...schoolDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await schoolsService.updateSchool(schoolDetails)
            // console.log(res)
            if (res.status === 200) navigate(`/schools/${schoolDetails.id}`, { state: schoolDetails })
        } catch (e) {
            console.log(e)
        }
    }

    // console.log(movieDetails)
    return (
        <form className="row g-3" id='create-school-form' onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="inputName4" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputName4"
                    name='name'
                    onChange={handleChange}
                    value={schoolDetails.name}
                    placeholder={school.name}
                />
            </div>
            <div className="col-md-3">
                <label htmlFor="inputCity4" className="form-label">City</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputCity4"
                    name='city'
                    onChange={handleChange}
                    value={schoolDetails.city}
                />
            </div>
            <div className="col-md-3">
                <label htmlFor="inputState4" className="form-label">State</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputState4"
                    name='state'
                    onChange={handleChange}
                    value={schoolDetails.state}
                />
            </div>
            <div className="col-12">
                    id="input" 
                <label htmlFor="inputGraduation_rate" className="form-label">Graduation_rate</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputGraduation_rate" 
                    placeholder="School description..."
                    name='graduation_rate'
                    onChange={handleChange}
                    value={schoolDetails.graduation_rate}
                />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputTuition" className="form-label">Tuition</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputTuition"
                    name='tuition'
                    onChange={handleChange}
                    value={schoolDetails.tuition}
                />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputStudent_size" className="form-label">Student_size</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputStudent_size"
                    name='student_size'
                    onChange={handleChange}
                    value={schoolDetails.student_size} 
                />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputAttenddence_year" className="form-label">Attenddence_year</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputAttenddence_year"
                    name='attenddence_year'
                    onChange={handleChange}
                    value={schoolDetails.attenddence_year}
                />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputMedian_family_income" className="form-label">median_family_income</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputMedian_family_income"
                    name='median_family_income'
                    onChange={handleChange}
                    value={schoolDetails.median_family_income} 
                />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputSchool_url" className="form-label">School_url</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="school_url"
                    name='school_url'
                    onChange={handleChange}
                    value={schoolDetails.School_url} 
                />
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Update School</button>
            </div>
        </form>
    )
}

export default UpdateSchoolForm;