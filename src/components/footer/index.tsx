import React from "react";
import { Zap } from "lucide-react";

type MenuItemsType = {
  title: string;
  items: {
    subtitle: string;
    href: string;
  }[];
}[];

const menuItems: MenuItemsType = [
  {
    title: "Platform",
    items: [
      {
        subtitle: "Analytics",
        href: "/analytics",
      },
      {
        subtitle: "Planning",
        href: "/analytics",
      },
      {
        subtitle: "Collaboration",
        href: "/analytics",
      },
      {
        subtitle: "Data Management",
        href: "/analytics",
      },
      {
        subtitle: "Integrations",
        href: "/analytics",
      },
      {
        subtitle: "Security",
        href: "/analytics",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        subtitle: "Customer",
        href: "/analytics",
      },
      {
        subtitle: "Strategy Finance",
        href: "/analytics",
      },
      {
        subtitle: "Ebooks & Guides",
        href: "/analytics",
      },
      {
        subtitle: "Webinars & Events",
        href: "/analytics",
      },
      {
        subtitle: "Postcast & Videos",
        href: "/analytics",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        subtitle: "Financial",
        href: "/analytics",
      },
      {
        subtitle: "Investors & CEOs",
        href: "/analytics",
      },
      {
        subtitle: "Revenue Operations",
        href: "/analytics",
      },
      {
        subtitle: "Sales & Marketing",
        href: "/analytics",
      },
      {
        subtitle: "Human Resources",
        href: "/analytics",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        subtitle: "Customer",
        href: "/analytics",
      },
      {
        subtitle: "Strategy Finance",
        href: "/analytics",
      },
      {
        subtitle: "Ebooks & Guides",
        href: "/analytics",
      },
      {
        subtitle: "Webinars & Events",
        href: "/analytics",
      },
      {
        subtitle: "Postcast & Videos",
        href: "/analytics",
      },
      {
        subtitle: "Matrics Catelog",
        href: "/analytics",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t-[2px] md:text-base text-sm">
      <div className="md:py-20 py-10 align-element">
        <div className="grid md:grid-cols-5 grid-cols-1 gap-y-6 justify-items-center md:text-left text-center">
          <div className="md:space-y-6 space-y-2">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-black rounded-full">
                <Zap className="text-white" />
              </div>
              <span className="font-bold text-lg">GoStock</span>
            </div>
            <div>
              <span>
                Technology Park <br />
                8-14 Marie Curie Street <br />
                08042 Barcelona
              </span>
            </div>
            <div>
              <a
                href="mailto:gostock@example.com"
                target="_top"
                className="font-bold underline"
              >
                gostock@example.com
              </a>
            </div>
          </div>
          {menuItems.map((item) => {
            return (
              <div key={item.title} className="space-y-6">
                <div className="font-bold">{item.title}</div>
                <div>
                  <ul>
                    {item.items.map((item) => {
                      return (
                        <li key={item.subtitle} className="my-2">
                          <a href={item.href}>{item.subtitle}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-black">
        <p className="text-center uppercase text-white py-4">
          @ 2022 copyright - GoStock
        </p>
      </div>
    </footer>
  );
};

export default Footer;
