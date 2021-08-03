import { createRef, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { Dir, InfiniteScrollProps } from "../index.d";

const InfiniteScroll = ({
  children,
  variant,
  debounceTimeOut,
  dir,
  onLoad,
}: InfiniteScrollProps): JSX.Element => {
  const ref = createRef<HTMLDivElement>();
  const debounced = useDebounce(onLoad, debounceTimeOut || 1000);
  const [prevScrollable, setPrevScrollable] = useState(-1);
  function updatePosition() {
    if (ref?.current) {
      const height = ref.current.scrollHeight - ref.current.scrollTop;

      if (prevScrollable !== height) {
        if (dir === Dir.TOP && ref.current.scrollTop === 0) {
          debounced();
        }
        if (
          ref.current.scrollHeight - ref.current.scrollTop ===
            ref.current.clientHeight &&
          ref.current.scrollTop !== 0
        ) {
          debounced();
        }
      }

      setPrevScrollable(ref.current.scrollHeight - ref.current.scrollTop);
    }
  }
  return (
    <div
      className={variant}
      ref={ref}
      onScroll={updatePosition}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        overflowY: "scroll",
        zIndex: -1,
      }}
    >
      {children}
    </div>
  );
};
export default InfiniteScroll;
