interface CustomBadgeType {
  text: string;
  className: string;
}

const CustomBadge = (props: CustomBadgeType) => {
  const { text, className } = props;
  return (
    <>
      <p
        className={`px-2 py-1 text-xs ${
          className && className
        } rounded-full w-fit`}
      >
        {text}
      </p>
    </>
  );
};

export default CustomBadge;
