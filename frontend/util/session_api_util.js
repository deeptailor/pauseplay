export const signup = (user, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/user',
    data: user,
    success: success,
    error: error
  })
};

export const login = (user, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/session',
    data: user,
    success: success,
    error: error
  })
};

export const logout = (success) => {
  $.ajax({
    method: 'delete',
    url: 'api/session',
    success: success,
    error: () => {
      console.log("Logout error in SessionApi#util")
    }
  })
};
