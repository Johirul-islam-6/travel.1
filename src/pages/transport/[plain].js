import { useRouter } from "next/router";

const Plain = () => {
  const router = useRouter();
  const dynamic = router.query.plain;
  return (
    <>
      <h1>This is {dynamic} page</h1>
    </>
  );
};

export default Plain;
