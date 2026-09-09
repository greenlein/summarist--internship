export interface Book {
  id: string;
  imageLink: string;
  audioLink: string;
  title: string;
  author: string;
  subTitle: string;
  totalRating: string;
  averageRating: string;
  keyIdeas: number;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}
