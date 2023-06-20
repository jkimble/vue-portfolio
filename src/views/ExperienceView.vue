<script setup>
  import PageHero from '../components/custom/PageHero.vue'
  import AccordionRow from '../components/custom/AccordionRow.vue'
  import ReferenceSlider from '../components/custom/ReferenceSlider.vue'
</script>

<template>
    <main class="experience innerpage">
      <PageHero hero_heading="Education & Experience" hero_content="See information on my education, professional and freelance experience."></PageHero>
      <div class="container-fluid content-wrap">
        <AccordionRow accordion_head="Bachelor of Science, Computer Science">
          <template #option_heading>
            Education
          </template>
          <template #accordion_content>
            <div class="para_wrap">
              <h4>College:</h4>
              <p>Mount St. Mary's University</p>
              <p><i>Emmitsburg, Maryland</i></p>
            </div>
            <div class="para_wrap">
              <h4>Years Attended:</h4>
              <p>2016-2020</p>
            </div>
            <div class="para_wrap">
              <h4>Details:</h4>
              <ul class="detail_list">
                <li>Board Member, Association of Computing Machinery (MSMU).</li>
                <li>Created web app to quickly gather athlete statistics and create graphs.</li>
                <li>Worked in teams to build detailed computer graphics with C++.</li>
                <li>Created basic Andriod apps using Android/Java.</li>
                <li>Track & Field: 7x All-Conference, 2 School Records.</li>
                <li>Track & Field: <a :href="'https://www.fredericknewspost.com/sports/level/collegiate/kimble-blows-dust-off-mount-track-record-held-by-ambush/article_cbc9e51c-93c1-5477-9df4-20a89d5af679.html'" target="_blank">Featured Article</a></li>
              </ul>
            </div>
          </template>
        </AccordionRow>
        <AccordionRow accordion_head="Web Developer: The Karcher Group">
          <template #option_heading>
            Professional Experience
          </template>
          <template #accordion_content>
            <div class="para_wrap">
              <h4>Sector:</h4>
              <p><i>Marketing Agency</i></p>
            </div>
            <div class="para_wrap">
              <h4>Duration:</h4>
              <p>April 2021 - June 2023</p>
            </div>
            <div class="para_wrap">
              <h4>Accomplishments:</h4>
              <ul class="detail_list">
                <li>Fully developed multiple enterprise-level websites, including e-Commerce and gated content functionality.</li>
                <li>Full stack development on modern, responsive websites and custom themes in multiple content management systems.</li>
                <li>Created solutions to client's complex issues.</li>
                <li>Created custom WordPress editors/block editors.</li>
                <li>Awarded Co-Employee of the Month.</li>
                <li>Worked directly with clients to achieve best results.</li>
              </ul>
            </div>
          </template>
        </AccordionRow>
        <AccordionRow accordion_head="Junior Web Developer: Kaulig Media">
          <template #accordion_content>
            <div class="para_wrap">
              <h4>Sector:</h4>
              <p><i>Marketing Agency</i></p>
            </div>
            <div class="para_wrap">
              <h4>Duration:</h4>
              <p>April 2021 - June 2023</p>
            </div>
            <div class="para_wrap">
              <h4>Accomplishments:</h4>
              <ul class="detail_list">
                <li>Created responsive templates for web pages with multiple CMS</li>
                <li>Developed custom blocks / editors to assist content loading.</li>
                <li>Produced multi-platform HTML email campaigns for clients</li>
                <li>Participated in QA reviews with design and content teams.</li>
                <li>Repaired and organized client website database.</li>
              </ul>
            </div>
          </template>
        </AccordionRow>
        <AccordionRow accordion_head="Freelance: Web Developer">
          <template #option_heading>
            Freelance
          </template>
          <template #accordion_content>
            <div class="para_wrap">
              <h4>Sector:</h4>
              <p><i>Clothing, Marketing, Medical</i></p>
            </div>
            <div class="para_wrap">
              <h4>Duration:</h4>
              <p>Ongoing</p>
            </div>
            <div class="para_wrap">
              <h4>Accomplishments:</h4>
              <ul class="detail_list">
                <li>Created revenue for dentistry practice with new website and good SEO practices.</li>
                <li>Setup client Google Analytics, Domains and Search Console.</li>
                <li>Recieved multiple appointment requests within the first month of site launch.</li>
                <li>Recieved organic traffic and high search placement.</li>
              </ul>
              <RouterLink to="about" class="textlink_alt">See more here</RouterLink>
            </div>
          </template>
        </AccordionRow>
        <div class="ref_row row">
          <div class="col-xs-12">
            <ReferenceSlider ref_head="References"></ReferenceSlider>
          </div>
        </div>
      </div>
    </main>
</template>
  
<style scoped>

</style>
  