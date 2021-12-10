const EditProfile = () => {
  const viewEditProfile = ` 
  <body>
    <section id="EditProfile" class="Box">
      <div id="Profile">
        <div class="titleEditProfile">
          <h1>EDIT PROFILE</h1>
        </div>
        <div class="containerSection">
          <div class="bodyEditProfile">
            <div class="nameUser">
            </div>
            <div class="profileAndInterest"></div>
            <div class="interests">
              <img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt="" />
              <img src="/src/img/Intereses/InteresesCN/SiembraCN.png" alt="" />
              <img src="/src/img/Intereses/InteresesCN/ReciclajeCN.png" alt="" />
            </div>
            <div class="photoProfile">
              <img
                src="/src/img/Avatares/Animals/AvatarA7.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="countryUser">
              <div class="countryUserFlex">
                <h3>Country:</h3>
                <select name="select">
                  <option value="value1">Value 1</option>
                  <option value="value2" selected>Value 2</option>
                  <option value="value3">Value 3</option>
                </select>
              </div>
            </div>
            <div class="titleWriteBio">
              <h3>Write your bio:</h3>
            </div>
            <div class="bioUser">
              <textarea name="comments" id="texta2"></textarea>
              <div class="buttonSave">
                <button>
                  <h2>SAVE</h2>
                </button>
              </div>
            </div>
          </div>
          <div class="selectProfile" class="Box">
            <div id="selectPhoto" class="Box">
              <h2>Choose your profile picture:</h2>
              <div id="photos" class="Box">
                  <div class="img0">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA1.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img1">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA2.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img2">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA3.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img3">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA4.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img4">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA5.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img5">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA6.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img6">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA7.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img7">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA8.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img8">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA9.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img9">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA10.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img10">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA11.png"
                    alt=""
                    srcset=""
                  />
                  </div>
                  <div class="img11">
                    <img
                    src="/src/img/Avatares/Animals/AvatarA12.png"
                    alt=""
                    srcset=""
                  />
                  </div>
              </div>
          
          </div>
            <div id="selectInterest" class="Box">
              <h2>Pick 3 of your interests:</h2>
              <div id="photos" class="Box">
                <div class="img0">
                  <img
                  src="/src/img/Intereses/Agua.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img1">
                  <img
                  src="/src/img/Intereses/Animal.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img2">
                  <img
                  src="/src/img/Intereses/Clima.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img3">
                  <img
                  src="/src/img/Intereses/Energia.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img4">
                  <img
                  src="/src/img/Intereses/Energia2.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img5">
                  <img
                  src="/src/img/Intereses/Fabrica.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img6">
                  <img
                  src="/src/img/Intereses/Oceanos.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img7">
                  <img
                  src="/src/img/Intereses/Reciclaje.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img8">
                  <img
                  src="/src/img/Intereses/ResiduosTóxicos.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img9">
                  <img
                  src="/src/img/Intereses/Siembra.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img10">
                  <img
                  src="/src/img/Intereses/Tala.png"
                  alt=""
                  srcset=""
                />
                </div>
                <div class="img11">
                  <img
                  src=""
                  alt=""
                  srcset=""
                />
                </div>
            </div>
            </div>
          </div>  
          </div>
        </div>
      </div>
    </section>
  </body>
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewEditProfile;

  const infoUser = (info) => {
    console.log(info);
    divElemt.querySelector('.nameUser').innerHTML
    += `<h3>${info.name}</h3>`;
  };

  readUser(uid).then((value) => infoUser(value)).catch((error) => console.log(error));

  return divElemt;
};

export default EditProfile;
