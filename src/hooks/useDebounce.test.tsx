import { useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { render } from "@testing-library/react";
it("useDebounce to be called", () => {
  jest.useFakeTimers();
  const onLoad = jest.fn();
  const Component = () => {
    const debounced = useDebounce(onLoad, 100);
    useEffect(() => {
      debounced("arg1", 3, "arg6", 100);
    }, [debounced]);

    return <div />;
  };
  render(<Component />);
  jest.advanceTimersByTime(150);
  expect(onLoad).toHaveBeenCalledWith("arg1", 3, "arg6", 100);
});
