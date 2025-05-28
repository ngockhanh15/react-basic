import React from "react";

class ChildComponent extends React.Component {

    /* 
    JSX => return 1 block
    fragment
    */
    // key:value
    state = {
        firstName: '',
        lastName: ''
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
        console.log('>>> check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        // key: value
        let{name, age} = this.props;

        return (
            <>
                <div>Child Component name: {name} - {age}</div>
            </>
        )
    }
}

export default ChildComponent;