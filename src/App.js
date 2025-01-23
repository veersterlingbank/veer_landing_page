// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      {/* <Helmet>
        <title>Veer - World-Class Driver Training Platform</title>
        <meta
          name="description"
          content="Revolutionizing driver training through digital learning solutions, cutting-edge simulators, real-time driver behaviour tracking, and automated driver certifications to create safer roads for all."
        ></meta>
        <link rel="canonical" href="https://veer.ng/" />
      </Helmet> */}
      <div className="">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  );
}

export default App;
