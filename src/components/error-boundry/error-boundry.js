import React, { Component } from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    //вызовется тогда, когда в одном из компонентов ниже по иерархии ErrorBoundry возникла ошибка в методе render или в др. методе жизненного цикла
    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}