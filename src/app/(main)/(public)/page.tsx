import { fetchTeam } from "@/serverActions/fetchTeam";
import "./assets/main.css";
import Main from "./Main";
import { fetchEvaluationDates } from "@/serverActions/fetchEvaluationDates";
import { fetchCategories } from "@/serverActions/fetchCategories";
import { fetchOrganizations } from "@/serverActions/fetchOrganizations";
import { fetchStories } from "@/serverActions/fetchStories";
import { fetchLogos } from "@/serverActions/fetchLogos";

export default async function Page() {
  const evaluationDates = await fetchEvaluationDates();
  const organizations = await fetchOrganizations();
  const categories = await fetchCategories();
  const team = await fetchTeam();
  const stories = await fetchStories();
  const logos = await fetchLogos();

  if (
    !evaluationDates ||
    !team ||
    !stories ||
    !organizations ||
    !categories ||
    !logos
  )
    throw new Error("Unable to connect, try again");

  return (
    <main>
      <Main
        evaluationDates={evaluationDates}
        stories={stories}
        categories={categories}
        organizations={organizations}
        team={team}
        logos={logos}
      />
    </main>
  );
}