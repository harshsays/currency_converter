import "./App.css"
import { createBrowserRouter,RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "../src/redux/reduxStore/store"
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
  
  return (
    <>
    <div id="app">
      <Provider store={store}>
      <RouterProvider router={routes}>

      </RouterProvider>
      </Provider>
    </div>
    </>
  )
}

export default App;