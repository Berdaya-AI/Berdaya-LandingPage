import { ScaleTogetherModel } from "@/db/models/scaleTogether.model";

export const POST = async (req: Request) => {
  try {
    const contentType = req.headers.get("Content-Type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      const { firstName, lastName, companyName, jobTitle, email, budget, help, projectDetail, terms } = body as {
        firstName: string;
        lastName: string;
        companyName: string;
        jobTitle: string;
        email: string;
        budget: string;
        help: string[];
        projectDetail: string;
        terms: boolean;
      };
      await ScaleTogetherModel.create({ firstName, lastName, companyName, jobTitle, email, budget, help, projectDetail, terms });
      return new Response("Success", { status: 200 });
    } else {
      return new Response("Unsupported Content-Type", { status: 415 });
    }
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};