import { z } from "zod";

export const loginSchema = z.object({
  // email: z.string().min(1, "กรุณากรอกอีเมล").email("รูปแบบอีเมลไม่ถูกต้อง"),
  //TODO: เช็ค password
  email: z
    .string()
    .min(1, "กรุณากรอกอีเมล")
    .refine(
      (val) => {
        // console.log(val + "<===== คือนี้นะ");
        if (val.includes("@")) {
            // console.log(z.email().safeParse(val).success)
          return z.email().safeParse(val).success;
        }
        return true;
      },
      {
        message: "รูปแบบอีเมลไม่ถูกต้อง",
      },
    ),
  password: z.string().min(6, "รหัสผ่านต้องอย่างน้อย 6 ตัว"),
});
