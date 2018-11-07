import React, { Component } from 'react'
import Index from "./components/index"
import {connect}  from "react-redux";

 class App extends Component {
    render() {
        return (
            <div>
                app
                <Index></Index>
            </div>
        )
    }
}
export default App;
