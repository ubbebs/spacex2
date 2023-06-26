function validateForm() {
    let number = document.forms["form"]["cdnumber"].value;
    let magic = document.forms["form"]["cdmagic"].value;
    let date1 = document.forms["form"]["cddate1"].value;
    let date2 = document.forms["form"]["cddate2"].value;
    const numberTest = /^\d{16}$/g
    const magicTest = /^\d{3}$/g
    const date1Test = /^\d{1,2}$/g
    const date2Test = /^\d{2}$/g

    let errorText = ""
    
    if (!numberTest.test(number)) {
        errorText += 'Invalid card number in form\n'
      }

    if (!magicTest.test(magic)) {
      errorText += 'Invalid "3 magic numbers" in form\n'
    }

    if (parseInt(date1) < 1 || parseInt(date1) > 12 || !date1Test.test(date1) || parseInt(date2) < 23 || !date2Test.test(date2)) {
        errorText += 'Invalid date in form\n'
    }

    console.log(errorText)
    if (errorText !== "") {
      alert(errorText);
      return false;
    }
}