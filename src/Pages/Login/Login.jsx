import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { login, signUp } from "../../firebase";
import Loading from "../../Components/Loading/Loading";

function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
const navigate=useNavigate()
  const user_auth = async () => {
    setIsLoading(true);

    try {
      if (signState === "Sign In") {
        await login(email, password);
        navigate('/')
      } else {
        await signUp(email, password, name);
        navigate("/login")
      }
    } catch (error) {
      console.log("Firebase Error:", error);
     
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className="login d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white">
          {/* Netflix Logo */}
          <div className="netflix_logo mb-4">
            <img src="/assets/logo.png" alt="Netflix Logo" className="w-100" />
          </div>

          {/* Form Container */}
          <div
            className="login-container p-4 rounded shadow-lg"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <h1 className="mb-4 text-center">{signState}</h1>

           

            <Form
              name="authForm"
              layout="vertical"
              className="w-100"
              autoComplete="off"
              onFinish={user_auth}
            >
              {signState === "Sign Up" && (
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Please enter your name!" }]}
                >
                  <Input
                    placeholder="Your Name"
                    size="large"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
              )}

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="Your Email"
                  size="large"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please enter your password!" }]}
              >
                <Input.Password
                  placeholder="Your Password"
                  size="large"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: "white" }}>Remember Me</Checkbox>
                </Form.Item>

                <Link
                  to="/help"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Need Help?
                </Link>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  className="fw-bold"
                  style={{
                    backgroundColor: "#e50914",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  {signState}
                </Button>
              </Form.Item>
            </Form>

            {/* Toggle Sign In / Sign Up */}
            <div className="text-center mt-3">
              {signState === "Sign In" ? (
                <p className="text-secondary">
                  New to Netflix?{" "}
                  <span
                    className="text-white fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSignState("Sign Up")}
                  >
                    Sign Up Now
                  </span>
                </p>
              ) : (
                <p className="text-secondary">
                  Already have an account?{" "}
                  <span
                    className="text-white fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSignState("Sign In")}
                  >
                    Sign In Now
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
