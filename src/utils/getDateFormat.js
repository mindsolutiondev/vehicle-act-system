import moment from "moment"

const getDateFormat = (date) => {
  var d = moment(date)
  return date && d.isValid() ? d : date
}

export default getDateFormat
