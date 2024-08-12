import { getCollection } from "../config/mongo";

  type FormData = {
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
  
  export class ScaleTogetherModel {
    static async create(formData: FormData) {
      const collection = getCollection<FormData>("scaleTogether");
      await collection.insertOne(formData);
    }
  }