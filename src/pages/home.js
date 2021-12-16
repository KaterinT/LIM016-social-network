/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import {
  db,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  // onSnapshot,
  deleteDoc,
} from '../utils/firebaseconfig.js';

//modal
let cerrar = document.getElementById("close");
let modalC = document.getElementById("modal-container");
let btnModalConfirmDelete = document.getElementById("btn-modal-yes");
let btnModalCancel = document.getElementById("btn-modal-no");

// Obtener un usuario
async function readUser(uid) {
  let data = '';
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log('Document data:', docSnap.data());
    data = docSnap.data();
    // console.log('Document data:', data);
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
  return data;
}

// agregar datos a Firebase
async function addPublication(publication) {
  try {
    // eslint-disable-next-line no-unused-vars
    const docRef = await addDoc(collection(db, 'publications'), {
      author: sessionStorage.getItem('key'),
      // user: localStorage.getItem('user'),
      publication,
    });

    // console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// eliminar publicacion
async function deletePublication(idPublicationRef) {
  await deleteDoc(doc(db, 'publications', idPublicationRef));
}

// Export const Home
const Home = () => {
  const containerHome = document.createElement('div');
  containerHome.classList.add('positionHome');
  const viewHome = `
  <main>
    <!-- HOME PAGE -->
    <section id='Home' class='Box Home'>

      <div class='HomeBox'>
        <div class='UserName'>
        </div>
        <div class='Avatar'>
          <img class='Avatar-img' src='img/Avatares/Animals/AvatarA7.png' alt='Avatar Profile'><br>
          <div class='linea2'>&nbsp;</div>
        </div>
        <div class='Bio'>
          <h3>Biography:</h3><br>
          <div>
            <p>Hola, soy amante del arte en reciclado. Hago muchas manualidades pro ambientales. Les invito a ver mi galeria. 🧮 </p>
          </div>
        </div>
        <div class='Inf'>
          <div class='Country'>
            <h3>Country:</h3>
            <p>Italia</p>
          </div>
          <div class='Email'>

          </div>
        </div>
        <div class='Interests'>
          <h3>
            Interests:
          </h3><br>
          <div class='Interests-Box'>
            <img src='img/Intereses/InteresesCN/AnimalCN.png' alt=''>
            <img src='img/Intereses/InteresesCN/SiembraCN.png' alt=''>
            <img src='img/Intereses/InteresesCN/ReciclajeCN.png' alt=''>
          </div>
        </div>
      </div>

      <div id='publications' class='Publications'>
        <div class='PublicationsContent'>
          <div class='btnPublic'>
            <img id="NewPost" class="NewPost" src='img/Icons/WhiteBorder/PlusCircle1.png' alt='Nex Publication'>
          </div>
          <div class='boxPublic'>
          <div id='boxPublications'class='NoneboxPublications'>
            <div class='boxPhotoandName'>
              <div class='boxInternoPhotoandName'>
                <div class='photoPerfil'>
                  <img src='img/Avatares/Animals/AvatarA7.png' alt=''>
                </div>
                <div class="userNamePublication">

                </div>
              </div>
            </div>
            <div class='publication'>
              <textarea name='comments' placeholder='Type something here...' id='texta2' clase='texta2'></textarea>
              <div id="modalCheckPost" class="modalCheckPost">
                <img src="img/Icons/Verify.png"  alt="sent email" />
                <p>Your post was published successfully</p> 
              </div>
            </div>
            <div class='save'>
              <button id='btnSave' class='btnSave'>SAVE</button>
              <button id='btnCancel' class='btnCancel'>CANCEL</button>

            </div>
          </div>
          <div id='publicado'>
          </div>
        </div>
        </div>
        <div class='SliderNews'>
          <div class='TittleEcoNews'>
            <h3> ECO NEWS </h3>
          </div>  
          <div class='NewsContainer'>
            <div class='News'>
              <img src='img/Notice/notice3.jpg'>
              <h2>COP26: Women are the most affected by climate change</h2>
              <a href='https://news.un.org/es/story/2021/11/1499772' target='_blank'>See more</a>
            </div><br>
            <div class='News'>
              <img src='img/Notice/notice2.jpg'>
              <h2>
              The era of fossil fuel-powered cars in the spotlight at COP26</h2>
              <a href='https://news.un.org/es/story/2021/11/1499832' target='_blank'>See more</a>
            </div><br>
            <div class='News'>
              <img src='img/Notice/notice1.jpg'>
              <h2>COP26: Promises 'ring hollow' when fossil fuels continue to receive trillions in subsidies, says Guterres</h2>
              <a href='https://news.un.org/es/story/2021/11/1499902' target='_blank'>See more</a>
            </div><br>
            <div class='News'>
              <img src='img/Notice/notice5.jpg'>
              <h2>Panela, a sweet bet for the indigenous people to continue living in the Sierra de Colombia</h2>
              <a href='https://news.un.org/es/story/2021/11/1500632' target='_blank'>See more</a>
            </div> <br>
          </div> 
        </div>
      </div>
    </section>
  </main>`;
  containerHome.innerHTML = viewHome;

  const cleanModal = () => {
    const check = document.getElementById('modalCheckPost');

    if (check) {
      document
        .getElementById('modalCheckPost')
        .classList.replace('AlertmodalCheckPost', 'modalCheckPost');
    }
  };

  const infoUser = (info) => {
    // console.log(info);
    containerHome.querySelector(
      '.UserName',

    ).innerHTML += `<br><h1>${info.name}</h1><br>
    <div class='linea2'>&nbsp;</div>`;
    containerHome.querySelector('.Email').innerHTML += `<h3>Email:</h3>
    <p>${info.email}</p>`;

    containerHome.querySelector(
      '.userNamePublication',
    ).innerHTML += `
    <p>${info.name}</p>`;

    // evento de añadir publicación con save
    containerHome.querySelector('#btnSave').addEventListener('click', (e) => {
      e.preventDefault();
      const divPublicado = containerHome.querySelector('#publicado');
      const publication = containerHome.querySelector('#texta2').value;
      containerHome.querySelector('#texta2').value = containerHome.querySelector('#texta2').defaultValue;
      console.log(publication);

      while (divPublicado.firstChild) {
        divPublicado.removeChild(divPublicado.firstChild);
      }

      if (publication !== '') {
        document
          .getElementById('modalCheckPost')
          .classList.replace('modalCheckPost', 'AlertmodalCheckPost');

        addPublication(publication);
      }
      if (publication === '') {
        cleanModal();
      }
      reedPublications(info);
    });

    // Función para eliminar el contenido del input al momento de cancelar
    const deleteContentInput = () => {
      containerHome.querySelector('#texta2').value = '';
    };

    // Botón para ocultar la caja de agregar publicación
    containerHome.querySelector('.btnCancel').addEventListener('click', (e) => {
      e.preventDefault();
      document
        .getElementById('boxPublications')
        .classList.replace('boxPublications', 'NoneboxPublications');
      containerHome.querySelector('#texta2').value;
      deleteContentInput();
      cleanModal();
    });

    // Botón para mostrar la caja de agregar publicación
    containerHome.querySelector('.NewPost').addEventListener('click', (e) => {
      e.preventDefault();

      document
        .getElementById('boxPublications')
        .classList.replace('NoneboxPublications', 'boxPublications');
    });
  };

  const uid = () => {
    const uidSS = sessionStorage.getItem('key');
    return uidSS;
  };

  readUser(uid())
    .then((value) => { infoUser(value), reedPublications(value); })
    .catch((error) => console.log(error));

  // actualizacion tiempo real de publications
  function realOnSnapshot(documentFirebase) {
    const idPublication = documentFirebase.id;
    llenarPublications(documentFirebase, idPublication);
  }

  // publicaciones realizadas
  async function llenarPublications(documentFirebase, idPublication) {
    const userOfPublication = await getDoc(doc(db, 'users', documentFirebase.data().author));

    if (userOfPublication.exists()) {
      const divPublicado = containerHome.querySelector('#publicado');

      const nameUser = userOfPublication.data().name;
      const publicationText = documentFirebase.data().publication;
      divPublicado.innerHTML += `
          <div class='boxPublicationsN'>
            <div class='boxPhotoandNameN'>
              <div class='boxInternoPhotoandNameN'>
                <div class='photoPerfilN'>
                  <img src='img/Avatares/Animals/AvatarA7.png' alt=''>
                </div>

                <div class="userNameN">
                  <p>${nameUser}</p>
                </div>
              </div>
            <div class='delete'>
            <button id='btnDelete' class='btnDelete' data-ref='${idPublication}'><img src='img/Icons/Delete.png' alt=''></button>
            </div>
          </div>
            <div class='publicationN'>
              <div class='contentPublicationN'><p>${publicationText}</p></div>
            </div>
            <div class='saveN'>
              <p>2</p>
              <img src='img/Icons/WhiteTotal/Heart2.png' alt=''>
            </div>
          </div>`;


      // delete publication
      const publication = divPublicado.querySelectorAll('button[data-ref]');

      publication.forEach((element) => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          const idPublicationRef = element.dataset.ref;

          //INIT - Modal for Vericate Delete Publication
          let stateModal = false;

          //view modal
          modalC.style.opacity = "1";
          modalC.style.visibility = "visible";

          //close modal
          cerrar.addEventListener("click", function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
            // console.log('buton close:', stateModal);
            return stateModal;
          });

          //cancel modal
          btnModalCancel.addEventListener("click", function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
            // console.log('stateModal cancel:', stateModal);
            return stateModal
          });

          //confirm modal - YES
          btnModalConfirmDelete.addEventListener("click", function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
            stateModal = true;
            // console.log('stateModal confirm:', stateModal);

            // Delete publication for Firebase
            deletePublication(idPublicationRef, divPublicado);

            //Delete box of publications
            const elementDelete = element.parentNode.parentNode.parentNode;
            elementDelete.remove();

            return stateModal
          });
          //END - Modal for Vericate Delete Publication
        });
      });
    } else {
      console.log('No such document!');
    }
    return userOfPublication;
  }

  // leer datos desde Firebase de la colección Publicaciones y Usuarios
  async function reedPublications() {
    const querySnapshotPublications = await getDocs(collection(db, 'publications'));

    // console.log('visualizando esta linea querySnapshotUsers: ', querySnapshotUsers);
    // eslint-disable-next-line max-len
    // console.log('visualizando esta linea querySnapshotPublications: ', querySnapshotPublications);

    querySnapshotPublications.forEach((documentFirebase) => {
      realOnSnapshot(documentFirebase);
    });

    return querySnapshotPublications;
  }
  return containerHome;
};

export default Home;
