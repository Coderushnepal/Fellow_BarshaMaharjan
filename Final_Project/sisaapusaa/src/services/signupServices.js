import http from '../utils/http';

export async function signup(email, password) {
    const { data } = await http.post('user/signup', {
      email,
      password
    });
    console.log(data)
    console.log(data.data)
    return data.data
  } 