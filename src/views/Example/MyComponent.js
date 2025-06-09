import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    /* 
    JSX => return 1 block
    fragment
    */
    // key:value
    state = {
        arrJobs: [
            { id: 'abc Job1', title: 'Developers', salary: '500' },
            { id: 'abc Job2', title: 'Tester', salary: '400' },
            { id: 'abc Job3', title: 'Project managers', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ',job)
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        })
    }
    // re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                 addNewJob = {this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;