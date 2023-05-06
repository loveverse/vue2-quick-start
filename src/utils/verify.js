// 验证邮箱
const email =
  /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
const validateEmail = (rule, value, callback) => {
  if (email.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的邮箱格式！"));
  }
};
const ruleEmail = [
  {
    validator: validateEmail,
    trigger: "blur",
  },
];

// 验证手机号
const regPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
const validatePhone = (rule, value, callback) => {
  if (regPhone.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的手机号！"));
  }
};
const rulePhone = [
  {
    required: true,
    validator: validatePhone,
    trigger: "blur",
  },
];
export { ruleEmail, rulePhone };
