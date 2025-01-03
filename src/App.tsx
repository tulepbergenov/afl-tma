import { ErrorBoundary, ErudaDevTools } from "@/components";
import { Suspense } from "react";

export const App = () => {
  return (
    <>
      <ErrorBoundary>
        <main className="flex-auto">
          <section>
            <div className="container">
              <div>
                <header>
                  <h1 className="text-xl font-bold">Hello World</h1>
                </header>
                <div className="mt-4 flex flex-col gap-y-4">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum facere quisquam unde animi earum rerum repellat dicta
                    est, cum debitis recusandae, quidem perspiciatis corrupti
                    inventore? Voluptate ipsum incidunt id repellat.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
      {import.meta.env.DEV && (
        <Suspense fallback={null}>
          <ErudaDevTools />
        </Suspense>
      )}
    </>
  );
};
