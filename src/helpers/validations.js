export default class Validations {
  static EmailAddress = (val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);
  static PostalCode = (val) =>  /^(GIR ?0AA|[A-PR-UWYZ](?:\d{1,2}|([A-HK-Y]\d|[A-HK-Y]\d{2}|[A-HK-Y]\d[ABEHMNPRV-Y])) ?\d[ABD-HJLNP-UW-Z]{2})$/.test(val);
  static Length8 = (val) => /^.{8,}$/.test(val);
  static CapitalLetter = (val) => /[A-Z]/.test(val);
  static SmallLetter = (val) => /[a-z]/.test(val);
  static SpecialChar = (val) => /^(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/.test(val);
  static NotEmpty = (val) => /.+/.test(val);
  static PhoneNumber = (val) =>  /^(?:\+44|0)[1-9]\d{8,9}$/.test(val);
}
