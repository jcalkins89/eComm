import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/theme";
import { GlobalStyles } from "./themes/global";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndRegistrationPage from "./pages/sign-in-registration-page/signIn-registration-page.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegistrationPage} />
        </Switch>
      </>
    </ThemeProvider>
  );
}

export default App;
