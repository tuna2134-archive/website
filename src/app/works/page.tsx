import { Work } from "./work";

export const metadata = {
  title: "works | tuna2134",
  description: "作ったもの一覧",
};

export default async function Page() {
  return (
    <div>
      <Work count={null} />
    </div>
  )
}