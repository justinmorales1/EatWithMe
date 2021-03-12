import React from 'react';
import { reduxForm } from 'redux-form'
import Accounts from "./Accounts";


class ThirdPartyForms extends React.Component {
    //Example of setting react state
    state = {
        value: 0
    };

    //Pass this function as a prop to child component
    updateReactState = (value) => {
        this.setState({value})
    }

    render() {
        console.log(this.state.value)
        return (
            <Accounts pageName='Third Party Forms' name='Third Party Name' getChildValue={this.updateReactState}/>
        )
    }
}


export default reduxForm({
    form: 'ThirdPartyForms'
})(ThirdPartyForms)