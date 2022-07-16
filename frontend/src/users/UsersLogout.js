import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userState } from "../features/users/userSlice.js";
import { useLogoutMutation } from "../app/api/authApiSlice.js";
import { resetState } from "../features/users/userSlice.js";
import { setToken } from "../features/token/tokenSlice.js";

export default function UsersLogout() {
    const dispatch = useDispatch();
    const state = useSelector(userState);
    const navigate = useNavigate();

    const [logout] = useLogoutMutation()

    const handleSignOut = async (e) => {
        e.preventDefault();

        try {
            const result = await logout()
            console.log('logout result ": ', result)
            dispatch(resetState())
            dispatch(setToken(null))
        } catch (err) {
            console.log('logout error : ', err)
        }
        navigate('/')
    };

    return (
        <div className="container my-3">
            <div className="row justify-content-md-center">
                <div className="col col-lg-5 col-md-5 col-sm-5">
                    <div className="card">
                        <div className="card-header text-center">
                            Logout Page
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <img
                                    src={require("../assets/images/avatar.jpeg")}
                                    className="card-img-top mx-auto"
                                    alt="avatar"
                                    style={{ width: "25%", height: "25%" }}
                                />
                            </div>
                            <div className="mb-2">
                                <p
                                    disabled
                                    className="text-center border-0 form-control"
                                    aria-describedby="response"
                                >
                                    {state.isAuthenticated && state.user?.lastLoginAt
                                        ? `Last login at ${new Date(parseInt(state.user.lastLoginAt)).toLocaleString()}`
                                        : "user not logged in"}
                                </p>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col col-auto">
                                    <button
                                        disabled={!state.isAuthenticated}
                                        className="btn btn-light"
                                        onClick={handleSignOut}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
