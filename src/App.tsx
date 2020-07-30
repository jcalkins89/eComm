// @ts-nocheck
import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/theme";
import { GlobalStyles } from "./themes/global";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndRegistrationPage from "./pages/sign-in-registration-page/signIn-registration-page.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

type AppState = {
  currentUser: Object | null;
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log("State: ", this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <>
          <GlobalStyles />
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndRegistrationPage} />
          </Switch>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
