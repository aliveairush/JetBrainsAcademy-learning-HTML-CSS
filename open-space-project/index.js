document.getElementById("password-submit-btn").addEventListener("click", function () {
  const enteredPass = document.getElementById("password-input-field").value
  if (enteredPass === 'TrustNo1') {
    const listOfElements = document.getElementsByTagName("input");
    Array.from(listOfElements).forEach(elem => elem.disabled = false);

    document.getElementById("launch-btn").disabled = true
    document.getElementById("password-submit-btn").disabled = true
    document.getElementById("password-input-field").disabled = true
  }
})

function myListener(){
  const checkboxes = document.querySelectorAll('.checkbox-security-check');
  const levers = document.querySelectorAll('.range-security-check');
  if (Array.from(checkboxes).every(item => item.checked) && Array.from(levers).every(item => {return item.value === '100'})){
    document.getElementById("launch-btn").disabled = false
  }
}

function rocketLaunch(){
  document.getElementById("rocket").classList.add("fly");
}