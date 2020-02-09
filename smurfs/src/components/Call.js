import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadSmurfs } from '../actions';
import { Alert, Button, Card, Row, Col } from 'reactstrap';


const card = {
  border: '5px groove red',
	background: 'rgba(53, 124, 182, 0.8)',
	borderRadius: '2%',
	height: '250px',
  margin: '2%',
  color: 'white',
  fontWeight: '700',
 }

const Call = () => {
  const data = useSelector(state => state.fetching)
  const stuff = useSelector(state => state.smurfs);
  const error =useSelector(state => state.error)
  const dispatch = useDispatch()
  return (
    <>
    <section>
        <Button  color='primary' onClick={() => dispatch(loadSmurfs())}>Load Smurfs</Button>
      
    </section>
      
      <section>
      {error && <Alert color='danger'>{error}</Alert>}
        
            <Row>
              {stuff.map(param =>
                <Col lg="4">
                  <Card style={card} id={param.id}>
                    <div className='card-text'>
                  <h3>Name:{param.name}</h3>
                  <div>
                    <ul>
                      <li>Age:{param.age}</li>
                      <li>Height:{param.height} </li>
                    </ul>
                      </div>
                    </div>
                  </Card>
                </Col>
              )}
            </Row>
          
     </section>     

          
    </>    
  )
}

export default Call