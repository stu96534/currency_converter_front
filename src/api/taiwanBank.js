import { axiosNoauth } from "../utils/apiHelper";

export default {
  //
  getTaiwanBankRate() {
    return axiosNoauth.get('/taiwanBank/currency')
  }
}
