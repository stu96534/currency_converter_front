import { axiosNoauth } from "../utils/apiHelper";

export default {
  //
  getTaiwanBankRate() {
    return axiosNoauth.get('/taiwanBank/currency')
  },
  updateTaiwanBankRate() {
    return axiosNoauth.put('/taiwanBank/currency')
  },
  getNation() {
    return axiosNoauth.get('/taiwanBank/currency/nation')
  },
  getNationCurrency(nationId) {
    return axiosNoauth.get(`/taiwanBank/currency/nation/${nationId}`)
  },
}
