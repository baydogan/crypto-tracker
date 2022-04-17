import { useEffect } from "react";

//scroll işlemleri için oluşturulan custom hook
const useScrollToTop = (behavior, trigger) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: behavior || "smooth",
    });
  }, [trigger]);
};

export default useScrollToTop;
