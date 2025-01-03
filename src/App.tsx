import { ErrorBoundary } from "@/components";

export const App = () => {
  return (
    <ErrorBoundary>
      <main className="flex-auto">
        <section>
          <header>
            <h1>Hello World</h1>
          </header>
        </section>
      </main>
    </ErrorBoundary>
  );
};
