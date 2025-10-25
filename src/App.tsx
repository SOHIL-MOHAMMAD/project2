import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from "./Component/Navbar"
import Hero from "./Component/Hero";
import Resume from "./Component/Resume";
import Contact from "./Component/Contact";
import Project from "./Component/Project";
import Footer from "./Component/Footer";
const route =   createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Navbar/>
        <Hero/>
        <Footer/>
      </div>
    },
    {
      path:"/resume",
      element: <div>
        <Navbar/>
        <Resume/>
        <Footer/>
      </div>
    },
    {
      path:"/contact",
      element: <div>
        <Navbar/>
        <Contact/>
        <Footer/>
      </div>
    },
    {
      path:"/project",
      element:<div>
        <Navbar/>
        <Project/>
        <Footer/>
      </div>
    }
  ]
)

const App = () => {
  return (
    <div >
      <div className="bg-[#f3f3f3] ">
        
        <RouterProvider router={route}/>
      </div>
    </div>
  )
}

export default App
