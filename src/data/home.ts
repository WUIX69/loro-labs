// ─── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "Services",  href: "/services" },
  { label: "Showcase",  href: "/showcase" },
  { label: "Pricing",   href: "/pricing" },
] as const

// ─── Hero Carousel ──────────────────────────────────────────────────────────
export interface CarouselSlide {
  title: string
  body: string
  alt: string
  imageUrl: string
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    title: "Vibrancy in Every Pixel",
    body: "Intelligence meets imagination at Loro Labs. Building the tools of tomorrow with colorful precision.",
    alt: "Tech parrot innovating at holographic screen",
    imageUrl: "https://lh3.googleusercontent.com/aida/AP1WRLuIWQg55NCGXbOzWr5i4OEtJDrksjzt_1ZKG9tklFyzk7C-QPtMxlLxT9rjX3AND1ov07Xx74UD8iwcArdrCbwLEj_7C8nWBNaVj19B6-O0p1FPtgKMzODUYI4Vb7X6a7twXHNvcfn9Og6QrgAq5MP7gOFXDtUuJ8hYlPattz0cqX48EfmQxqbKGipEFPPZI-2jzgYUkIZbDTHl74icRZ3Zk2utM9thW29mpDBdrZu7JppE2lda1siKIQ",
  },
  {
    title: "Creative Engineering",
    body: "We don't just solve problems; we imagine possibilities. Precision in design, boldness in color.",
    alt: "Parrot style creative",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6f_2XFU00UMXAZ_6KJx6VZ-ky_K9GNASKFa5vJ-inx8YgiwUN--9oY08BqrgaVSMHjswovGhYAv19tY2HaVFJvd2DOgXrnyOzbTOJm1sdAqhOieYBQ7GZOaelfa_GPnz0eJF8Gp8X_26lZs2DJ_Ui5OFTENJBXQSByH7vA1N8faS2EslH7wXAmoNIsNv-m3TiSxWHlrSy8lkbEA1yKKGpkTRhCaDfmduq8l3tbIH7T0xJd9JJHzbzpduWpCjFTMkRLg",
  },
  {
    title: "Infinite Imagination",
    body: "Nature's patterns, translated for the digital age. Fluid creativity for a fast-moving world.",
    alt: "Vibrant feathers macro photography",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp41RT-KbIwgmLSF1GgWo89-d9FoJ_XU6p9pI2mOd7jbwAzm1BuBnp-PWhmjVtFs8U0ldB_yJN8SGwUPakDUla3pJawN1S38v0y1C-EgHJ9vnrA8lAnvEB-ozb7YcRF9fTUSxjUt6vLIgZ29nfPyQx4FauTOutH9hCZr_V72AAPGB1OsfxiyckwTY9lnBxLEUbBLno4CoVTGgLa4MOWeAIZyUV_OIQD6x86KKbulJGKoIVbbCg5107uT3MaGqEn63T1g",
  },
]

// ─── Testimonials ────────────────────────────────────────────────────────────
export type TestimonialBorder = "green-500" | "blue-500" | "destructive"

