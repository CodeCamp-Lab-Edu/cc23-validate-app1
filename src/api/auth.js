import api from "./axios";

export async function login(payload) {
  try {
    const res = await api.post("/auth/login", {
      username: payload.email,
      password: payload.password,
    });

    console.log(res.data)

    return res.data
  } catch {
    // console.log("400")
  }
}
