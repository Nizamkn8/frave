"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const collections = [
  {
    id: 1,
    title: "Royal Oud",
    image: "/collections/royal_oud.png",
    description: "Rich oud blended with amber and oriental spices.",
  },
  {
    id: 2,
    title: "Amber Gold",
    image: "/collections/amber.png",
    description: "Warm amber notes crafted for timeless elegance.",
  },
  {
    id: 3,
    title: "Floral Essence",
    image: "/collections/floral.png",
    description: "A delicate harmony of roses and white flowers.",
  },
  {
    id: 4,
    title: "Midnight Musk",
    image: "/collections/midnight_musk.png",
    description: "Deep musk accords for unforgettable evenings.",
  },
];

const bestSellers = [
  {
    id: 1,
    name: "Royal Oud",
    image: "/products/royal_out_b.png",
    price: "₹4,999",
  },
  {
    id: 2,
    name: "Amber Gold",
    image: "/products/amber_b.png",
    price: "₹3,999",
  },
  {
    id: 3,
    name: "Floral Essence",
    image: "/products/flora_b.png",
    price: "₹3,499",
  },
  {
    id: 4,
    name: "Midnight Musk",
    image: "/products/musk_b.png",
    price: "₹4,499",
  },
];

const newArrivals = [
  {
    id: 1,
    name: "Midnight Amber",
    price: "$120",
    image: "/collections/floral.png",
  },
  {
    id: 2,
    name: "Velvet Rose",
    price: "$140",
    image: "/collections/amber.png",
  },
  {
    id: 3,
    name: "Golden Musk",
    price: "$130",
    image: "/collections/midnight_musk.png",
  },
  {
    id: 4,
    name: "Noir Essence",
    price: "$150",
    image: "/collections/royal_oud.png",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    review:
      "Absolutely stunning fragrance. The scent lasts all day and feels incredibly luxuriouss.",
  },
  {
    id: 2,
    name: "Michael James",
    review:
      "One of the best perfumes I've ever purchased. Elegant packaging and amazing quality.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    review:
      "Received so many compliments. The fragrance is unique and sophisticated.",
  },
  {
    id: 4,
    name: "David Brown",
    review: "The packaging, scent, and longevity exceeded my expectations.",
  },
  {
    id: 5,
    name: "Sophia Lee",
    review: "A premium fragrance experiences from start to finish.",
  },
];

