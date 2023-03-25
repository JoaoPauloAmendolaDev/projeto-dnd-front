import * as userApi from '../../services/userApi.js';
import useAsync from './useAsync.js';

export default function useSignUp() {
    const {
        loading: signUpLoading,
        error: signUpError,
        act: signUp,
    } = useAsync(userApi.signUp, false);

    return {
        signUpLoading,
        signUpError,
        signUp,
    };
}
