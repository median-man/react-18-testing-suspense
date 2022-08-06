import React, { Suspense } from "react";
import "./styles.css";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

export default function App() {
  return (
    <div className="App">
      <h1>Hello React Testing Library</h1>
      <Suspense fallback={"Loading..."}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
