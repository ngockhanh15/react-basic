import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    /* 
    JSX => return 1 block
    fragment
    */
    // key:value
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'abc Job1', title: 'Developers',salary: '500'},
            {id: 'abc Job2', title: 'Tester',salary: '400'},
            {id: 'abc Job3', title: 'Project managers', salary: '1000'}
        ]
    }


    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input: ', this.state)
    }
    // re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />
                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={'25'}
                    address={'Hà Nội'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;