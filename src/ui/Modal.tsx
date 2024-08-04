import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiMiniBackspace } from "react-icons/hi2";

interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openName: "",
  open: () => {},
  close: () => {},
});

type ModalProp = {
  children: ReactNode;
};
function Modal({ children }: ModalProp) {
  const [openName, setOpenName] = useState<string>("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}
type OpenProp = {
  children: ReactElement;
  opens: string;
};
function Open({ children, opens: opensWindowName }: OpenProp) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}
type WindowProp = {
  name: string;
  children: ReactElement;
};
function Window({ name, children }: WindowProp) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("Clicked outside");
        close();
      }
    };
    if (name === openName) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => document.removeEventListener("mousedown", handleClick);
  }, [close, name, openName]);
  if (name !== openName) return null;
  return createPortal(
    <section className="fixed flex items-center justify-center top-0 left-0 w-full h-svh bg-[rgba(0, 0, 0, 0.3)] backdrop-blur-sm z-[20] transition-all py-5">
      <div
        className="max-w-[80%] md:h-[80%] fixed bg-gray-800 bg-opacity-50 p-3 rounded-lg box-border shadow-lg translate-[-50%,-50%] transition-all"
        ref={ref}
      >
        <button
          className="md:text-2xl bg-black bg-opacity-50 hover:bg-opacity-75 text-yellow-500 rounded-lg  z-30 bg-none border-none p-2 translate-x-3 transition-all absolute md:top-5 md:right-8 top-2 right-5"
          onClick={close}
        >
          <HiMiniBackspace />
        </button>
        <div>{cloneElement(children, { closeModal: close })}</div>
      </div>
    </section>,
    document.body
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
