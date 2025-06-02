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

    // re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;