import React from 'react' ;
import Button from './Button.js';
import ContactInput from './ContactInput.js';

const buttonText = "edit contact";

const editButton = {
  display: 'inline-block'

}


class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false};
  };

  editContact = () => this.setState(prevState => ({
    editing: !prevState.editing
  }));

  render() {
    return(
			<div style={editButton}>
				<Button callback={this.editContact} text={buttonText}/> 
				{this.state.editing ?
					<div>                                                          
						<ContactInput                                                
							name={this.props.contactInfo['name']}                      
							email={this.props.contactInfo['email']}                    
							interests={this.props.contactInfo['interests']}            
							proximity={this.props.contactInfo['proximity']}            
							uuid={this.props.contactInfo['uuid']}                      
							update={true} />                                           
					</div> : null                                                  
				} 
			</div>
    );
  }
}

export default EditButton;