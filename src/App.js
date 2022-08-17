import "./App.scss";
import { useState, useEffect, createContext } from "react";
import { Routes, Route, Navigate, useNavigate, NavLink } from "react-router-dom";
import Home from "./home";
import HooksEntry from "./Hooks/hooksEntry";
import HooksEntryFetch from "./Hooks/hooksEntryFetch";
import Fetch from "./useEffectDemo/fetch";
// import Styleinfo from "./reference/styleinfo";
// import Allreference from './reference/allreference';
import { AgeComponent } from "./reference/ageComponent";
import Entry from "./groceryList/main";
// import Form from './Form/form';
// import RefForm from "./Form/refForm";
// import CommonForwardRef from "./forwardRefComponents/commonForwardRef";
import EffectDemo from "./useEffectDemo/effectDemo";
import Clock from "./useEffectDemo/clock";
import Welcome from "./reference/welcome";

import Data from "./reference/allreference";
import StyleInfo from "./reference/styleinfo";
import { ContextFile } from "./context";
import Balance from "./BankRedux/components/balance";
import Deposit from "./BankRedux/components/deposit";
import Withdraw from "./BankRedux/components/withdraw";
import ReducerDemo from "./useReducerDemo/reducerDemo";

export const Con = createContext(null);

export function App() {
  const [login, setlogin] = useState(false);
  const nav = useNavigate();
  const log = () => {
    if (login) {
      let res = window.confirm("Do you really want to logout!!!");
      if (res) {
        setlogin(false);
      }
    } else {
      setlogin(true);
    }
  };

  useEffect(() => {
    if (login) {
      nav("/data");
    }
  }, [login, nav]);

  return (
    <>
    <nav className="navbar">
      <NavLink className="nav nav-deposit" to='/deposit'>Deposit</NavLink>
      <NavLink className="nav nav-balance" to='/balance'>Balance</NavLink>
      <NavLink className="nav nav-withdraw" to='/withdraw'>Withdraw</NavLink>
    </nav>
    <Con.Provider value={login.toString()}>
      <ContextFile.Provider value="message through context file from app.js">
        <div className="App">
          <header className="App-header">
          {/* <Routes>
          </Routes>*/}
            <Routes> 
              <Route path='balance' exact element={<Balance />} />
              <Route path='deposit' exact element={<Deposit />} />
              <Route path='withdraw' exact element={<Withdraw />} />
              <Route path="reducer" element={<ReducerDemo />} />
              <Route path="agecalculator" element={<AgeComponent />} />

              <Route path="hooks" element={<HooksEntry />}>
                <Route path="fetch" element={<HooksEntryFetch />} />
                <Route path="grocery" element={<Entry />} />
              </Route>
              <>
                <Route path="clock" element={<Clock />} />
              </>
              <Route path="useeffectdemo" element={<EffectDemo />} />
              <Route path="fetch" element={<Fetch />} />
              <Route path="user/:username" element={<Welcome />} />
              <Route path="user/:firstname/:lastname" element={<Welcome />} />
              <Route
                path="data"
                exact
                element={login ? <Data /> : <Navigate to="/" />}
              />
              <Route path="/style" element={<StyleInfo />} />
              <Route path="/" exact element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <button onClick={log}>{login ? "logout" : "login"}</button>
          </header>
        </div>
      </ContextFile.Provider>
    </Con.Provider>
    </>
  );
}

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <Allreference /> */}
//         {/* <AgeComponent /> */}
//         {/* <Styleinfo /> */}
//         {/* <Entry /> */}
//         {/* <Form /> */}
//         {/* <RefForm /> */}
//         {/* <CommonForwardRef /> */}
//         {/* <EffectDemo /> */}
//         {/* <Clock /> */}
//         {/* <Fetch /> */}
//         {/* <HooksEntry /> */}
//         {/* <HooksEntryFetch /> */}
//       </header>
//     </div>
//   );
// }
