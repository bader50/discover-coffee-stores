import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function CoffeeStore() {
  const router = useRouter();
  return (
    <div>
      <div>CoffeeStore {router.query.id}</div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default CoffeeStore;
