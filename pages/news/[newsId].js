import { useRouter } from "next/router";

// our-domain.com/news/someNestedPage

function DetailsPage() {
  const router = useRouter();

  return <h1>The Details page</h1>;
}

export default DetailsPage;
