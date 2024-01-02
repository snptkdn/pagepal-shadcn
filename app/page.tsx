import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const user = z.object({
  id: z.string().max(20),
  password: z.string().min(8),
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4">
      <div className="mt-5 ml-5">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Next.js Logo"
          width={150}
          height={37}
          priority
        />
      </div>
      <Card className="max-w-2xl mx-5">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Stock your book at Pagepal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="id">ID</Label>
            <Input type="string" placeholder="ID" />
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Create</Button>
        </CardFooter>
      </Card>
      <Card className="max-w-2xl mx-5">
        <CardHeader>
          <CardDescription>Already have an account?</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">SignIn</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
