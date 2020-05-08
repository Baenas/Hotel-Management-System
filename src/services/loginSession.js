import cookie from 'react-cookies'

export const isLogin = () => {
    if (cookie.load('currentUser')) {
        return true;
    }

    return false;
}
