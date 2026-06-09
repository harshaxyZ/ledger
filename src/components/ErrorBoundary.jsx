import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Ledger Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A0E14] text-white p-6 text-center">
          <div className="p-4 bg-red-500/10 text-red-500 rounded-2xl mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Something broke.</h2>
          <p className="text-zinc-400 mb-8 max-w-sm">
            Don't worry, your data is safe locally. Please reload the app to continue.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#22C55E] text-black font-bold rounded-xl active:scale-95 transition-transform"
          >
            Reload App
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
