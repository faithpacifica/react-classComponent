import { Component } from 'react'

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<{},
    ErrorBoundaryState> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error): { hasError: boolean } {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {

        console.error(error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <button
                        onClick={() => {
                            throw new Error('Forced error for testing');
                        }}
                    >
                        Throw Error
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}