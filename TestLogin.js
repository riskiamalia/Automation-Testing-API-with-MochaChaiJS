const request_barru = require("supertest")("http://barru.pythonanywhere.com"); //url atau endpoint yang dituju
const expect = require("chai").expect; //import library chai untuk validasi

describe("POST User Info", function () { //deskripsikan function untuk test scenario
 
 
 //Test lOGIN
 it("Success Login with valid email and password", async function () { //test case 
	 const response = await request_barru //await untuk menunggu request endpoint hingga sukses
	 .post("/login") //tipe http request
	 .send({ email: "riskiamalia@gmail.com", password: "riski" });//data yang dikirim

	 expect(response.body.status).to.eql('SUCCESS_LOGIN');//expect untuk validasi respon
	 expect(response.body.data).to.eql('Welcome riski');
	 expect(response.body.message).to.eql('Anda Berhasil Login');
	 expect(response.body).to.include.keys("data", "message", "status"); 
	 expect(response.statusCode).to.eql(200);
 });
 //Test lOGIN
 it("Sukses login jika email menggunakan huruf besar kecil", async function () { //test case 
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "RiskiAmalia@gmail.com", password: "riski" });//data yang dikirim

  expect(response.body.status).to.eql('SUCCESS_LOGIN');//expect untuk validasi respon
  expect(response.body.data).to.eql('Welcome riski');
  expect(response.body.message).to.eql('Anda Berhasil Login');
  expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});

it("Sukses login jika password menggunakan huruf besar kecil", async function () { //test case 
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "riskiamalia@gmail.com", password: "Riski" });//data yang dikirim

  expect(response.body.status).to.eql('SUCCESS_LOGIN');//expect untuk validasi respon
  expect(response.body.data).to.eql('Welcome riski');
  expect(response.body.message).to.eql('Anda Berhasil Login');
  expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});

it("Sukses login jika email menggunakan huruf besar", async function () { //test case 
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "RISKIAMALIA@GMAIL.COM", password: "riski" });//data yang dikirim

  expect(response.body.status).to.eql('SUCCESS_LOGIN');//expect untuk validasi respon
  expect(response.body.data).to.eql('Welcome riski');
  expect(response.body.message).to.eql('Anda Berhasil Login');
  expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});

 
 it("Failed login jika email dan password kosong", async function () { //test case
	 const response = await request_barru //await untuk menunggu request endpoint hingga sukses
	 .post("/login") //tipe http request
	 .send({ email: "", password: "" });//data yang dikirim

	//  expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
	//  expect(response.body.data).to.eql('Email tidak valid');
	//  expect(response.body.message).to.eql('Cek kembali email anda');
	//  expect(response.body).to.include.keys("data", "message", "status"); 
	 expect(response.statusCode).to.eql(200);
 });
 
  it("failed login jika email kosong ", async function () { //test case
	 const response = await request_barru //await untuk menunggu request endpoint hingga sukses
	 .post("/login") //tipe http request
	 .send({ email: "", password: "riski" });//data yang dikirim

	//  expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
	//  expect(response.body.data).to.eql("User's not found");
	//  expect(response.body.message).to.eql('Email atau Password Anda Salah');
	//  expect(response.body).to.include.keys("data", "message", "status"); 
	 expect(response.statusCode).to.eql(200);
 });
 
 it("failed login jika password kosong ", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "riskiamalia@gmail.com", password: "" });//data yang dikirim

  expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
  expect(response.body.data).to.eql("User's not found");
  expect(response.body.message).to.eql('Email atau Password Anda Salah');
  expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});

it("failed login jika password huruf besar ", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "riskiamalia@gmail.com", password: "RISKI" });//data yang dikirim

//   expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
//   expect(response.body.data).to.eql("User's not found");
//   expect(response.body.message).to.eql('Email atau Password Anda Salah');
//   expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});

it("failed login jika email salah password benar ", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "riskiamaliaaaa@gmail.com", password: "riski" });//data yang dikirim

  expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
  expect(response.body.data).to.eql("User's not found");
  expect(response.body.message).to.eql('Email atau Password Anda Salah');
  expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});
it("failed login jika password salah email benar", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "riskiamalia@gmail.com", password: "riski123" });//data yang dikirim

  expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
  expect(response.body.data).to.eql("User's not found");
  expect(response.body.message).to.eql('Email atau Password Anda Salah');
  expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});
it("failed login jika email di isikan password , password  diisikan email", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "riski", password: "riskiamalia@gmail.com" });//data yang dikirim

   expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
	 expect(response.body.data).to.eql('Email tidak valid');
	 expect(response.body.message).to.eql('Cek kembali email anda');
	 expect(response.body).to.include.keys("data", "message", "status"); ; 
  expect(response.statusCode).to.eql(200);
});
it("failed login jika email di isi username", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "riski", password: "riski" });//data yang dikirim

     expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
	 expect(response.body.data).to.eql('Email tidak valid');
	 expect(response.body.message).to.eql('Cek kembali email anda');
	 expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});
it("failed login jika email di isi no hp", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "09181818", password: "riski" });//data yang dikirim

   expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
	 expect(response.body.data).to.eql('Email tidak valid');
	 expect(response.body.message).to.eql('Cek kembali email anda');
	 expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});

it("faled login dengan random email  ", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "riskiamalia123@gmail.com", password: "riski" });//data yang dikirim

  expect(response.body.status).to.eql('FAILED_LOGIN');//expect untuk validasi respon
  expect(response.body.data).to.eql("User's not found");
  expect(response.body.message).to.eql('Email atau Password Anda Salah');
  expect(response.body).to.include.keys("data", "message", "status"); 
  expect(response.statusCode).to.eql(200);
});

 
});