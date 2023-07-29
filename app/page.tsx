import RQComponent from "./_components/RQComponent";

export default function Home() {
  return (
    <main>
      <RQComponent
        title="100 ms"
        dataPromise={
          new Promise((resolve) => {
            console.log(">> 100ms Promise created on the server");
            setTimeout(() => resolve("resolved in 100 ms"), 100);
          }) as Promise<string>
        }
      />
      <RQComponent
        title="500 ms"
        dataPromise={
          new Promise((resolve) =>
            setTimeout(() => resolve("resolved in 500 ms"), 500)
          ) as Promise<string>
        }
      />
      <RQComponent
        title="1000 ms"
        dataPromise={
          new Promise((resolve) =>
            setTimeout(() => resolve("resolved in 1000 ms"), 1000)
          ) as Promise<string>
        }
      />
      <RQComponent
        title="5000 ms"
        dataPromise={
          new Promise((resolve) =>
            setTimeout(() => resolve("resolved in 5000 ms"), 5000)
          ) as Promise<string>
        }
      />
    </main>
  );
}
