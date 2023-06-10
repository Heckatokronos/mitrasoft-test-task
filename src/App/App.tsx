import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, Spinner } from "react-bootstrap";
import { Navigation } from "../widgets";

const Main = React.lazy(() => import("../pages/main/Main"));
const Post = React.lazy(() => import("../pages/post/Post"));
const Profile = React.lazy(() => import("../pages/profile/Profile"));

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Navigation />
      <Suspense
        fallback={
          <div className="centered">
            <Spinner animation="border" />
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
