import React, { Component } from "react";

export default class SettingsMoreInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createInput(i, el) {
        this.obj = $(`<div key=${i}>
                      <input type="text" value=${el || ''}  />
                      <input type='button' value='remove' />
                    </div>`);
        return this.obj;
    }

    createUI() {
        return this.state.values.map((el, i) =>
            this.createInput(i, el)
        )
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    addClick() {
        this.setState(prevState => ({ values: [...prevState.values, ''] }))
    }

    removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
    }

    render() {
        this.obj = $(`<div>
                          ${this.createUI()}        
                          <input type='button' value='add more' onClick=${this.addClick(this)} />
                          <input type="submit" value="Submit" />
                        </div>`);
        return this.obj;
    }
}

//   ReactDOM.render(<App />, document.getElementById('container'));