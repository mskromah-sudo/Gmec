import React from 'react';

type Props = { children: React.ReactNode };

type State = { hasError: boolean; error?: Error | null; info?: React.ErrorInfo | null };

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null, info: null };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log the error for debugging
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, info);
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 16 }}>
          <h1>Something went wrong.</h1>
          <p style={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
