import React from "react";

class MyComponent extends React.Component {

    /* 
    JSX => return 1 block
    fragment
    */
    // key:value
    state = {
        name: 'Khanh',
        class: 'CNTT'

    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        console.log('hit the button')
        alert('click me')
    }

    render() {

        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state['name']}
                </div>
                <div className="second">
                    My class: {this.state.class}
                </div>
                <div className="third">
                    <button onClick={()=> this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;