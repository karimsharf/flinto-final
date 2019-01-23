import React, { Component } from 'react';
import {Button,Modal,Tabs,Tab,Label,Grid} from 'react-bootstrap';
import {
Accordion,
AccordionItem,
AccordionItemTitle,
AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-accessible-accordion/dist/minimal-example.css';
class Booking extends Component {
constructor(props, context) {
super(props, context);
this.handleShow = this.handleShow.bind(this);
this.handleClose = this.handleClose.bind(this);
this.state = {
show: false
};
}
handleClose() {
this.setState({ show: false });
}
handleShow() {
this.setState({ show: true });
}
render () {
return (
<div className="booking">
    <Grid>
        <div className="booking-logo">
            <img src="http://dor-e.com/uploads/1/0/7/6/107690625/logo-small.png"></img>
        </div>
        <Accordion>
            <AccordionItem>
                <AccordionItemTitle>
                    <div class="accordion__arrow" role="presentation"></div>
                    <h3>Department 1</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <div className="test">
                        <span className="left">service 1</span>
                        <span className="right"> 
                        <Button bsStyle="primary" onClick={this.handleShow}>book</Button>
                        </span> 
                    </div>
                    <div className="test">
                        <span className="left">service 2</span>
                        <span className="right"> 
                        <Button bsStyle="primary" onClick={this.handleShow}>book</Button>
                        </span> 
                    </div>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <div class="accordion__arrow" role="presentation"></div>
                    <h3>Department 2</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Body content</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <div class="accordion__arrow" role="presentation"></div>
                    <h3>Department 3</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Body content</p>
                </AccordionItemBody>
            </AccordionItem>
        </Accordion>
        <div>
            <Modal className="booking-model" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Department 1 - service 1</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Book Now">
                            <h4>  Customer waiting  </h4>
                            <p>  24</p>
                            <h4> Estimate Wait  </h4>
                            <p> 0h 42m</p>
                            <h4>  Customer Name  </h4>
                            <p> Shehab Elnoury</p>
                            <h4>  Customer Email  </h4>
                            <p>shehab@dor-e.com</p>
                            <Button bsStyle="primary">Book</Button>
                        </Tab>
                        <Tab eventKey={2} title="Take Appointment">
                            <h4>  Customer waiting  </h4>
                            <p>  17</p>
                            <h4> Estimate Wait  </h4>
                            <p> 0h 42m</p>
                            <h4>  Customer Name  </h4>
                            <p> Shehab Elnoury</p>
                            <h4>  Customer Email  </h4>
                            <p>shehab@dor-e.com</p>
                            <Button bsStyle="primary">Book</Button>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </div>
    </Grid>
</div>
);
}
}
export default Booking;