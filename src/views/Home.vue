<template>
  <div class="home">
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div class="section">
      <div>
        <div class="title">Hello!</div>
        <div class="md-xsmall-hide">
        I am Anna.
        Developer, Designer, and Community Organizer. <br>
        Scroll down to get to know me! <br>
        </div>
      </div>
      <img src="../assets/Anna.png" class="anna">
    </div>

    <div class="section">

      <div class="slide projects" data-anchor="eduler">
        <img src="../assets/elogo.png" alt="Eduler Logo" class="eduler-img">
         <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-5"></div>       
          <div class="md-layout-item">        
            <div class="edu-phone"></div>
          </div>
          <div class="md-layout-item about-project">
            <div class="position smaller-title">Co-Founder and Developer</div>
            <div class="project-info">
              A scheduler for your educational needs. 
              An app created to help educators working with students with special needs in creating a daily schedule for students that is easy to understand and use! <br>
              Utilized: Ionic, Angular 
            </div>
            <a href="https://itunes.apple.com/US/app/id1346465892?mt=8" target="_blank"><img src="../assets/appstore.png" alt="appstore" class="appstore"></a>
          </div>
          <div class="md-layout-item md-size-15"></div>       
        </div>
      </div>

      <div class="slide projects" data-anchor="ordrslip">
        <img src="../assets/ordrslip.png" alt="Ordrslip Logo" class="ordrslip-img">
         <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-5"></div>       
          <div class="md-layout-item">        
            <div class="ordr-phone"></div>
          </div>
          <div class="md-layout-item about-project">
            <div class="position smaller-title">Developer</div>
            <div class="project-info">
              White-labled applications for mobile ordering.<br>
              Utilized: AngularJS, Node.js, Ionic, Angular 
            </div>
            <a href="https://ordrslip.com/" target="_blank"><button class="button">More Info</button></a> 
          </div>
          <div class="md-layout-item md-size-15"></div> 
        </div>
      </div>


      <div class="slide" data-anchor="illustrations">
        <div class="smaller-title">Illustrations</div>
          <div class="md-layout md-gutter i1">
            <div class="md-layout-item"><img src="../assets/annaplants.png" alt=""></div>
            <div class="md-layout-item"><img src="../assets/bb.png" alt=""></div>
            <div class="md-layout-item"><img src="../assets/hidden.png" alt=""></div>
            <div class="md-layout-item"><img src="../assets/brit.png" alt=""></div>
            <div class="md-layout-item"><img src="../assets/god.png" alt=""></div>
          </div>
          <div class="md-layout md-gutter i1">
            <div class="md-layout-item"><img src="../assets/leaf.png" alt=""></div>
            <div class="md-layout-item"><img src="../assets/socks.png" alt=""></div>
            <div class="md-layout-item"><img src="../assets/flower.png" alt=""></div>
            <div class="md-layout-item"><img src="../assets/hey.png" alt=""></div>
            <div class="md-layout-item"><img src="../assets/Lupita.png" alt=""></div>
          </div>
        </div>
    </div>

    <div class="section">
        <div class="md-layout md-gutter">
          <div class="md-layout-item about-me">
            <div class="position smaller-title">About me!</div>
            <div class="project-info">
              I am Anna. A Design-minded Developer who loves her community and her dog, Onion! 
              Women Techmaker Fresno Lead, Google Developer Group Co-Organizer, and advocate for diversity and inclusion in tech. 
            </div>
            <div class="contact sub-title">Let's stay in touch</div>
              <div class="icons">
              <a href="mailto:anna.r.ingels@gmail.com">
                <svg aria-hidden="true" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 fa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
              </a>
              <a href="https://www.instagram.com/missannarebecka/" target="_blank">
                <svg aria-hidden="true" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14 fa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>            </a>
              <a href="https://www.linkedin.com/in/anna-ingels-3196a4143/" target="_blank">
                <svg aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14 fa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg>            
              </a>
              <a href="https://dribbble.com/annaingels" target="_blank">
                <svg aria-hidden="true" data-prefix="fab" data-icon="dribbble" class="svg-inline--fa fa-dribbble fa-w-16 fa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg>              </a>
              <a href="https://github.com/annaingels131" target="_blank">
                <svg aria-hidden="true" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16 fa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>              </a>
            </div>
          </div>
          <div class="md-layout-item">        
            <div class="anna-img"></div>
          </div> 
        </div>
    </div>

  </full-page>  
  </div>
</template>

<script>

export default {
  name: "home",
  components: {
  }, 
  data () {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        verticalCentered: false,
        navigation: true,
        navigationTooltips: ['Home', 'Projects', 'About', 'Contact'],
        anchors: ['Home', 'Projects', 'About', 'Contact'],
        sectionsColor: ['#ffb6b9', '#59C0BF', '#B9DED7'],
      },
    }
  },
};
</script>

<style lang="scss" scoped>

  .anna{
    position: absolute;
    bottom: 0;
    left: 8px;
    height: 70%;
    max-width: 2000px;
  }

  .title {
    font-size: 110px;
    font-weight: 700;
  }

  .smaller-title {
    font-size: 40px;
    font-weight: 700;
  }

  .sub-title {
    font-size: 20px;
  }

  .projects {

    .eduler-img {
      height: 100px;
    }

    .ordrslip-img {
      height: 82px;
      padding: 20px;
    }

    .edu-phone {
      background-image: url("../assets/ephone.png"); 
      height: 100vh;
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center; 
      margin-top: -60px; 
    }


    .ordr-phone {
      background-image: url("../assets/ordr.png"); 
      height: 100vh;
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center; 
      margin-top: -60px; 
    }



    .about-project {
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .position {
      font-size: 50px;
      border-bottom: 2px solid;
      padding-bottom: 5px;
      }


      .appstore {
        height: 200px;
      }

      .button {
        font-size: 15px;
        margin-top: 40px;
        padding: 20px 40px;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);;
      }

    }
  }


  .project-info {
    font-size: 20px;
    padding-top: 15px;
  }

  .about-me {
    padding: 109px;
    font-size: 110px
  }

  .contact {
    margin: 40px;
    font-size: 30px;
    font-weight: 700;
  }

  .i1 {
    display: flex;
    align-items: center;
  }

  .anna-img {
    background-image: url("../assets/annaingels.jpg"); 
      height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center; 
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

.fa {
  height: 30px; 
  color: #2c3e50; 

  :hover {
    color: #fff;
  }
}

 

</style>
