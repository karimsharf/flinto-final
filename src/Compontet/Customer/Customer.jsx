import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class Customer extends Component {
  render() {
    return (
      <div className="Customer">
    
  <Grid>
<Row>
<Col md="4" xs="12" sm="4" >
<div className="customerLeft">
<img src={require('../../img/Shipping.png')}/>
 <h2>Free Shipping</h2>
 </div>
</Col>

<Col md="4" xs="12" sm="4" >

<div className="customerCenter">
<img src={require('../../img/Customer.png')}/>
 <h2>Support Customer</h2>
 </div>




</Col>



<Col md="4" xs="12" sm="4" >

<div className="customerRight">
<img src={require('../../img/Payments.png')}/>
 <h2>Secure Payments</h2>
 </div>




</Col>


</Row>
  </Grid>
 

      </div>
    );
  }
}

export default Customer;