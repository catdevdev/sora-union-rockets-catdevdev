import axios from "axios";

export default axios.create({
  baseURL: "https://staging-api.bloobloom.com/user/v1/sales_channels/website/",
});
