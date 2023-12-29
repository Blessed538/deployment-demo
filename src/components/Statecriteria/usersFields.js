const usersFields = {
  firstName: { type: "string", label: "First Name" },
  lastName: { type: "string", label: "Last Name" },
  email: { type: "string", label: "Email" },
  password: { type: "string", label: "Password" },
  disabled: { type: "boolean", disabled: "Disabled" },
  avatar: { type: "images", label: "Avatar" },
  role: {
    type: "string",
    label: "Role",
    options: [
      { value: "Admin", label: "Admin" },
      { value: "Viewer", label: "Viewer" },
      { value: "Reporter", label: "Reporter" },
    ],
  },
  states: {
    type: "string",
    label: "States",
    options: [
      { value: "Abia", label: "Abia" },
      { value: "Adamawa", label: "Adamawa" },
      { value: "Akwa Ibom", label: "Akwa Ibom" },
      { value: "Anambra", label: "Anambra" },
      { value: "Bauchi", label: "Bauchi" },
      { value: "Benue", label: "Benue" },
      { value: "Borno", label: "Borno" },
      { value: "Bayelsa", label: "Bayelsa" },
      { value: "Cross River", label: "Cross River" },
      { value: "Delta", label: "Delta" },
      { value: "Ebonyi", label: "Ebonyi" },
      { value: "Edo", label: "Edo" },
      { value: "Ekiti", label: "Ekiti" },
      { value: "Enugu", label: "Enugu" },
      {
        value: "Federal Capital Territory",
        label: "Federal Capital Territory",
      },
      { value: "Gombe", label: "Gombe" },
      { value: "Imo", label: "Imo" },
      { value: "Jigawa", label: "Jigawa" },
      { value: "Kaduna", label: "Kaduna" },
      { value: "Kebbi", label: "Kebbi" },
      { value: "Kogi", label: "Kogi" },
      { value: "Kwara", label: "Kwara" },
      { value: "Lagos", label: "Lagos" },
      { value: "Nasarawa", label: "Nasarawa" },
      { value: "Niger", label: "Niger" },
      { value: "Ogun", label: "Ogun" },
      { value: "Ondo", label: "Ondo" },
      { value: "Osun", label: "Osun" },
      { value: "Oyo", label: "Oyo" },
      { value: "Plateau", label: "Plateau" },
      { value: "Rivers", label: "Rivers" },
      { value: "Sokoto", label: "Sokoto" },
      { value: "Taraba", label: "Taraba" },
      { value: "Yobe", label: "Yobe" },
      { value: "Zamfara", label: "Zamfara" },
    ],
  },
};

export default usersFields;