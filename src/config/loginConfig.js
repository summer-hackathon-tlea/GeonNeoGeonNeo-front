export const loginConfig  = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
}