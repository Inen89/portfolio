const LineGradient = ({ width = "w-full", gradientColor }) => {
  return <div className={`h-0.5 ${width} ${gradientColor}`}></div>;
};

export default LineGradient;
