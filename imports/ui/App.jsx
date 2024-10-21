import { Meteor } from "meteor/meteor";
import React from "react";
import { LoginForm } from "./LoginForm";
import { Box } from "@mui/material";
import { TaskManager } from "./TaskManager";
import { MenuBar } from "./MenuBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Dummy } from "./Dummy";
import PrivateRoute from "./PrivateRoute";
import { Account } from "./Account";

export const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#FE68B3",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <CssBaseline />
        <Router>
          <MenuBar>Rita's To-Do Liste</MenuBar>
          <Routes>
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/about" element={<Dummy />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/account" element={<Account />} />
            <Route element={<PrivateRoute />}>
              <Route path="/tasks" element={<TaskManager />} />
            </Route>
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};
