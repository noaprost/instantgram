import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import Signin from "@/components/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Singin",
  description: "Signup or Login to Instantgram",
};

type Props = { 
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center items-center mt-24">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
