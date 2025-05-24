import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/custom-ui/theme-toggle-button";
import React from "react";
import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";
import { revalidatePath } from "next/cache";
import Logout from "@/component-pages/Logout";
// import { useQuery } from "@tanstack/react-query";

async function page() {
  // useQuery({
  //   queryKey: ["todos"],
  //   queryFn: async () => {},
  // });
  const { data: todos } = await cookiesClient.models.Todo.list();
  const user = await AuthGetCurrentUserServer();

  async function addTodo(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    await cookiesClient.models.Todo.create({
      content: title,
      done: false,
      priority: "medium",
    });
    revalidatePath("/");
  }

  return (
    <div className="p-4">
      <h1>Hello, Amplify 👋</h1>
      {user && <Logout />}
      <form action={addTodo}>
        <input type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos && todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </ul>
      <ModeToggle />
      <Button>testad</Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default page;
