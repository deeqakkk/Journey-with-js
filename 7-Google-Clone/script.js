const toggleSwitch = document.querySelector(
  '.theme-slider input[type="checkbox"]'
);

/* Function to change theme */
function switchTheme(e) {
  /* Once checkbox is checked default theme change to dark */
  if (e.target.checked) {
    document.documentElement.setAttribute("theme", "dark");
  } else {
    document.documentElement.setAttribute("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
// search functionality
const searchinput = document.querySelector("#search");
searchinput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    search();
  }
});
function search() {
  const input = searchinput.value;
  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&rlz=1C1CHBF_enIN975IN975&sxsrf=APq-WBuPUDI24jMuajfP-CdaqEqSrQXHxA%3A1648229823177&ei=v_09Yuu8CpGxmAWe26DQCA&oq=motiv&gs_lcp=Cgdnd3Mtd2l6EAEYATIICAAQsQMQkQIyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIHCC4QsQMQCjoHCAAQRxCwAzoHCAAQsAMQQzoKCAAQ5AIQsAMYAToSCC4QxwEQ0QMQyAMQsAMQQxgCOg8ILhDUAhDIAxCwAxBDGAI6BAgjECc6CwguEIAEEMcBENEDOgsIABCABBCxAxCDAToLCC4QgAQQxwEQrwE6BAgAEEM6CAguEIAEELEDOgQILhBDOhEILhCABBCxAxCDARDHARDRAzoHCCMQ6gIQJzoOCC4QgAQQxwEQowIQ1AI6CggAELEDEIMBEEM6DgguEIAEELEDEMcBENEDOg4ILhDHARDRAxDUAhCRAjoICC4Q1AIQkQI6BQgAEJECOgsILhCABBCxAxCDAToOCC4QsQMQxwEQowIQkQI6CwguEIAEELEDENQCOhEILhCABBCxAxCDARDHARCjAjoLCC4QsQMQ1AIQkQJKBAhBGABKBAhGGAFQwwVYwkJg7mFoAnABeAKAAf0CiAGVF5IBBTItOS4ymAEAoAEBsAEKyAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz";
}
