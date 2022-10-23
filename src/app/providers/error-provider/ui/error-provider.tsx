import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorMessage } from 'widgets/error-message';

interface ErrorProviderProps {
    children: ReactNode;
}

interface ErrorProviderState {
    hasError: boolean;
}

export class ErrorProvider extends React.Component<ErrorProviderProps, ErrorProviderState> {
    constructor(props: ErrorProviderProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <ErrorMessage />
                </Suspense>
            );
        }

        return children;
    }
}
