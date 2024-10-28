const Skeleton = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-4  min-h-[calc(100vh-160px)]">
      <div className="bg-gray-300 h-48 rounded"></div>{" "}
      <div className="bg-gray-300 h-6 rounded w-3/4"></div>{" "}
      <div className="bg-gray-300 h-4 rounded w-1/2"></div>{" "}
      <div className="bg-gray-300 h-4 rounded w-1/3"></div>{" "}
      <div className="bg-gray-300 h-4 rounded w-5/6"></div>{" "}
    </div>
  );
};

export default Skeleton;
