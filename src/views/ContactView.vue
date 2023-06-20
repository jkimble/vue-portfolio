<script setup>
  import PageHero from '../components/custom/PageHero.vue'
  import SocialTextLinks from '../components/custom/SocialTextLinks.vue';
</script>

<template>
    <main class="contact innerpage">
        <PageHero hero_heading="Get in touch" hero_content="Whether you have a question, want to request a quote, or just want to say hello!" />
        <div class="container-fluid contact-contain content-wrap">
            <div class="row contact-wrap">
                <div class="col-xs-12 contact-intro">
                    <h2>Thank you for visiting my portfolio!</h2>
                    <p>
                        For prospective clients, recruiters, and/or HR managers, please use the links
                        below to find my resume, email, and more quick links.
                    </p>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12 linkcol">
                    <SocialTextLinks social_link="mailto:jkimble.dev@gmail.com">
                        <template #icon>
                            <i class="fa fa-envelope"></i>
                        </template>
                        <template #heading>
                            Contact me today
                        </template>
                        <template #content>
                            This is the quickest way to contact me. Email me to request
                            my phone number.
                        </template>
                    </SocialTextLinks>
                    <SocialTextLinks social_link="/Resume_up1.pdf">
                        <template #icon>
                            <i class="far fa-file-pdf"></i>
                        </template>
                        <template #heading>
                            View my resume
                        </template>
                        <template #content>
                            View/download my resume here.
                        </template>
                    </SocialTextLinks>
                    <SocialTextLinks social_link="https://github.com/jkimble">
                        <template #icon>
                            <i class="fa-brands fa-github"></i>
                        </template>
                        <template #heading>
                            GitHub
                        </template>
                        <template #content>
                            View my (public) personal GitHub.
                        </template>
                    </SocialTextLinks>
                    <SocialTextLinks social_link="https://www.linkedin.com/in/justin-kimble-890429180/">
                        <template #icon>
                            <i class="fa-brands fa-linkedin"></i>
                        </template>
                        <template #heading>
                            LinkedIn Profile
                        </template>
                        <template #content>
                            View my LinkedIn profile &amp; message me!
                        </template>
                    </SocialTextLinks>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12 infocol center-xs">
                    <img src="../assets/images/portrait.jpg" alt="Justin Kimble" class="img-portrait" width="300" />
                    <h3>Justin Kimble</h3>
                    <h4>Web Developer</h4>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .infocol img {
        max-width: 100%;
        clip-path: circle(45%);
    }

    .contact-intro {
        padding: 1.5rem 0;
    }

    @media (max-width: 1025px) {
        .linkcol {
            order: 3;
        }
        .contact-intro {
            order: 2;
            padding: 1rem;
        }
        .infocol {
            order: 1;
            padding-top: 1rem;
        }
    }
</style>