let resultBox = {
  Men: false,
  Women: false,
};

function validation(userAge) {
  let res1 = number_mobile();
  let res2 = data_urodzenia();
  let res4 = pusto_pole();
  let res5 = passwordFirst();
  let res6 = passwordSecond();
  let res7 = poczta();

  if (
    res1 == true &&
    res2.res == true &&
    res4 == true &&
    res5 == true &&
    res5 == true &&
    res6 == true &&
    res7 == true
  ) {
    let bull = true;

    userAge = res2.age;

    return { bull, userAge };
  } else {
    return false;
  }

  //Номер телефона
  function number_mobile() {
    let mobile = document.getElementById("komurka"),
      res = false;
    (mobile_value_error = document.getElementById("error_text")),
      (the_mistakes = document.getElementById("the_mistakes")),
      (mobile_value = mobile.value),
      (mobile_test = mobile_value.split("")),
      (mobile_small = /[a-z]/),
      (mobile_big = /[A-Z]/),
      (mobile_simbol = /[`!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]/);

    remuve_error(mobile);
    if (mobile.value == "") {
      errorPustPole(mobile, " Telefon jest niedodany");
      res = false;
      return res;
    }

    if (
      mobile_small.test(mobile_value) == true ||
      mobile_big.test(mobile_value) == true ||
      mobile_simbol.test(mobile_value) == true
    ) {
      for (i = 0; i < mobile_value.length; i++) {
        if (
          mobile_small.test(mobile_test[i]) == true ||
          mobile_big.test(mobile_test[i]) == true ||
          mobile_simbol.test(mobile_test[i]) == true
        ) {
          mobile_test.push(" " + mobile_test[i]);
        }
      }
      mobile_test = mobile_test.slice(mobile_value.length, mobile_test.length);

      mobile_value_error.textContent = "Nie tszeba dodovacz małych liter";
      the_mistakes.textContent = mobile_test;
      return false;
    } else {
      mobile_value_error.textContent = "";
      the_mistakes.textContent = "";
      res = true;
      return res;
    }
  }

  // ДАТА РОЖДЕНИЯ
  function data_urodzenia(age) {
    let data_urodzenia = document.getElementById("date");

    let res = true;

    let data_person = new Date(data_urodzenia.value);
    let data_octual = new Date();

    age = data_octual.getFullYear() - data_person.getFullYear();

    remuve_error(data_urodzenia);

    if (data_octual.getFullYear() - data_person.getFullYear() < 18) {
      errorPustPole(
        data_urodzenia,
        `Masz ${age} liat: Nie możesz mieć mniej niż 18 lat!"`
      );
      res = false;
      return res;
    } else {
      return { res, age };
    }
  }

  //Почта
  function poczta() {
    let res = true,
      mail_input = document.getElementById("email"),
      validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    remuve_error(mail_input);
    if (validEmail.test(mail_input.value) == false) {
      res = false;
      errorPustPole(mail_input, "Nieprawidłowo określony Email");
      return res;
    } else {
      res = true;
      return res;
    }
  }

  //Проверка пароля
  function passwordFirst() {
    let haslo_first = document.getElementById("haslo_first");
    let res = true;

    let lowercaseRegex = /[a-z]/;
    if (lowercaseRegex.test(haslo_first.value) !== true) {
      res = false;
    }

    let bigcaseRegex = /[A-Z]/;
    if (bigcaseRegex.test(haslo_first.value) !== true) {
      res = false;
    }

    let digitsRegex = /[0-9]/;
    if (digitsRegex.test(haslo_first.value) !== true) {
      res = false;
    }

    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(haslo_first.value) !== true) {
      res = false;
    }

    if (haslo_first.value.length < 6 || haslo_first.value == "") {
      res = false;
    }

    remuve_error(haslo_first);
    if (res == false) {
      errorPustPole(
        haslo_first,
        "Nieprawidłowo określony Hasło, minimum 6 znaków.  Przykład: aA/!4574"
      );
    }
    return res;
  }

  //Проверка повторного пароля
  function passwordSecond() {
    let haslo_first = document.getElementById("haslo_first"),
      haslo_second = document.getElementById("haslo_second");
    remuve_error(haslo_second);
    if (haslo_first.value == haslo_second.value) {
      return true;
    } else {
      errorPustPole(haslo_second, "ponowne hasło nie pasuje");
      return false;
    }
  }

  //Все поля заполнены
  function pusto_pole() {
    let result = true;
    let inputs = document.querySelectorAll(".pusto_polie");
    inputs.forEach((input) => {
      remuve_error(input);

      if (input.value == "") {
        errorPustPole(input, "Polie Jest pusto");
        result = false;
        return result;
      }
    });

    let input_mail = document.getElementById("email");

    remuve_error(input_mail);
    if (input_mail.value == "") {
      errorPustPole(input_mail, "Podaj poprawny email");
      result = false;
      return result;
    }

    let toggle_first = document.querySelector("#toggle1"),
      toggle_second = document.querySelector("#toggle2");

    remuve_error(toggle_first);
    if (toggle_first.checked !== true && toggle_second.checked !== true) {
      result = false;
      errorPustPole(toggle_first, "Podaj poprawny Gender");
      return result;
    }
    return result;
    // // Выбор пола
  }

  function errorPustPole(input, text) {
    let parent = input.parentNode;
    parent.classList.add("error");

    let error_string = document.createElement("p");
    error_string.classList.add("error_string");
    error_string.textContent = text;

    parent.append(error_string);
  }

  function remuve_error(input) {
    let parent = input.parentNode;

    if (parent.classList.contains("error") == true) {
      parent.querySelector(".error_string").remove();
      parent.classList.remove("error");
    }
  }
}

