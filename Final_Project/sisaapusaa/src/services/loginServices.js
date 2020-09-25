import http from '../utils/http';

export async function login(email, password) {
    const { data } = await http.post('user/login', 
    {
      email,
      password
    });
    console.log(data)
    console.log(data.data)
    return data.data
  } 