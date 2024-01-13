function onInit() {
  console.log("ready");
  renderPersonlDetails();
  renderSoftware();
  renderLanguages();
  renderworkExperience();
  renderEducation();
}

function renderPersonlDetails() {
  var html = "";
  for (var i = 0; i < personlDetails.length; i++) {
    if (personlDetails[i].item == "email") {
      html +=
        "<ul><li>" +
        "<b>" +
        personlDetails[i].item +
        ": </b> <a href='mailto:" +
        personlDetails[i].value +
        "'>" +
        personlDetails[i].value +
        "</a></li></ul>";
    } else if (personlDetails[i].item == "phone") {
      html +=
        "<ul><li>" +
        "<b>" +
        personlDetails[i].item +
        ":</b> <a href='tel:" +
        personlDetails[i].value +
        "'>" +
        personlDetails[i].value +
        "</a></li></ul>";
    } else {
      html +=
        "<ul><li>" +
        "<b>" +
        personlDetails[i].item +
        ": </b> " +
        personlDetails[i].value +
        "</li></ul>";
    }
  }
  document.getElementById("personlDetails").innerHTML = html;
}

function renderSoftware() {
  var html = "";
  for (var i = 0; i < software.length; i++) {
    html +=
      "<ul><li>" +
      "<b>" +
      software[i].item +
      ": </b> " +
      software[i].value +
      "</li></ul>";
  }
  document.getElementById("software").innerHTML = html;
}

function renderLanguages() {
  var html = "";
  for (var i = 0; i < languages.length; i++) {
    html +=
      "<ul><li>" +
      "<b>" +
      languages[i].item +
      ": </b> " +
      languages[i].value +
      "</li></ul>";
  }
  document.getElementById("languages").innerHTML = html;
}

function renderworkExperience() {
  var html = "";
  for (var i = 0; i < workExperience.length; i++) {
    html +=
      "<ul><li>" +
      "<b>" +
      workExperience[i].title +
      ": </b> " +
      workExperience[i].items +
      "</li></ul>";
  }
  document.getElementById("workExperience").innerHTML = html;
}

function renderEducation() {
  var html = "";
  for (var i = 0; i < education.length; i++) {
    html +=
      "<ul><li>" +
      "<b>" +
      education[i].title +
      ": </b> " +
      education[i].items +
      "</li></ul>";
  }
  document.getElementById("education").innerHTML = html;
}

var personlDetails = [{
    item: "שם",
    value: "מולא רים",
  },
  {
    item: "נייד",
    value: "+972542163687",
  },
  {
    item: "דואל",
    value: "kawther.sa93@gmail.com",
  },

  {
    item: "כתובת",
    value: "ירכא",
  },
];
var software = [{
    item: "",
    value: "יכולת ניהול ועבודת צוות",
  },
  {
    item: "",
    value: "אחריות, יוזמה, נתינה",
  },
  {
    item: "",
    value: "שליטה טובה במחשבים וב office",
  },
];
var languages = [{
    item: "ערבית",
    value: "שליטה מלאה",
  },
  {
    item: "עברית",
    value: "שליטה מלאה",
  },
  {
    item: "אנגלית",
    value: "שליטה טובה",
  },
];
var workExperience = [{
    title: "היום - 2017: תפקיד ניהולי",
    items: [
      "מנהלת שירות לקוחות מערכת איי סקור– מערכת לניהול פדגוגי ומערכת שעות מאושרת מטעם משרד החינוך",
    ],
  },
  {
    title: "2020-2021: פקידה",
    items: ["פקידת שירות לקוחות במוקד ויזה כאל"],
  },
  {
    title: "2011-2016: אחראית",
    items: ["אחראית משמרת בסופר מרקט בכפר ירכא"],
  },
];
var education = [{
    title: "2017 – תואר ראשון  B.A בייעוץ חינוכי",
    items: ["המכללה האקדמית גליל מערבי- עכו"],
  },
  {
    title: "2022",
    items: ["קורס פיתוח  במכללת ProCode Academy"],
  },

  {
    title: "2021",
    items: ["קורס office בשיטה חדשנית בעיקר וורד, איקסל"],
  },
  {
    title: "2011 – תעודת בגרות מלאה",
    items: [
      "סיום לימודי תיכון בבית הספר אחווה הדרוזית בכפר ירכא במגמת ביולוגיה כימיה",
    ],
  },
];