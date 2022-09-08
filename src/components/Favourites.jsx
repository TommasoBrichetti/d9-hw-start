import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {  FaHome  } from 'react-icons/fa'

const Favourites = () => {

    const jobsContent = useSelector((state) => state.jobs.content)

    const dispach = useDispatch()

    return (
        <Row>
            <Col sm={12}>
                <Link to='/' className='text-dark'>
                    <FaHome className='m-4'/>
                </Link>
            </Col>
            {jobsContent.length === 0 && (
                <Col sm={12} className='text-center'>
                    <h2>Nessun Preferito</h2>
                </Col>)}
            <Col sm={12}>
                <ul style={{ listStyle: 'none' }}>
                    {jobsContent.map((job, i) => (
                        <li key={i} className="my-4 p-3" style={{ border: '1px solid #000', borderRadius: 4 }}>
                            <h2>{job.company_name}</h2>
                            <h3>{job.title} - {job.job_type}</h3>
                            <Button variant="danger" onClick={() => {
                                dispach({
                                    type: 'REMOVE_TO_FAV',
                                    payload: i

                                })
                            }}>
                                <FaTrash />
                            </Button>
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    )
}

export default Favourites