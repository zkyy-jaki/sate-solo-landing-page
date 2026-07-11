export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Sate Kambing",
    description:
      "Sate kambing pilihan yang dibakar dengan bumbu kecap khas dan disajikan hangat.",
    price: 40000,
    image: "/images/menu/sate-kambing.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Tongseng Kambing",
    description:
      "Potongan daging kambing dengan kuah rempah gurih dan cita rasa khas.",
    price: 23000,
    image: "/images/menu/tongseng-kambing.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Nasi Goreng Kambing",
    description:
      "Nasi goreng berbumbu khas dengan potongan daging kambing yang gurih.",
    price: 28000,
    image: "/images/menu/nasi-goreng-kambing.jpg",
    featured: true,
  },
];