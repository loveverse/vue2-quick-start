import { post } from "@/utils/http";

export const ajxCodeImg = () => post("/admin/v1/verify_image", "urlencoded");
