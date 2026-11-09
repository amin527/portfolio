import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <ProjectsPage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "cv",
        // Loaded on demand so pdf.js isn't in the main bundle.
        lazy: async () => ({ Component: (await import("./pages/CvPage")).CvPage }),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
