import Image from "next/image";

type Props = {
  data?: any;
  handleValue: (id: string) => (e: React.MouseEvent | any) => void;
};

const CategoryCenterLayout = (props: Props) => {
  const { data, handleValue } = props;

  return (
    <>
      <div className="text-center mx-auto space-y-2 my-4">
        <h2 className="font-bold text-xl">What product you love to order</h2>
        <p className="text-gray-600">
          Here order your favorite foods from different categories
        </p>
      </div>
      <div className=" w-full flex gap-x-14 mb-10 justify-center overflow-x-auto">
        {data &&
          data.slice(0, 5).map((category: any) => (
            <div className="text-center group">
              <input
                className="peer appearance-none"
                type="radio"
                name="categoryRadio"
                id={category.name}
                value={category._id}
                onChange={handleValue(category._id)}
              />
              <label
                htmlFor={category.name}
                className=" peer-checked:border peer-checked:border-primary flex justify-center items-center cursor-pointer size-20 lg:size-24 border rounded-full"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={50}
                  height={50}
                  className="mx-auto group-hover:scale-75 transition-all duration-300"
                />
              </label>
              {category.name}

              {/* <div className=" absolute left-0 w-full h-full peer-checked:border peer-checked:border-red-400">
              <p>{category.name}</p>
            </div> */}
            </div>
          ))}
      </div>
    </>
  );
};

export default CategoryCenterLayout;
