"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button, List, Modal } from "@/components";
import { ButtonType } from "@/components/Button";
import { useEffect, useState } from "react";
import { Video } from "@/models/videos";

export default function Home() {
  const [video, setVideo] = useState<Video | null>(null);
  useEffect(() => {
    const hidden = " overflow-y-hidden";
    if (video) {
      document.body.className += hidden;
    } else {
      document.body.className = document.body.className.replace(hidden, "");
    }
  }, [video]);
  return (
    <>
      {video && <Modal video={video} onClose={() => setVideo(null)} />}
      <div className="py-24 bg-light">
        <div className="container flex flex-col items-center">
          <div className="blue-box py-1 px-3 font-bold text-xs">
            <p className="text-blue">WEBINARS EXCLUSIVOS</p>
          </div>
          <h2 className="text-[2.4em] font-medium text-center">
            Menos Conversinha,
          </h2>
          <div className="flex flex-wrap justify-center px-5 pb-3 mb-2 border-b-2">
            <h1 className="text-7xl font-bold text-blue text-center mr-3">
              Mais
            </h1>
            <div className="relative">
              <h1 className="text-7xl font-bold text-blue text-center">
                Conversão
              </h1>
              <div className="flex w-full absolute justify-end top-[-2px] left-[16px]">
                <Image
                  src="/images/asset-header.png"
                  width={48}
                  height={48}
                  alt="Asset Logo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <p>
            Conheça as estratégias que{" "}
            <span className="font-semibold">mudam o jogo</span> e como
            aplicá-las no seu negócio
          </p>
        </div>
      </div>

      <div className="py-12">
        <div className="container flex justify-center">
          <List onClickVideo={(video) => setVideo(video)} />
        </div>
      </div>

      <div className="py-12 bg-light relative overflow-hidden">
        <div className="bg-wave"></div>
        <div className="container">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 place-items-center flex-wrap">
            <div className="flex z-[2]">
              <Image
                src="/images/comparativo_img_CTA.png"
                width={618}
                height={578}
                alt="Comparative Image"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="z-[2]">
              <h2 className="text-[2.4em] max-w-[450px] font-medium">
                Pronto para triplicar sua <b>Geração de Leads?</b>
              </h2>
              <h3 className="text-[18px] font-semibold my-6">
                Fácil criação e ativação
              </h3>
              <div className="flex justify-start items-center flex-wrap">
                <Button type={ButtonType.BLUE}>
                  VER DEMONSTRAÇÃO
                  <FontAwesomeIcon
                    className="inline ml-2"
                    icon={faArrowRight}
                    width={18}
                    height={18}
                  />
                </Button>
                <Image
                  src="/images/selo_RD.png"
                  width={150}
                  height={53.4}
                  alt="Stamp Rd Station"
                  className="m-4"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-start items-center flex-wrap mt-4">
                <div className="flex items-center">
                  <Image
                    src="/images/no-card-dark.webp"
                    width={16}
                    height={16}
                    alt="No Card"
                    loading="lazy"
                  />
                  <p className="text-[15px] font-medium mx-1">
                    Não é necessário cartão de crédito |
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/rating.webp"
                    width={92}
                    height={16}
                    alt="Rating"
                    loading="lazy"
                  />
                  <p className="text-[15px] font-medium ml-1">
                    <b>4.9</b>/5 - Média de Satisfação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
