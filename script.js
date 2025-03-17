const { createApp } = Vue;

createApp({
  data() {
    return {
      selectedIndex: 0,
      slides: [
        {
          title: "GO-KARTS",
          description:
            "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
          background: "./assets/section1/imgs/go-kart.jpg",
        },
        {
          title: "JUMPARENA",
          description:
            "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
          background: "./assets/section1/imgs/jumparena.jpg",
        },
        {
          title: "Virtuální realita",
          description:
            "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
          background: "./assets/section1/imgs/virtual-reality.jpg",
        },
        {
          title: "MULTIBALL",
          description:
            "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
          background: "./assets/section1/imgs/multiball.jpg",
        },
        {
          title: "Laserová střelnice",
          description:
            "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
          background: "./assets/section1/imgs/shooting-range.jpg",
        },
      ],

      steps: [
        {
          step: 1,
          title: "Choose an Attraction",
          description: "Choose from the attractions of the FUN arena.",
        },
        {
          step: 2,
          title: "Register",
          description:
            "You can register at the reception or by clicking the button above from the comfort of your home.",
          qr: true,
        },
        {
          step: 3,
          title: "Have Fun",
          description:
            "Thank you for your online registrations. For each purchase you get points, which you can apply to our services and attractions then. We look forward to you!",
        },
      ],

      attractions: [
        {
          title: "KARTARENA",
          url: "./assets/section1/imgs/go-kart.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "JUMPARNA",
          url: "./assets/section1/imgs/jumparena.jpg",
          description:
            "Arena with lots of attractions for children and adults of all ages. Trampolines, climbing wall, ninja track and other attractions.",
        },
        {
          title: "VIRTUAL REALITY",
          url: "./assets/section1/imgs/virtual-reality.jpg",
          description: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "MULTIBALL",
          url: "./assets/section1/imgs/multiball.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "LASER SHOOTING RANGE",
          url: "./assets/section1/imgs/shooting-range.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        },
        {
          title: "COMPANY EVENTS",
          url: "./assets/section3/imgs/bg.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        },
      ],

      navbar: null,
      lastScrollY: 0,
      isScrollingUp: false,
      bouncing: null
    };
  },

  computed: {
    selectedAttraction() {
      return this.attractions[this.selectedIndex];
    },
  },

  methods: {
    handleScroll() {
      if (window.scrollY > this.lastScrollY) {
        gsap.to(this.navbar, {
          y: "-100%",
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        gsap.to(this.navbar, { y: "0%", duration: 0.2, ease: "power2.out" });
        this.isScrollingUp = true;
      }
      this.lastScrollY = window.scrollY;
    },

    scrollToTop() {
      gsap.to(window, { scrollTo: { y: 0, autoKill: true }, duration: 1, ease: "power2.out" });
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.navbar = document.querySelector(".navbar");
      gsap.registerPlugin(ScrollToPlugin);

      if (this.navbar) {
        window.addEventListener("scroll", this.handleScroll);
      } else {
        console.error("hỏng mất rồi");
      }
    });
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: { delay: 999000 },
      pagination: { el: ".swiper-pagination", clickable: true },
      on: {
        slideChangeTransitionStart: () => {
          gsap.fromTo(
            ".swiper-slide-active div",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
          );
        },
      },
    });

    gsap.fromTo(
      ".swiper-slide-active div",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    this.bouncing = this.$refs.bouncing;
      gsap.to(this.bouncing, {
          y: -10, 
          repeat: -1, 
          yoyo: true, 
          duration: 0.8, 
          ease: "power1.inOut"
      });
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}).mount("#app");
