import React from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import './style';
import Menues from './Menues.jsx';

const Home = () => (

    <div className="content">
        <Grid fluid>
            <Row>
                <Col md={2}>
                   <div className="us">
                     <Menues/>
                   </div>
                </Col>
                <Col md={10} >
                    <div className="us">hh</div>
                </Col>
            </Row>
        </Grid>

    </div>
);

export default Home;

