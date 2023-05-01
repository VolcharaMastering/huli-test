import {useSelector} from 'react-redux';

export function useAuth() {
    const {email, userName, token} = useSelector(state => state.user);
    // console.log('inAuth', email, userName, token)
    return {
        isAuth: !!email,
        email,
        userName,
        token,
    };
}