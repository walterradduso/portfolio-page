export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  homepage: string;
  language: string;
  topics: string[];
}

export interface UpdatedRepository {
  id: number;
  name: string;
  fullName: string;
  url: string;
  description: string;
  homepage: string;
  language: string;
  topics: string[];
}
