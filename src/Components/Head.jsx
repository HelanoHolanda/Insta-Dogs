import { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    document.title = props.title + " | Dogs";
  }, [props]);

  return <></>;
};

export default Head;
