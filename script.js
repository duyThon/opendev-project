const { createApp, ref, onMounted, onUnmounted } = Vue;

createApp({
  setup() {
    const navbar = ref(null);
    const lastScrollY = ref(0);
    const isScrollingUp = ref(false);

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.value) {
        gsap.to(navbar.value, {
          y: "-100%",
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        gsap.to(navbar.value, { y: "0%", duration: 0.2, ease: "power2.out" });
        isScrollingUp.value = true;
      }
      lastScrollY.value = window.scrollY;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { navbar, isScrollingUp };
  },
}).mount("#app");
