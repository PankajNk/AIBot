"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/dashboard");
  };

  return(
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle> Welcome to AI Powered Bot Auto Quiz</CardTitle>
          <CardDescription>
            This need to keep once application finish
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleRedirect}>Go to Dashboard</Button>
        </CardContent>
      </Card>
    </div>
    
  );
}