// Выбор города
function wybor_kraju() {
  let kraj1 = document.getElementById("country");

  let województwo_wybor = document.getElementById("województwo_p");
  let regionPoland = document.getElementById("regionPoland");

  let vvod_województwo = document.getElementById("vvod_województwo");
  let województwo_wwod = document.getElementById("województwo_n");
  if (kraj1.value === "Polska") {
    województwo_wybor.style.display = "block";
    regionPoland.classList.add("pusto_polie");

    województwo_wwod.style.display = "none";
    vvod_województwo.classList.remove("pusto_polie");
  } else {
    województwo_wybor.style.display = "none";
    regionPoland.classList.remove("pusto_polie");

    województwo_wwod.style.display = "block";
    vvod_województwo.classList.add("pusto_polie");
  }
}

function adres_zamieszkania() {
  let adres_zamieszkania = document.getElementById("adres_zamieszkania"),
    input_zamieszkania = document.getElementById("input_zamieszkania");
  adres_zamieszkania.style.display = "block";
  input_zamieszkania.classList.add("pusto_polie");
}

function adres_korespondencii() {
  let check_box = document.getElementById("check_box");
  check_box.style.display = "block";
}
function adres_zamieszkania_replace() {
  let zamieszkanie_replace = document.getElementById(
      "adres_zamieszkania_replace"
    ),
    input_zamieszkania_replace = document.getElementById(
      "input_zamieszkania_replace"
    );
  input_zamieszkania_replace.value = input_zamieszkania.value;
  zamieszkanie_replace.style.display = "block";
}

function toggle() {
  let toggle_first = document.querySelector("#toggle1"),
    toggle_second = document.querySelector("#toggle2");

  let inputM = document.querySelector('input[name="boxM"]'),
      inputW = document.querySelector('input[name="boxW"]');

  toggle_first.addEventListener("change", function () {

    resultBox.Men = true;
    resultBox.Women = false;
    inputM.name = "Pieć";
    toggle_second.checked = false;
  });

  toggle_first.checked = false;

  toggle_second.addEventListener("change", function () {

    resultBox.Men = false;
    resultBox.Women = true;
    inputW.name = "Pieć";
    toggle_first.checked = false;
  });

  toggle_second.checked = false;
}
toggle();

document.getElementById("valid").addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = validation();
  if (valid.bull == true) {
    alert("Forma prawdżiva");
    const form = event.target;
    const formData = new FormData(form); // собираем данные из формы
    formData.append("Wiek", valid.userAge);
    if (resultBox.Men == true) {
      formData.append("Pieć", "Mężczyzna");
    } else {
      formData.append("Pieć", "Kobieta");
    }

    const values = {};
    formData.forEach((value, key) => {
      values[key] = value;
      // console.log(`Key: ${key}, Value: ${value}`);
    });
    console.log("You Form: ", values);
  } else {
    alert("Forma nie jest prawdżiva");
  }
});