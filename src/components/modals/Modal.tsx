"use client";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose?: () => void;
}) {
  return (
    <div
      data-cy="modal"
      className="flex justify-center items-center fixed z-50 p-4 overflow-x-hidden overflow-y-auto inset-0 bg-black bg-opacity-30"
      onClick={onClose}
    >
      <div
        className="modal-animation relative w-auto mx-auto max-w-xl rounded-2xl overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="bg-white shadow rounded-[16px]">
          <div className="absolute w-full h-1 bg-blue" />
          <div
            data-cy="modal-close"
            className="flex justify-end pr-5 pt-3 pb-1 cursor-pointer"
            onClick={onClose}
          >
            <FontAwesomeIcon
              icon={faClose}
              height={20}
              width={20}
              color="#627397"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
