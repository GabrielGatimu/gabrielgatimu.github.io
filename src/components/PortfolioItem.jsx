// eslint-disable-next-line react/prop-types
function PortfolioItem({ title, imgUrl, type, stack, link, origin }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="text-sm mb-3 md:text-base font-light flex justify-between">type: {type}<span>{origin}</span></p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:border-white">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;