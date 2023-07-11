"use client";
import Image from "next/image";
import { AboutList } from "./About";
import { About, Icon } from "@/components";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
const mainLinks: AboutList = {
  name: "main-links",
  itens: [
    { id: 0, name: "home", href: "/" },
    { id: 1, name: "tool", href: "/" },
    { id: 2, name: "prices", href: "/" },
    { id: 3, name: "contact", href: "/" },
  ],
};
const cases: AboutList = {
  name: "cases",
  itens: [
    { id: 0, name: "blog", href: "/" },
    { id: 1, name: "partnership", href: "/" },
    { id: 2, name: "guide", href: "/" },
    { id: 3, name: "free-materials", href: "/" },
  ],
};
const materials: AboutList = {
  name: "materials",
  itens: [
    { id: 0, name: "b2b", href: "/" },
    { id: 1, name: "lead-generation-software", href: "/" },
    { id: 2, name: "lead-generation-real-estate", href: "/" },
    { id: 3, name: "success-stories", href: "/" },
  ],
};

export function Footer() {
  const translate = useTranslations("common.footer");
  return (
    <footer>
      <div className="container flex flex-col items-center py-8">
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/images/logo-animated.gif"
            width={270}
            height={62}
            alt="Logo Leadster"
            loading="lazy"
          />
          <p className="text-sm" style={{ color: "#677294", fontSize: "15px" }}>
            {translate("turning-visitors-customers")}
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 w-full">
          <About list={mainLinks} translate={translate} />
          <About list={cases} translate={translate} />
          <About list={materials} translate={translate} />
          <div className="px-3">
            <p className="text-lg font-semibold mb-5">
              {translate("follow-leadster")}
            </p>
            <div className="icon-social mb-2">
              <Icon svg={faLinkedinIn} href="/" />
              <Icon svg={faFacebookF} href="/" />
              <Icon svg={faInstagram} href="/" />
            </div>
            <div className="flex flex-wrap">
              <p className="font-medium">{translate("e-mail")}</p>
              <span style={{ color: "#677294", fontSize: "15px" }}>
                contato@leadster.com.br
              </span>
            </div>
            <div className="flex flex-wrap">
              <p className="font-medium">{translate("telephone")}</p>
              <span style={{ color: "#677294", fontSize: "15px" }}>
                (42) 98828-9851
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container grid grid-cols-2 w-full py-8">
          <div className="px-3">
            <p className="font-semibold" style={{ color: "#677294" }}>
              {translate("copyright")} |{" "}
              <span className="text-blue cursor-pointer">Leadster</span>
            </p>
          </div>
          <div className="px-3">
            <p style={{ color: "#677294" }}>
              Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{" "}
              {translate("terms-use")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
