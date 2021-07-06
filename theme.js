"use strict";

const e = React.createElement;

class DarkMode extends React.Component {
  constructor(props) {
    super(props);
    this.themeVal = "true" === sessionStorage.getItem("dark-theme");
    this.state = { darkMode: this.themeVal };
  }

  componentDidMount() {
    if (this.state.darkMode) document.body.classList.toggle("dark");
  }

  componentDidUpdate() {
    console.log("here");
    document.body.classList.toggle("dark");
  }

  changeTheme() {
    const themeBtn = document.querySelector("#theme-btn-img");
    if (this.state.darkMode) themeBtn.src = "../images/theme-btn/light.svg";
    else themeBtn.src = "../images/theme-btn/dark.svg";
  }

  src() {
    return this.state.darkMode
      ? "../images/theme-btn/light.svg"
      : "../images/theme-btn/dark.svg";
  }

  render() {
    sessionStorage.setItem("dark-theme", this.state.darkMode);
    return e("img", {
      id: "theme-btn-img",
      onClick: () => {
        this.setState((state) => {
          return { darkMode: !state.darkMode };
        });
        this.changeTheme();
      },
      src: this.src(),
    });
  }
}

// Find all DOM containers, and render Like buttons into them.
ReactDOM.render(e(DarkMode), document.querySelector("#theme-btn"));
