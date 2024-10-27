"use client";

type Props = {
  params: { id: number };
};

const page = (props: Props) => {
  const { params } = props;

  return (
    <div>
      Product page {params.id}
      <h2 className="bg-primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
        voluptatibus!
      </h2>
    </div>
  );
};

export default page;
