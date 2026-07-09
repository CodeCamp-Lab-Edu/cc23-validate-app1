import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-container">
      <p className="login-title">Login</p>
      <form className="login-form">
        <div className="form-group">
          <label>อีเมล</label>
          <input
            className="form-input"
            type="text"
            name="email"
            placeholder="example@gmail.com"
          />
        </div>
        <button type="submit" className="submit-btn">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
