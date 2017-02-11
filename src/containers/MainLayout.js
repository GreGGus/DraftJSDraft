import React from 'react'

class CoreLayout extends React.Component {

    render() {
        return (
            <div style={{height:'100%'}}>
                        {/*Differentes routes*/}
                        {this.props.children}
            </div>
        );
    }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
