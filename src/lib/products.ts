export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  paragraphs: string[];
  images: ProductImage[];
};

export const products: Product[] = [
  {
    slug: "main-lt-panel",
    name: "Main LT Panel",
    shortDescription:
      "We manufacture and install Main LT Panels, built to order in different sizes and ratings.",
    paragraphs: [
      "We manufacture and install Main LT Panels ourselves, building each one to order rather than selling off the shelf. Panels can be built with different numbers of outgoing ways and different incoming ratings, depending on how many circuits a site needs and how much load the supply has to carry.",
      "Once installed, the panel is the point where low voltage power comes in from the supply and gets split out to the rest of the building. Meters and indicator lights on the front let site staff check voltage and load without opening the doors, and the breakers inside are arranged so any single circuit can be switched off without shutting down the whole panel.",
    ],
    images: [
      {
        src: "/images/products/main-lt-panel-1.png",
        alt: "Main LT panel with incoming and outgoing sections",
      },
      {
        src: "/images/products/main-lt-panel-2.png",
        alt: "Main LT panel with doors open showing internal breakers and wiring",
      },
    ],
  },
  {
    slug: "small-distribution-panel",
    name: "Small Distribution Panel",
    shortDescription:
      "We build and install small distribution panels sized to match what each site needs.",
    paragraphs: [
      "We build and install small distribution panels for offices, plant rooms, and individual pieces of equipment that need their own dedicated supply. Panels are sized to match what a site actually needs, from a handful of breakers up to a fully loaded board, and we can build to a client's own layout if one is provided.",
      "The panel shown here was built for a data center emergency supply. Once installed, it takes power in from a main source and splits it into smaller circuits, each on its own breaker so it can be isolated without affecting the rest. We finish every panel with clear warning labels and a lock, since boards like this are usually installed close to the equipment they feed.",
    ],
    images: [
      {
        src: "/images/products/small-distribution-panel-1.png",
        alt: "Small distribution panel enclosure with warning label",
      },
      {
        src: "/images/products/small-distribution-panel-2.png",
        alt: "Small distribution panel with door open showing rows of breakers",
      },
    ],
  },
  {
    slug: "auto-main-failure-panel",
    name: "Auto Main Failure Panel (AMF)",
    shortDescription:
      "We manufacture and install AMF panels that switch a site to generator power automatically.",
    paragraphs: [
      "We manufacture and install AMF panels for sites that need backup power to take over without anyone starting a generator by hand. Panels can be built with a single changeover section or with multiple compartments, depending on how many incoming sources a site has to manage.",
      "Once installed, the panel watches the main power supply and switches the site over to the generator automatically if it fails, then switches back once mains power is restored. The unit shown here has two separate compartments, each with its own breaker and control wiring, with enough room inside for testing and maintenance.",
    ],
    images: [
      {
        src: "/images/products/amf-panel.jpeg",
        alt: "Auto main failure panel with two open breaker compartments",
      },
    ],
  },
  {
    slug: "power-factor-improvement-plant",
    name: "Power Factor Improvement Plant",
    shortDescription:
      "We build and install power factor plants sized to a site's actual load.",
    paragraphs: [
      "We build and install power factor improvement plants sized to a site's actual load, from a small single stage unit up to a multi stage panel for larger industrial supplies. Each plant is built in sections so individual stages can be serviced without shutting down the whole supply.",
      "Once installed, the plant corrects the power factor of the electrical supply, which cuts down on wasted current and reduces the strain on cables and transformers. Over time this can lower electricity bills and reduce the load equipment has to carry.",
    ],
    images: [
      {
        src: "/images/products/power-factor-plant.png",
        alt: "Power factor improvement plant panel with indicator lights",
      },
    ],
  },
  {
    slug: "plc-control-panel",
    name: "PLC Control Panel",
    shortDescription:
      "We design and build PLC control panels to automate pumps, motors, and other equipment.",
    paragraphs: [
      "We design and build PLC control panels for pumps, motors, and other equipment that need automated control instead of manual switching for every step. A panel might run a single motor or manage several pumps and starters from one enclosure, and we wire each one to match the client's own control sequence.",
      "Once installed, the controller inside handles the day to day logic, while start and stop buttons on the front still let an operator step in and run things by hand when needed. Panels can include their own voltmeter and ammeter along with trip indicators for things like overload or motor temperature, and breakers and contactors are wired and labeled clearly so any fault can be traced quickly during a service visit.",
    ],
    images: [
      {
        src: "/images/products/plc-panel-1.png",
        alt: "PLC control panel front with start and stop buttons",
      },
      {
        src: "/images/products/plc-panel-2.jpeg",
        alt: "PLC control panel wiring with programmable logic controller and breakers",
      },
      {
        src: "/images/products/plc-panel-3.jpeg",
        alt: "Motor control unit panel with voltmeter and ammeter",
      },
      {
        src: "/images/products/plc-panel-4.jpeg",
        alt: "PLC control panel internal busbars and wiring",
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
