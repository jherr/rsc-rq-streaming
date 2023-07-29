"use client";
import { useQuery } from "@tanstack/react-query";

const RQComponent = ({
  title,
  dataPromise,
}: {
  title: string;
  dataPromise: Promise<string>;
}) => {
  const { data, isFetching } = useQuery(
    ["dataPromise", title],
    () => dataPromise
  );
  if (isFetching) return <div>Loading {title}...</div>;
  return (
    <div className="flex gap-2">
      <div>{title}</div>
      <div>{data?.toString()}</div>
    </div>
  );
};

export default RQComponent;
