import axios from "axios";
import { Author, News } from "../types";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getNews = async () => {
  try {
    const response = await api.get(`/news`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch news");
    }
    const data: News[] = await response.data;
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (error: any) {
    throw new Error("Failed to fetch news");
  }
};

export const getSingleNews = async (id: number) => {
  try {
    const response = await api.get(`/news/${id}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch news");
    }
    const data: News = await response.data;
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (error: any) {
    throw new Error("Failed to fetch news");
  }
};

export const getAuthor = async (id: number) => {
  await wait(3000);
  try {
    const response = await api.get(`/authors/${id}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch author");
    }
    const data: Author = await response.data;
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (error: any) {
    throw new Error("Failed to fetch author");
  }
};