export default function HomePage() {
  "use client";

  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");

    gsap.set(panels, {
      opacity: 0,
    });

    gsap.set(panels[0], {
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: () => {
          const header = document.querySelector("header");
          return `top top+=${header?.offsetHeight || 64}`;
        },
        end: "+=3000",
      },
    });

    tl.to(panels[0], { opacity: 0 })
      .to(panels[1], { opacity: 1 }, "<")
      .to(panels[1], { opacity: 0 })
      .to(panels[2], { opacity: 1 }, "<");
  }, []);

  const [activeTab, setActiveTab] = useState("best-sellers");

  const products = activeTab === "best-sellers" ? bestSellers : newArrivals;

  return (
    <main>
      {/* banner section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/banner/video-banner.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </section>

      <section
        ref={containerRef}
        className="relative h-[calc(100dvh-64px)] overflow-hidden md:h-[calc(100dvh-145px)]"
      >
        {/* Section 1 */}
        <div className="panel absolute inset-0">
          <Image
            src="/banner/img/perfume-img-1.png"
            alt="perfume img"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-12 text-center md:pb-20">
            <h3 className="mb-4 text-3xl font-light text-white sm:text-4xl md:text-5xl">
              CELEBRATE HIM
            </h3>

            <button className="bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-black md:px-8 md:py-4">
              Gifts For Him
            </button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="panel absolute inset-0">
          <Image
            src="/banner/img/perfume-img-2.png"
            alt="Crafted With Passion"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center md:justify-end md:px-20 md:text-right">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-light sm:text-4xl md:text-5xl">
                Crafted With Passion
              </h2>

              <p className="mt-4 text-base md:mt-6 md:text-lg">
                Discover timeless fragrances inspired by tradition and modern
                elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="panel absolute inset-0">
          <Image
            src="/banner/img/perfume-img-3.png"
            alt="Royal Oud"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center md:justify-start md:px-20 md:text-left">
            <div className="max-w-xl">
              <h2 className="mb-4 text-4xl font-light text-white sm:text-5xl md:mb-6 md:text-7xl">
                Royal Oud
              </h2>

              <p className="mb-6 text-base text-zinc-300 md:mb-8 md:text-lg">
                A journey through rich oud, amber and timeless oriental
                craftsmanship.
              </p>

              <button className="border border-[#D4AF37] px-6 py-3 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black md:px-8 md:py-4">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* our collections section */}
      <section className="bg-black px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-3 uppercase tracking-[0.3em] text-[#D4AF37]">
              Discover
            </p>

            <h2 className="text-3xl font-light text-white sm:text-4xl md:text-5xl">
              Our Collections
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/60" />

                <div className="absolute bottom-0 p-6 text-white md:p-8">
                  <h3 className="mb-3 text-2xl font-light md:text-3xl">
                    {collection.title}
                  </h3>

                  <p className="text-sm text-zinc-300 opacity-100 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-20 md:group-hover:opacity-100">
                    {collection.description}
                  </p>

                  <button className="mt-4 border border-[#D4AF37] px-5 py-2 text-sm uppercase tracking-wider text-[#D4AF37] opacity-100 transition-all duration-500 hover:bg-[#D4AF37] hover:text-black md:mt-6 md:opacity-0 md:group-hover:opacity-100">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* best sellers and new arrivals */}
      <section className="bg-black px-6 pb-24">
        <div className="mb-16 flex justify-center">
          <div className="h-px w-100 max-w-6xl bg-[#D4AF37]/40" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-3 uppercase tracking-[0.3em] text-[#D4AF37]">
              Featured
            </p>

            <h2 className="text-3xl font-light text-white sm:text-4xl md:text-5xl">
              Our Fragrances
            </h2>

            <div className="mt-8 flex justify-center">
              <div className="flex flex-wrap overflow-hidden rounded-sm border border-[#D4AF37]/30">
                <button
                  onClick={() => setActiveTab("best-sellers")}
                  className={`px-4 py-3 text-xs uppercase tracking-wider transition sm:px-6 sm:text-sm ${
                    activeTab === "best-sellers"
                      ? "bg-[#D4AF37] text-black"
                      : "text-[#D4AF37]"
                  }`}
                >
                  Best Sellers
                </button>

                <button
                  onClick={() => setActiveTab("new-arrivals")}
                  className={`px-4 py-3 text-xs uppercase tracking-wider transition sm:px-6 sm:text-sm ${
                    activeTab === "new-arrivals"
                      ? "bg-[#D4AF37] text-black"
                      : "text-[#D4AF37]"
                  }`}
                >
                  New Arrivals
                </button>
              </div>
            </div>
          </div>

          <div
            key={activeTab}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {products.map((product) => (
              <div key={`${activeTab}-${product.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 text-center md:mt-6">
                  <h3 className="text-lg text-white md:text-xl">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-[#D4AF37]">{product.price}</p>

                  <button className="mt-4 border border-[#D4AF37] px-4 py-2 text-sm text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black md:px-5">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonial carousel section */}
      <section className="bg-black pb-24 text-white">
        <div className="mb-16 flex justify-center">
          <div className="h-px w-100 max-w-6xl bg-[#D4AF37]/40" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 uppercase tracking-[0.3em] text-center text-[#D4AF37]">
            Testimonials
          </p>

          <h2 className="mb-16 text-center text-4xl font-bold">
            What Our Customers Say
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-full rounded-2xl border border-neutral-800 bg-[#181818] p-8">
                  <div className="mb-4 text-xl text-white">★★★★★</div>

                  <p className="mb-6 grow text-neutral-400">{item.review}</p>

                  <h3 className="font-semibold text-white">{item.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-black pb-24  text-center text-white">
        <div className="mb-16 flex justify-center ">
          <div className="h-px w-100 max-w-6xl bg-[#D4AF37]/40" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold">Join Our Newsletter</h2>
          <p className="mt-4 text-neutral-400">
            Be the first to discover new fragrances and exclusive offers.
          </p>

          <div className="mx-auto mt-8 flex max-w-lg flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-neutral-700 bg-[#1a1a1a] px-6 py-3 text-white placeholder:text-neutral-500 focus:outline-none"
            />
            <button className="bg-white px-8 py-3 font-medium text-black transition hover:bg-neutral-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
