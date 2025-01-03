import type { ErrorInfo, ReactNode } from "react";
import { Component } from "react";

export class ErrorBoundary extends Component<
  { children: ReactNode },
  {
    hasError: boolean;
    error: string | null;
  }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): {
    hasError: boolean;
    error: string | null;
  } {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <section>
          <p>Произошла ошибка</p>
          <pre>{this.state.error}</pre>
        </section>
      );
    }

    return this.props.children;
  }
}
