"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { ButtonDownload, ButtonDownloadTheme } from "../buttons/ButtonDownload";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import { Video } from "@/models/types";
import { useTranslations } from "next-intl";
import { Modal, Spinner } from "@/components";
export function VideoModal({
  video,
  onClose,
}: {
  video: Video | null;
  onClose?: () => void;
}) {
  const translate = useTranslations("common.home.list.modal");
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <Modal onClose={onClose}>
      <div className="pb-6">
        <div className="text-center px-24">
          <h3 className="text-[24px] font-semibold">
            <span className="text-blue">{translate("webinar")} </span>
            {video?.title}
          </h3>
        </div>
      </div>
      {loading && (
        <div className="absolute w-full top-[300px]">
          <Spinner />
        </div>
      )}
      <div className="react-player max-w-xl">
        <ReactPlayer
          controls={true}
          url={video?.url}
          playing={false}
          onReady={() => setLoading(false)}
        />
      </div>
      <div className="relative p-5">
        <p className="font-bold text-sm border-b pb-2">
          {translate("description")}
        </p>
        <p className="pt-2 text-justify text-sm pb-2">{video?.description}</p>
        <p className="font-bold text-sm border-b py-2">
          {translate("downloads")}
        </p>
        <div className="pt-2 flex flex-wrap gap-1">
          <ButtonDownload
            onClick={() => {}}
            text={translate("spreadsheet-xls")}
            icon={faCloudDownload}
            theme={ButtonDownloadTheme.XLS}
          ></ButtonDownload>
          <ButtonDownload
            onClick={() => {}}
            text={translate("document-doc")}
            icon={faCloudDownload}
            theme={ButtonDownloadTheme.DOC}
          ></ButtonDownload>
          <ButtonDownload
            onClick={() => {}}
            text={translate("presentation-ppt")}
            icon={faCloudDownload}
            theme={ButtonDownloadTheme.PPT}
          ></ButtonDownload>
        </div>
      </div>
    </Modal>
  );
}
