import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm'; 
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

    componentDidMount() {
        console.log(this.props); 
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        // empty string is falsy in JS
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
       
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(EmployeeCreate); 