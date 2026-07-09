import { z } from "zod";

export const signupSchema = z
  .object({
    username: z
      .string()
      .min(1, "กรุณากรอกอีเมล")
      .refine(
        (val) => {
          if (val.includes("@")) {
            return z.email().safeParse(val).success;
          }
          return true;
        },
        {
          message: "รูปแบบอีเมลไม่ถูกต้อง",
        },
      ),
    nickname: z
      .string()
      .min(1, "กรุณากรอกชื่อเล่น")
      .min(3, "ชื่อเล่นต้องมีอย่างน้อย 3 ตัวอักษร")
      .max(10, "ชื่อเล่นต้องไม่เกิน 10 ตัวอักษร")
      .regex(/^ab.+$/, "ชื่อเล่นต้องขึ้นต้นด้วย ab"),

    password: z.string().min(6, "รหัสผ่านต้องอย่างน้อย 6 ตัว"),
    confirmPassword: z.string().min(1, "กรุณายืนยันรหัสผ่าน"),

    tel: z.string().regex(/^0\d{9}$/, "ต้องมีตัวเลข 10 ตัวขึ้นด้วย 0"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "รหัสผ่านไม่ตรงกัน",
    path: ["confirmPassword"],
  });
