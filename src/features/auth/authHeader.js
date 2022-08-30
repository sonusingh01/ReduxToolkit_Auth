export default function authHeader() {
  const user= {token:localStorage.getItem("token")}
    return user
  }