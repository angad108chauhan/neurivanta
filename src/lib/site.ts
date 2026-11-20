export const site = {
  name: "NEURIVANTA",
  description:
    "A technology brand bringing ambitious thinking and emerging technology together to shape what comes next.",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@neurivanta.com",
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
