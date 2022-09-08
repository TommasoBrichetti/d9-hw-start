import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FcLike } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import FavouritesIcon from './FavouritesIcon'

const Job = ({ data }) => {

  const dispach = useDispatch()
  const jobsContent = useSelector((state) => state.jobs.content)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>

      {jobsContent.some((e) => e._id === data._id) ? (
        <Col xs={2}>
        <Link to='/favourites' className='text-dark'>
          <FavouritesIcon />
        </Link></Col>) : (<Col xs={2}>
          <FcLike onClick={() => {
            dispach({
              type: 'ADD_TO_FAV',
              payload: data
            })
          }} />
        </Col>
      )}

    </Row>)
}

export default Job
