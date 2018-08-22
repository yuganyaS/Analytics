import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import $ from "jquery";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import "datatables.net-fixedcolumns-bs4/js/fixedColumns.bootstrap4.min.js";
import "datatables.net-fixedcolumns-bs4/css/fixedColumns.bootstrap4.min.css";
import Errorboundary from './Errorboundary';
import Profile from './Profile';

class Mainpage extends Component {
  constructor(props){
   super(props);
    this.state={
      clicks : 0,   
    };
  }
  componentDidMount() {
    $("#example").DataTable({
      scrollY: "300px",
      scrollX: true,
      scrollCollapse: true,
      bDestroy: true,
      paging: false,
      fixedColumns: {
        leftColumns: 2
      },
      responsive: "true"
    });
    // this.refs.mysection.addEventListener('click',this.handleClick);
  }
  componentWillUnmount() {
    // this.refs.mysection.removeEventListener('click',this.handleClick);
  }
  handleClick = () =>{
    this.setState({clicks:this.state.clicks+1})
  }
 

  render() {
      return(
        <Container fluid>
          <Row>
            <Col md="8" xs="12">
              <BarChart />
            </Col>
            <Col md="4" xs="12">
              <PieChart />
            </Col>
          </Row>
          <Row>
            <Col md="4" className="mt-4" >
              <h4>Handling Refs</h4>
              <div ref="mysection">{this.state.clicks} Clicks</div>
              <h4>Error Handling</h4>
              <Errorboundary>
                <Profile />
              </Errorboundary>
            </Col>
            <Col md="4" className="m-auto">
              <ul
                className="nav nav-tabs m-auto"
                role="tablist"
                id="report-section"
              >
                <li className="nav-item">
                <a className="nav-link" id="overview-tab" data-toggle="tab" role="tab" href="#home">
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="report-tab" data-toggle="tab" role="tab" href="#report">
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" id="details-tab" data-toggle="tab" role="tab" href="#detail">
                    Details
                  </a>
                </li>
              </ul>
              <table
                id="example"
                className="table table-striped table-bordered order-column"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Extn.</th>
                    <th>E-mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                    <td>3124</td>
                    <td>tiger@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                    <td>3124</td>
                    <td>winter@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col md="4" />
          </Row>
        </Container>
      );
    
  }
}

export default Mainpage;
