
import './App.css';
import Demo from "./Demo";
import {useState} from "react";
import FComponent from "./FComponent";
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Admin from "./page/Admin";
import ListStudent from "./student/ListStudent";
import CreateStudent from "./student/CreateStudent";
import EditStudent from "./student/EditStudent";

function App() {
  return (
      <>
          <div>
              <Routes>
                  <Route path={'/'} element={<Home></Home>}>
                      <Route path={'/students'} element={<ListStudent></ListStudent>}></Route>
                      <Route path={'/create-student'} element={<CreateStudent></CreateStudent>}></Route>
                      <Route path={'/edit-student/:id'} element={<EditStudent></EditStudent>}></Route>
                  </Route>

                  <Route path={'/admin'} element={<Admin></Admin>}></Route>
              </Routes>
          </div>

          {/*<div>*/}
          {/*    <Outlet></Outlet>*/}
          {/*    <Routes>*/}
          {/*        /!*<Route path={"/"} element={<Home></Home>}></Route>*!/*/}
          {/*        /!*<Route path={"/admin"} element={<Admin></Admin>}></Route>*!/*/}
          {/*    </Routes>*/}
          {/*</div>*/}
      </>

  );

}

export default App;
