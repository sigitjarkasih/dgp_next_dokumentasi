import React from "react";

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    loggedIn: false,
    menuCollapse: [],
    snackbar: {
      open: false,
      message: "...",
    },
    theme: {
      color_primary: "#10856C",
    },
    user: {
      user_id: "",
      user_name: "",
      email: "",
      phone: "",
      sex: "",
      birth_date: "",
      is_active: "",
      image_link: "",
      seller_id: "",
      seller_store: "",
      store_description: "",
    },
  };

  setLoggedIn = (loggedIn) => {
    this.setState((prevState) => ({ loggedIn }));
  };

  setMenuCollapse = (menuCollapse) => {
    this.setState((prevState) => ({ menuCollapse }));
  };

  setSnackbar = (snackbar) => {
    this.setState((prevState) => ({ snackbar }));
  };

  setUser = (user) => {
    this.setState((prevState) => ({ user }));
  };

  render() {
    const { children } = this.props;
    const { loggedIn } = this.state;
    const { menuCollapse } = this.state;
    const { user } = this.state;
    const { snackbar } = this.state;
    const { theme } = this.state;
    const { setLoggedIn } = this;
    const { setMenuCollapse } = this;
    const { setUser } = this;
    const { setSnackbar } = this;
    return (
      <AppContext.Provider
        value={{
          loggedIn,
          menuCollapse,
          snackbar,
          theme,
          user,
          setLoggedIn,
          setMenuCollapse,
          setUser,
          setSnackbar,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export const UserConsumer = AppContext.Consumer;

export default AppContext;
export { AppProvider };
