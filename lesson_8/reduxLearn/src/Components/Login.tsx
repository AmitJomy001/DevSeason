import { useState } from "react";
import { useDispatch} from "react-redux";
const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    console.log(`Username: ${userName}, Password: ${password}`);
    dispatch({type: "yourSliceIsType/login",
      payload: userName});
      console.log("dispatched");
  };
  const handleLogoutClick = () => {
    dispatch({type: "yourSliceIsType/logout"}); 
  }
  return (
    <>
      <div>Login</div>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </>
  );
};

export default Login;

