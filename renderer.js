function sendmsg(){
  console.log("Clocked");
  document.getElementById("msgboxer").value = "";
}

document.querySelector('#btnEnd').addEventListener('click', () => {
    sendmsg()
})
