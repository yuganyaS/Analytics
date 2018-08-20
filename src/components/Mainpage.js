import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
// import BarChart from './BarChart';
// import PieChart from './PieChart';


class Mainpage extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col md-6>
                        {/* <BarChart /> */}
                    </Col>
                    <Col md-6>
                        {/* <PieChart /> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Mainpage;