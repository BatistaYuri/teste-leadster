import Image from "next/image";
import { AboutList } from "./About";
import { About, Icon } from "@/components";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const mainLinks: AboutList = {
  name: "Links Principais",
  itens: [
    { id: 0, name: "Home", href: "" },
    { id: 1, name: "Ferramenta", href: "" },
    { id: 2, name: "Preços", href: "" },
    { id: 3, name: "Contato", href: "" },
  ],
};
const cases: AboutList = {
  name: "Cases",
  itens: [
    { id: 0, name: "Blog", href: "" },
    { id: 1, name: "Parceria com Agências", href: "" },
    { id: 2, name: "Guia Definitivo de Marketing", href: "" },
    { id: 3, name: "Materiais Gratuitos", href: "" },
  ],
};
const materials: AboutList = {
  name: "Materiais",
  itens: [
    { id: 0, name: "Geração de Leads B2B", href: "" },
    { id: 1, name: "Geração de Leads em Software", href: "" },
    { id: 2, name: "Geração de Leads em Imobiliária", href: "" },
    { id: 3, name: "Cases de Sucesso", href: "" },
  ],
};

export function Footer() {
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
            Transformando visitantes em clientes.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 w-full">
          <About list={mainLinks} />
          <About list={cases} />
          <About list={materials} />
          <div className="px-3">
            <p className="text-lg font-semibold mb-5">Siga a Leadster</p>
            <div className="icon-social mb-2">
              <Icon svg={faLinkedinIn} href="" />
              <Icon svg={faFacebookF} href="" />
              <Icon svg={faInstagram} href="" />
            </div>
            <div className="flex flex-wrap">
              <p className="font-medium">E-mail:</p>
              <span style={{ color: "#677294", fontSize: "15px" }}>
                contato@leadster.com.br
              </span>
            </div>
            <div className="flex flex-wrap">
              <p className="font-medium">Telefone:</p>
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
              Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
              <span className="text-blue cursor-pointer">Leadster</span>
            </p>
          </div>
          <div className="px-3">
            <p style={{ color: "#677294" }}>
              Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
              Termos de uso
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
