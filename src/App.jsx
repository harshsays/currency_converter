import "./App.css"
import { createBrowserRouter,RouterProvider } from "react-router";
import CurrencyConvert from "./pages/currencyConvert/currencyConvert";
import NotFound from "./pages/NotFound/NotFound";
import OutletPage from "./pages/outletPage/outletPage";
function App(){

  const routes= createBrowserRouter([
    { path:"/", element:<OutletPage></OutletPage> ,children:[
      {path:"converter",element:<CurrencyConvert></CurrencyConvert>}
    ]},
    {path:"*",element:<NotFound></NotFound>}
  ])
  90
  return (
    <>
    <div id="app">
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
    </>
  )
}

export default App;