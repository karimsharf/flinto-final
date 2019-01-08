
import React, { Component } from 'react';
import {Nav,NavItem,Navbar,Grid,Row,Col} from 'react-bootstrap';


class NavbarTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
  render() {
    return (
      <div className="NavbarTop">
        <Navbar inverse collapseOnSelect>
        <Grid>
            <Row>
                <Col md={2} >
  <Navbar.Header >
    <Navbar.Brand>
      <a href="/">Flinto</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>

</Col>
  <Navbar.Collapse>
  <Col md={8}>
    <Nav>
      <NavItem eventKey={1} href="#">
     Demos
      </NavItem>
      <NavItem eventKey={2} href="/shop">
      Shop
      </NavItem>
      <NavItem eventKey={2} href="/singleshop">
     Product
      </NavItem>
      <NavItem eventKey={2} href="/ComingSoon">
    Elements
      </NavItem>
      <NavItem eventKey={2} href="/Erro">
      404
      </NavItem>
      <NavItem eventKey={2} href="/LogIn">
      Login
      </NavItem>
    </Nav>
    </Col>
    <Col md={2}>
    <div className="paullRightHolder">
    <Nav pullRight>
    <ul class="social">
    {/* <a className="wishlist icon ion-android-favorite-outline alotheme-tooltip">ff</a> */}
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"> <sub className="Two">2</sub></i></a>
                    </li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-bars"></i></a></li>
                        
                    </ul>
              
                 
    </Nav>
    </div>
    </Col>
  </Navbar.Collapse>
  </Row>
  </Grid>
</Navbar>

      </div>
    );
  }
}

export default NavbarTop;
