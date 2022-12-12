export const coolDate = function (original_date, number_style) {
    var res;
    let month = String(original_date).substr(5, 2);
    let day = String(original_date).substr(8, 2);
    let year = String(original_date).substr(0, 4);
    if (number_style === 1) {
        res = day + " " + monthName(month) + " " + year;
    } else if (number_style === 2) {
        res = day + " " + monthName(month);
    } else {
        res = month + "/" + day + "/" + year;
    }

    return res;
};

export const getDaySpecified = (date) => {
    let x_date = new Date(date);
    let mm = x_date.getDate();
    return mm;
}

export const getYearSpecified = (date) => {
    let x_date = new Date(date);
    let yyyy = x_date.getFullYear();
    return yyyy;
}

export const getMonthSpecified = (date) => {
    let x_date = new Date(date);
    let mm = x_date.getMonth() + 1; //January is 0!
    return mm;
}

const monthName = function (month) {
    var month_name;
    switch (month) {
        case "01":
            month_name = "Januari";
            break;
        case "02":
            month_name = "Pebruari";
            break;
        case "03":
            month_name = "Maret";
            break;
        case "04":
            month_name = "April";
            break;
        case "05":
            month_name = "Mei";
            break;
        case "06":
            month_name = "Juni";
            break;
        case "07":
            month_name = "Juli";
            break;
        case "08":
            month_name = "Agustus";
            break;
        case "09":
            month_name = "September";
            break;
        case "10":
            month_name = "Oktober";
            break;
        case "11":
            month_name = "November";
            break;
        case "12":
            month_name = "Desember";
            break;
        default:
            month_name = "";
    }

    return month_name;
};
