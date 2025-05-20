import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Periksa kembali email anda",
  }),
  password: z.string().min(6, {
    message: "Periksa kembali password anda",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email wajib diisi",
  }),
  whatsup: z.string().min(6, {
    message: "Masukkan nomor whatsup aktif",
  }),
  password: z.string().min(6, {
    message: "Password minimal 6 karakter",
  }),
  nama: z.string().min(1, {
    message: "Nama wajib diisi",
  }),
});
export const TambahDataSchema = z.object({
  email: z.string().min(3, {
    message: "Masukkan emai dengan benar",
  }),
  whatsup: z.string().min(6, {
    message: "Masukkan nomor whatsup aktif",
  }),
  nama: z.string().min(1, {
    message: "Nama wajib diisi",
  }),
});
