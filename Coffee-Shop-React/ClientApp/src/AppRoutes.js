import { Home } from "./components/Home";
import ShowBeans from "./components/ShowBeans";
import { BeanForm } from "./components/BeanForm";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
     path: '/show-beans',
     element: <ShowBeans />
  },
  {
      path: '/createbean',
      element: <BeanForm />
  }

];

export default AppRoutes;
