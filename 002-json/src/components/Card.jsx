export default function Card({ title, price, category, desc, img, key }) {
  return (
    <div className="flex flex-col justify-center w-full rounded-lg shadow-xl pb-4 overflow-hidden">
      <img className="w-full aspect-square object-cover" src={img} alt="" />
      <div>
        <h3 className="font-bold text-xl mt-4 text-center line-clamp-1">
          {title}
        </h3>
        <p className="line-clamp-1 text-center">{desc}</p>
        <div className="text-center mt-4">
          <span className="font-bold mr-1">{price}</span>
          <span>$</span>
        </div>
      </div>
    </div>
  );
}
