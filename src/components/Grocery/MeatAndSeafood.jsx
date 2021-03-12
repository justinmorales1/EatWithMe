import { reduxForm } from 'redux-form';
import React from 'react';
import Accounts from "./Accounts";

class MeatAndSeafood extends React.Component{
    render() {
        return (
            <div>
                <Accounts pageName='Employee Forms' name='Employee Name'/>
            </div>
        )
    }

}

export default reduxForm({
    form: 'employeeForm' // a unique identifier for this form
})(MeatAndSeafood)