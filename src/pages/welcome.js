export default () => {
  const viewHome = `
    <div class="hero-image">
        <div class="hero-text">
          <div class="Logo1">
<<<<<<< HEAD
            <img src="img/Logos/LogoG1.png" class="logoHome" alt="logoKMS" />
=======
            <img src="../img/Logos/LogoG1.png" class="logoHome" alt="logoKMS" />
>>>>>>> d361de0f787adc6cdb1d6ed7dc1507f7de4f5b66
          </div>
          <h4>WELCOME</h4>
          <p class="text-home">
            It is a social network focused on creating a community interested in
            the preservation of our only home "🌎The Planet Earth".
          </p>
          <div class="ButtonBox1">
            <button id="btn-welcome-google" class="btn-welcome-google"><a href="#/google">Continue with Google</a></button>
            <button id="btn-welcome-signin" class="btn-welcome-signin"><a href="#/signin">Sign In</a></button>
            <button id="btn-welcome-signup" class="btn-welcome-signup"><a href="#/signup">Sign Up</a></button>
          </div>

          <p class="kmr">
            KMR
          </p>
        </div>
      </div>
  `;

  // <img class="image" src="http://olegif.com/bin/gifs/00/39/56.gif" alt="Conejo codeando">

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;
  return divElemt;
};
