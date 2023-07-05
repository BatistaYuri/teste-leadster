import {
  IconDefinition,
  faCloudDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum ButtonDownloadTheme {
  XLS = "button-download-theme-xls",
  DOC = "button-download-theme-doc",
  PPT = "button-download-theme-ppt",
}

export function ButtonDownload({
  onClick,
  text,
  icon,
  theme,
}: {
  onClick: () => void;
  text: string;
  icon: IconDefinition;
  theme: ButtonDownloadTheme;
}) {
  return (
    <button className={`flex justify-center items-center ${theme}`}>
      <div className="flex items-center px-2 py-1 rounded-l-md h-full">
        <FontAwesomeIcon icon={icon} height={18} width={18} />
      </div>
      <p className="px-2 py-1 rounded-r-md font-semibold text-sm">{text}</p>
    </button>
  );
}
