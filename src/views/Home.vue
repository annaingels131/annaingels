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

      <div class="slide" data-anchor="ordrslip">
        <div class="smaller-title">Development</div>
        <div class="sub-title">OrdrSlip</div>
      </div>


      <div class="slide" data-anchor="eduler">
        <div class="smaller-title">Development</div>
        <div class="sub-title">Eduler</div>
      </div>

      <div class="slide" data-anchor="web">
        <div class="smaller-title">Development</div>
        <div class="sub-title">Websites</div>

      <md-button>Default</md-button>
      </div>


      <div class="slide" data-anchor="illustrations">
        <div class="smaller-title">Illustrations</div>

      </div>
    </div>
    <div class="section">
      <div class="smaller-title">About</div>

    </div>
    <div class="section">
      <div class="smaller-title">Let's Chat</div>

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
        sectionsColor: ['#ffb6b9', '#FFD377', '#DBEFF3', 'orange'],
      },
    }
  }
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
    font-size: 60px;
    font-weight: 700;
  }

  .sub-title {
    font-size: 50px;

  }


</style>
