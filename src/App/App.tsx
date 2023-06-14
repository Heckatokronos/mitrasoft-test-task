import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, Spinner } from "react-bootstrap";
import { Layout } from "../widgets/Navigation/Layout";

const AboutMe = React.lazy(() => import("../pages/about-me/AboutMe"));
const Main = React.lazy(() => import("../pages/main/Main"));
const Post = React.lazy(() => import("../pages/post/Post"));
const Profile = React.lazy(() => import("../pages/user-profile/Profile"));

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <Spinner
                as="span"
                animation="border"
                role="status"
                aria-hidden="true"
              />
            </div>
          }
        >
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
