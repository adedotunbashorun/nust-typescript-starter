<template>
  <footer class="footer mt-4">
			<!-- Footer Top -->
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-12">
							<!-- Footer About -->
							<div class="single-widget footer-about widget">
								<div class="logo">
									<div class="img-logo">
										<a class="logo" href="index.html">
											<img class="img-responsive" :src="(settings||{}).appLogo" alt="logo">
										</a>
									</div>
								</div>
								<div class="footer-widget-about-description">
									<p>{{ (settings||{}).siteDescription }}</p>
								</div>
								<div class="social">
									<!-- Social Icons -->
									<ul class="social-icons">
										<li><a class="facebook" href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
										<li><a class="twitter" href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
										<li><a class="linkedin" href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
										<li><a class="pinterest" href="#" target="_blank"><i class="fa fa-pinterest-p"></i></a></li>
										<li><a class="instagram" href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
							<!--/ End Footer About -->
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							<!-- Footer Links -->
							<div class="single-widget f-link widget">
								<h3 class="widget-title">Company</h3>
								<ul class=" list-unstyled">
									<li><nuxt-link to="#">About Us</nuxt-link></li>
									<li><nuxt-link to="#">Our Services</nuxt-link></li>
									<li><nuxt-link to="#">Contact us</nuxt-link></li>
								</ul>
							</div>
							<!--/ End Footer Links -->
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							<!-- Footer Contact -->
							<div class="single-widget footer_contact widget">
								<h3 class="widget-title">Contact</h3>
								<p>Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem</p>
								<ul class="address-widget-list">
									<li class="footer-mobile-number"><i class="fa fa-phone"></i>{{ (settings||{}).appPhone }}</li>
									<li class="footer-mobile-number"><i class="fa fa-envelope"></i>{{ (settings||{}).appEmail }}</li>
									<li class="footer-mobile-number"><i class="fa fa-map-marker"></i>{{ (settings||{}).appTitle }}</li>
								</ul>
							</div>
							<!--/ End Footer Contact -->
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
							<!-- Footer Newsletter -->
							<div class="footer-newsletter">
								<form action="#" method="post" class="newsletter-area">
									<input type="email" placeholder="Your email address">
									<button type="submit">Sign Up</button>
								</form>
							</div>
							<!--/ End Footer Newsletter -->
						</div>
					</div>
				</div>
			</div>
			<!-- Copyright -->
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="copyright-content">
								<!-- Copyright Text -->
								<p>© Copyright <a href="#" class="text-white">{{ (settings||{}).appTitle }}</a>.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Copyright -->
		</footer>
</template>
<script lang="ts">
import Vue from 'vue';
import settings from '~/mixins/settings.ts';
export default Vue.extend({
  mixins: [settings],
})
</script>
