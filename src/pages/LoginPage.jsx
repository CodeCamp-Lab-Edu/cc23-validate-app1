import { useState } from "react";
import { loginSchema } from "../schemas/loginSchema";
import "./LoginPage.css";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { email, password } = form;

    const result = loginSchema.safeParse(form);
    if (result.success) {
      //clear error ออก
      setErrors({});

      alert("สำเร็จ");
    } else {
      const { fieldErrors } = result.error.flatten();
      console.log(fieldErrors);

      setErrors(fieldErrors);

      //  console.log("มี error อยู่")
    }

    // const errorFields = {};

    // if (!email) {
    //   // console.log("ไม่ได้กรอกอีเมล")
    //   errorFields.email = "กรุณากรอกอีเมล";
    // } else if (!email.includes("@")) {
    //   errorFields.email = "รูปแบบอีเมลไม่ถูกต้อง";
    // }

    // if (!password) {
    //   errorFields.password = "กรุณากรอกรหัสผ่าน";
    // } else if (password.length < 6) {
    //   errorFields.password = "รหัสผ่านต้องอย่างน้อย 6 ตัว";
    // }

    // setErrors(errorFields);

    // if (Object.keys(errorFields).length === 0) {
    //   alert("ส่งข้อมูลเรียบร้อย");
    //   setForm({
    //     email: "",
    //     password: "",
    //   });
    // }
    // console.log(errors, 1)
  };

  return (
    <div className="login-container">
      <p className="login-title">Login</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>อีเมล</label>
          <input
            className="form-input"
            type="text"
            name="email"
            value={form.email}
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
          {errors.email && <p className="text-error">{errors.email[0]}</p>}
        </div>

        <div className="form-group">
          <label>รหัสผ่าน</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-error">{errors.password[0]}</p>}
        </div>

        <button type="submit" className="submit-btn">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
