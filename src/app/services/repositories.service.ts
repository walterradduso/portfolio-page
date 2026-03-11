import { Repository, UpdatedRepository } from '../models';

export const getRepositories = async (): Promise<UpdatedRepository[]> => {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    // eslint-disable-next-line no-console
    console.error('GITHUB_TOKEN is not configured');

    return [];
  }

  const apiUrl = 'https://api.github.com';

  const response = await fetch(`${apiUrl}/user/repos?visibility=public`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error(`Failed to fetch repositories: ${response.status}`);

    return [];
  }

  const data = await response.json();

  const repositories: UpdatedRepository[] = data.map((repository: Repository) => ({
    id: repository.id,
    name: repository.name,
    fullName: repository.full_name,
    description: repository.description,
    url: repository.html_url,
    language: repository.language,
    homepage: repository.homepage,
    topics: repository.topics,
  }));

  return repositories;
};
