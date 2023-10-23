import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log("ErrorBoundry componnet caught error", error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong.
          <Link to="/">Click here to go back to home page</Link>
        </h1>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundry;
