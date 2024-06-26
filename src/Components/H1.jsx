// eslint-disable-next-line react/prop-types
const H1 = ({ children }) => {
  return (
    <h1 className="font-serif font-medium leading-none text-5xl my-4 relative z-10 after:content-[''] after:w-6 after:h-6 after:bg-yellow-500 after:absolute after:bottom-0 after:-left-1 after:rounded after:-z-10	">
      {children}
    </h1>
  );
};

export default H1;
