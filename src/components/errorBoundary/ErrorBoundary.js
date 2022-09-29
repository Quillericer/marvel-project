import { Component} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error,errorInfo) {
        console.log(error,errorInfo)
        this.setState({error: true})
    }

    render(){
        if (this.state.error === true) {
            return <ErrorMessage/>
        }
        return this.props.children; // будут возвращаться компоненты, которые находятся внутри компонента ErrorBoundary (в нашем случае это CharInfo)
    }
}

export default ErrorBoundary;