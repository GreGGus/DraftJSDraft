import { Modal, Header ,  Icon ,Button} from 'semantic-ui-react'
import React from 'react'

class ModalEditor extends React.Component {
    render() {
        return (
            <Modal open={this.props.open} basic size='small'>
                <Header icon='archive' content='Affichage objet'/>
                <Modal.Content>
                    <p>Affichage objet</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={this.props.onClick} inverted>
                        <Icon name='remove'/> No
                    </Button>
                    <Button color='green' onClick={this.props.onClick} inverted>
                        <Icon name='checkmark'/> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default ModalEditor