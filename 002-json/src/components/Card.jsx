export default function Card({ title, price, category, desc, img, key }) {
  return (
    <div className="mt-8 md:grid md:gap-6 md:grid-cols-4">
      <div className="flex flex-col items-center rounded-lg shadow-xl pb-4 overflow-hidden w-full">
        <img className="w-full aspect-square object-cover" src={img} alt="" />
        <h2 className="font-bold text-xl mt-4 text-center line-clamp-1">
          {title}
        </h2>
        <div className="flex gap-1 mt-4">
          <span className="text-red-600 font-bold">{price}</span>
          <span>$</span>
        </div>
      </div>
    </div>
  );
}
