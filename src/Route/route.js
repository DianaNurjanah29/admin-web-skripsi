import React from "react";
import { Routes, Route } from "react-router-dom"
import { SettingHomePage,SettingLoginPage,SettingRegisterPage,SettingStudentView,SettingStudentAdd,SettingEditPage} from "../Setting";
export default function ClassRouter() {
  return (
    <Routes>
    <Route path="/" element={ <SettingHomePage/> } />
    <Route path="/login" element={ <SettingLoginPage/> } />
    <Route path="/register" element={ <SettingRegisterPage/> } />
    <Route path="/add" element={ <SettingStudentAdd/> } />
    <Route path="/view" element={ <SettingStudentView/> } />
    <Route path="/edit" element={ <SettingEditPage/> } />
  </Routes>
  );
}
