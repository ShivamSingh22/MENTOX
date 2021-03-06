export const signup = (user) => {
  return fetch(`/user/register`, {
    method: "POST",
    /*headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },*/
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//Signing in existing user
export const signin = (user) => {
  return fetch(`/user/login`, {
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//Set jwt in the localstorage
export const Authenticat = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

//Check if user is authenticated or not
export const IsAuthenticated = () => {
  if (typeof window === undefined) {
    return false;
  } else {
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  }
};

export const signout = () => {
  //Getting the user Id by checking if he is authenticated
  var userId = IsAuthenticated() && IsAuthenticated().user._id;
  if (typeof window !== undefined) {
    //Removing jwt from localstorage
    localStorage.removeItem("jwt");
    return fetch(`/user/logout/${userId}`, {
      method: `GET`,
    })
      .then(() => console.log("Logged out successfully"))
      .catch((err) => console.log(err));
  }
};
