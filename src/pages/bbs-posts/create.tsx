"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import Link from 'next/link';
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const formSchema = z.object({
    username: z
      .string()
      .min(2, {message: "ユーザー名は2文字以上で入力してください"}),
    title: z
      .string()
      .min(2, {message: "タイトルは2文字以上で入力してください"}),
    content: z
      .string()
      .min(10, {message: "本文は10文字以上で入力してください"})
      .max(150, {message: "本文は150文字以内で入力してください"}),
})

const createPage = () => {

    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            title: "",
            content: "",
        },
    });

    async function onSubmit (value: z.infer<typeof formSchema>) {
        const { username, title, content } = value;
        try {
            await fetch("http://localhost:3000/api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, title, content }),
            });
            router.push("/Kmenu");
            router.refresh();
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <>
        <Button><Link href="/Kmenu">戻る</Link></Button>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-3/4 px-7">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="ユーザー名" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>タイトル</FormLabel>
              <FormControl>
                <Input placeholder="タイトル" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本文</FormLabel>
              <FormControl>
                <Textarea placeholder="投稿内容" className="resize-none" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </>
    );
};

export default createPage;