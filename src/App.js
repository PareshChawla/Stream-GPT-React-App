import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Error from "./components/Error";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ProtectedRoute from "./components/ProtectedRoute";
import GPT from "./components/GPT";
import Signup from "./components/SignUp";
import WatchTrailer from "./components/WatchTrailer";

const router = createBrowserRouter([
  // Import your routes here instead of defining them in Body
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />, // Assuming Error component is accessible here
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />, // Assuming Error component is accessible here
  },
  {
    path: "/browse",
    element: (
      <ProtectedRoute>
        <Browse />
      </ProtectedRoute>
    ), // Assuming Browse component is accessible here
    errorElement: <Error />,
  },
  {
    path: "/search",
    element: (
      <ProtectedRoute>
        <GPT />
      </ProtectedRoute>
    ), // Assuming Browse component is accessible here
    errorElement: <Error />,
  },
  {
    path: "/watch/:watchId",
    element: <WatchTrailer />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
