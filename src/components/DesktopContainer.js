import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, animateScroll } from 'react-scroll'
import HomepageHeading from './HomepageHeading'
import Background from '../images/Manhattan-Beach-Pier.jpg'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
} from 'semantic-ui-react'
import './DesktopContainer.module.css'

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }


  render() {
    const { children } = this.props
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: '100vh', padding: '1em 0em', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundAttachment: 'fixed' }}
          vertical
        >
          <Menu
            style={{backgroundColor: 'rgba(255,255,255,.9)'}}
            fixed={'top'}
            size='large'
            borderless
          >
            <Container>
              <Menu.Item><Icon onClick={this.scrollToTop} size='large' name='building outline'/></Menu.Item>
              <Link className="nav-link" activeClass="active" to="investing" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}><Menu.Item>Investing With Us</Menu.Item></Link>
              <Link className="nav-link" activeClass="active" to="properties" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}><Menu.Item>Properties</Menu.Item></Link>
              <Link className="nav-link" activeClass="active" to="criteria" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}><Menu.Item>Investment Criteria</Menu.Item></Link>
              <Link className="nav-link" activeClass="active" to="faq" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}><Menu.Item>FAQ</Menu.Item></Link>
              <Menu.Item position='right'>
                <Button as='a' style={{ marginLeft: '0.5em' }}>
                  Contact
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer