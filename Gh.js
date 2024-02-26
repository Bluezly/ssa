const handleSubmit = async(e) => {
e.preventDefault();
try { //I also tried using only: "/send_mail" here like I have in server.js but it didnt work
  await axios.post("http://localhost:3000/send_mail", {
    name
  });
}
catch (error) {
  console.log(error);
  }
}
