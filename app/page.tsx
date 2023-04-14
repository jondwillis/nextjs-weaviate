// ✅ This pattern works. You can pass a Server Component
// as a child or prop of a Client Component.
import ClientComponent from "./client";
import ClientStats from "./ClientStats";
import Stats from "./Stats";

// Pages are Server Components by default
export default function Page() {
  return (
    <ClientComponent>
      <Stats clientId={''}/>
      <ClientStats/>
    </ClientComponent>
  );
}