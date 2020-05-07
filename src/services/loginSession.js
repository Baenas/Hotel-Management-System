export const isLogin = () => {
    if (localStorage.getItem("LogKey")) {
        return true;
    }

    return false;
}