import { Repository, UpdatedRepository } from '../models';

export const getRepositories = async (): Promise<UpdatedRepository[]> => {
  const apiUrl = 'https://api.github.com';

  const response = await fetch(`${apiUrl}/user/repos?visibility=public`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch public repositories');
  }

  const data = await response.json();

  const repositories: UpdatedRepository[] = data.map((repository: Repository) => ({
    id: repository?.id,
    name: repository?.name,
    fullName: repository?.full_name,
    description: repository?.description,
    url: repository?.html_url,
    language: repository?.language,
    homePage: repository?.homepage,
  }));

  return repositories;
};
