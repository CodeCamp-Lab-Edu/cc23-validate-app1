import { useState } from "react";
import { signupSchema } from "../schemas/signupSchema";
import "./LoginPage.css";

function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    tel: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = signupSchema.safeParse(form);
    if (result.success) {
      //clear error ออก
      setErrors({});

      //TODO: ยิง api
      setIsSubmitting(true);

      alert("สมัครสมาชิกสำเร็จ");

      setIsSubmitting(false);
    } else {
      const { fieldErrors } = result.error.flatten();
      setErrors(fieldErrors);
    }
  };

  return (
    <div className="login-container">
      <p className="login-title">Signup</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ชื่อผู้ใช้หรืออีเมล</label>
          <input
            className="form-input"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-error">{errors.username[0]}</p>
          )}
        </div>

         <div className="form-group">
          <label>ชื่อเล่น</label>
          <input
            className="form-input"
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
          />
          {errors.nickname && (
            <p className="text-error">{errors.nickname[0]}</p>
          )}
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
          {errors.password && (
            <p className="text-error">{errors.password[0]}</p>
          )}
        </div>

         <div className="form-group">
          <label>ยืนยันรหัสผ่าน</label>
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-error">{errors.confirmPassword[0]}</p>
          )}
        </div>

        <div className="form-group">
          <label>เบอร์โทร</label>
          <input
            className="form-input"
            type="text"
            name="tel"
            value={form.tel}
            onChange={handleChange}
          />
          {errors.tel && (
            <p className="text-error">{errors.tel[0]}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? "กำลังส่งข้อมูล..." : "สมัครสมาชิก"}
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
