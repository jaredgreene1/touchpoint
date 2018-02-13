import React from 'react';
import ContactInput from './ContactInput.js';

const hoverStyle = {
  background: "#FFCD42",
  width: "300px",
  padding: "20px",
  borderRadius: "25px",
  margin: "10px"
}


const unhoverStyle = {
  background: "#CFAE53",
}

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false, expanded: false};
  };

  onHover = () => this.setState({hovered: true});
  onUnhover = () => this.setState({hovered: false});
  getStyle = () => this.state.hovered ? hoverStyle : unhoverStyle;
  expand = () => this.setState(prevState => ({
    expanded: !prevState.expanded
  }));



  render() {
    return (
      <tbody>
        <tr className="contact-card" onClick = {this.expand} onMouseOut={this.onUnhover} onMouseOver={this.onHover} style={this.getStyle()}>
          <td> {this.props.contactInfo['name']} </td>
          <td> {this.props.contactInfo['email']}</td> 
          <td> {this.props.contactInfo['interests']} </td>
          <td> {this.props.contactInfo['proximity']} </td>
        </tr>
          {this.state.expanded ? 
            <tr> 
              <ContactInput
                name={this.props.contactInfo['name']}
                email={this.props.contactInfo['email']}
                interests={this.props.contactInfo['interests']}
                proximity={this.props.contactInfo['proximity']}
                uuid={this.props.contactInfo['uuid']}
                update={true} /> 
            </tr> : null
          }
      </tbody>
    );
  }
}

export default ContactCard;
