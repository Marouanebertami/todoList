import React, { Component } from 'react'

class Form extends Component {

    inputTextHandler = (e) => {
        console.log(e);
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.inputTextHandler} type="text"/>
                    <button>Ajouter</button>
                </form>
            </div>
        )
    }
}

export default Form