export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  quote: string
  avatarBorder: TestimonialBorder
  avatarUrl: string        // individual portrait per person
  avatarFallback: string   // initials fallback
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    title: "CTO",
    company: "Zenith Apps",
    quote: "Loro Labs didn't just build our app; they brought a level of creative strategy we hadn't found anywhere else. Their technical precision is matched only by their vibrant design sense.",
    avatarBorder: "green-500",
    avatarUrl: "https://lh3.googleusercontent.com/aida/AP1WRLtkeyMxCo1QrbMVqadWNDyOk7IWS4HpsZX2TI0rac0JIaEzhFBB5yjccbqr50pMCIE2NTbxUbLBZ9LIe17k1Si6KPOVcxzE_JMb9svBl_BTEqy89p-T2dY18g33umPYWoLQB5Qu2SbxV2fihv06bprxDBoBFVhyFw-P-z-imgrR_NZ-JpKEv1kZG_SmbevFEVo-r7129dax3OgkglHiCj1G2i3IhUF_7cUHHn4DjlBpgnwiCRg5bUX3JdM",
    avatarFallback: "SJ",
  },
  {
    id: "david-chen",
    name: "David Chen",
    title: "Founder",
    company: "Pulse AI",
    quote: "The AI solutions provided by Loro Labs were game-changing for our workflows. They have a unique way of making complex technology feel intuitive and human.",
    avatarBorder: "blue-500",
    avatarUrl: "https://lh3.googleusercontent.com/aida/AP1WRLtkeyMxCo1QrbMVqadWNDyOk7IWS4HpsZX2TI0rac0JIaEzhFBB5yjccbqr50pMCIE2NTbxUbLBZ9LIe17k1Si6KPOVcxzE_JMb9svBl_BTEqy89p-T2dY18g33umPYWoLQB5Qu2SbxV2fihv06bprxDBoBFVhyFw-P-z-imgrR_NZ-JpKEv1kZG_SmbevFEVo-r7129dax3OgkglHiCj1G2i3IhUF_7cUHHn4DjlBpgnwiCRg5bUX3JdM",
    avatarFallback: "DC",
  },
  {
    id: "maria-gonzalez",
    name: "Maria Gonzalez",
    title: "Creative Director",
    company: "Vivid Global",
    quote: "Working with a studio that understands both the code and the color is rare. Loro Labs is our go-to partner for anything that needs to stand out and scale fast.",
    avatarBorder: "destructive",
    avatarUrl: "https://lh3.googleusercontent.com/aida/AP1WRLtkeyMxCo1QrbMVqadWNDyOk7IWS4HpsZX2TI0rac0JIaEzhFBB5yjccbqr50pMCIE2NTbxUbLBZ9LIe17k1Si6KPOVcxzE_JMb9svBl_BTEqy89p-T2dY18g33umPYWoLQB5Qu2SbxV2fihv06bprxDBoBFVhyFw-P-z-imgrR_NZ-JpKEv1kZG_SmbevFEVo-r7129dax3OgkglHiCj1G2i3IhUF_7cUHHn4DjlBpgnwiCRg5bUX3JdM",
    avatarFallback: "MG",
  },
]

// ─── Hero background ────────────────────────────────────────────────────────
export const HERO_BG_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCTGpmBeqYgGmseaHsvzAPJgYZbUb23ikU9QmY_QXIMv6-ZmDv9F8FpIflDzxoQjJ1od8QuKFSG57Y1xxLDG3-b2L4SxYx8RGnIpm8S88IIRZv6U7OLkWb0P3lQeyWp2VcZ5DYXitJYQeZV2yZ8pSNoam_OB1QJ9qvLdpaThNs-949ppMQNN9h89NP0dwo6l3_W0B59vHhHkLNG7_AY4XFmnAs7IAxCILfrz7VgEdxHe61CDMqQ-afQ9bk4KXrHEvKLOQ"
export const BRAND_PARROT_URL =
  "https://lh3.googleusercontent.com/aida/AP1WRLuIWQg55NCGXbOzWr5i4OEtJDrksjzt_1ZKG9tklFyzk7C-QPtMxlLxT9rjX3AND1ov07Xx74UD8iwcArdrCbwLEj_7C8nWBNaVj19B6-O0p1FPtgKMzODUYI4Vb7X6a7twXHNvcfn9Og6QrgAq5MP7gOFXDtUuJ8hYlPattz0cqX48EfmQxqbKGipEFPPZI-2jzgYUkIZbDTHl74icRZ3Zk2utM9thW29mpDBdrZu7JppE2lda1siKIQ"

export const TESTIMONIALS_BG_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDex_d2_nqb5hX8S3qQboUqbZ2sKoj4az0kvZguoCFMTqM4psHlVhJpZK7f_jI7XfnFTWUzhNQenYQAChN72-bvJEhF0xdYU_RYeKwBEFXk6SZaGqX9exLtpuugbzQs0pF2Jn7pzXstGTPfwCqlEVd_IU227bOACCi9ntMzuSzNtSn0CcfyDdnxpTzfbFb4WVbMVWnjLXW4f6WqBml-b1Bowc8ssPSwQs9NodkPqpHy9uECM7bLn8EPZAFr8OSXJes7bA"

export const LOGO_HEADER_URL = "/loro-logo.png"
export const LOGO_FOOTER_URL = "/loro-logo.png"
